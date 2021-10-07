﻿var keyCodes = Object.freeze({
    'TAB': 9,
    'RETURN': 13,
    'ESC': 27,
    'SPACE': 32,
    'PAGEUP': 33,
    'PAGEDOWN': 34,
    'END': 35,
    'HOME': 36,
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40
});

const baseURI = 'api/';
let pages = [];
let courses = [];

let navLinks = slice(document.querySelectorAll('nav-link'));
for (let navLink of navLinks) {
    navLink.addEventListener('click', swapNavLinks);
    navLink.addEventListener('keydown', swapNavLinks);
}

listRecords("pages");

// show/hide various sections
// pass in the section that should be made active 
// and add .hidden to previously active section
function showHide(activeEl) {
    document.querySelector('.active').classList.add('hidden');
    document.querySelector('.active').classList.remove('active');
    activeEl.classList.remove('hidden');
    activeEl.classList.add('active');
}


function swapNavLinks(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let id = e.target.id.replace(/-link/, '');
        showHide(document.getElementById(id));

        let type;
        if (/list-courses/.test(id)) {
            type = 'courses';

            listRecords(type);
        }
        else if (/list-pages/.test(id)) {
            type = 'pages';

            listRecords(type);
        }
    }
}

function listRecords(type, e) {
    console.log('listRecords');
    let fullURI = baseURI + type;
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        fetch(fullURI)
            .then(response => response.json())
            .then(data => _displayRecords(data, type))
            .catch(error => console.error('Unable to get items.', error));
    }
}

function createCourse() {
    let fullURI = baseURI + 'courses'
    const addTitleTextbox = document.getElementById('course-title');
    const addNumTextbox = document.getElementById('course-number');
    const addTypeTextbox = document.getElementById('course-type');
    const addBlurbTextbox = document.getElementById('course-blurb');

    const item = {
        Crs_Id: 0,
        Crs_Title: addTitleTextbox.value.trim(),
        Crs_Number: addNumTextbox.value.trim(),
        Crs_Type: addTypeTextbox.value.trim(),
        Crs_Blurb: addBlurbTextbox.value.trim()
    };

    fetch(fullURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => listRecords('courses'))
        .then(() => document.getElementById("new-course-form").reset())
        .catch(error => console.error('Unable to add item.', error));
}

function createPage() {
    let fullURI = baseURI + 'pages'
    const addTitleTextbox = document.getElementById('page-title');
    const addJSONTextbox = document.getElementById('page-content');

    const pageJSON = cleanJSON(addJSONTextbox.value.trim());
    console.log(pageJSON);

    const item = {
        Pg_Id: 0,
        Pg_Title: addTitleTextbox.value.trim(),
        Pg_Content: pageJSON
    };

    fetch(fullURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => listRecords('pages'))
        .then(() => document.getElementById("new-page-form").reset())
        .catch(error => console.error('Unable to add item.', error));

}

function deleteRecord(item, e) {
    console.log(e.target.className.replace('delete-', ''))
    let fullURI = baseURI + e.target.className.replace('delete-', '');
    //var canDrive = age > 16 ? 'yes' : 'no';
    let id = item.pg_Id ? item.pg_Id : item.crs_Id;
    console.log(id);
    fetch(`${fullURI}/${id}`, {
        method: 'DELETE'
    })
        .then(() => listRecords(e.target.className.replace('delete-', '')))
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(item, e) {
    showHide(document.getElementById(e.target.className));
    let type = e.target.className.replace(/edit-/, '');
    console.log(type);
    let properties = Object.keys(item);

    for (let property of properties) {
        let abbrevProp = property.replace(/(crs|pg)_/, '').toLowerCase();
        let propEl = document.getElementById('edit-' + type + '-' + abbrevProp);
        if (propEl.value != undefined) {
            propEl.value = item[property];
        }
        else if (/id/i.test(property)) {
            propEl.innerHTML = "<strong>ID:</strong> " + item[property];
        }
    }
}

function updateCourse() {
    let fullURI = baseURI + 'courses';
    const itemId = parseInt(document.getElementById('edit-course-id').innerText.replace(/ID: /, ''));

    const item = {
        Crs_Id: itemId,
        Crs_Title: document.getElementById('edit-course-title').value.trim(),
        Crs_Number: document.getElementById('edit-course-number').value.trim(),
        Crs_Type: document.getElementById('edit-course-type').value.trim(),
        Crs_Blurb: document.getElementById('edit-course-blurb').value.trim()
    };

    fetch(`${fullURI}/update-course`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => listRecords('courses'))
        .catch(error => console.error('Unable to update item.', error));

    return false;
}

function updatePage() {
    let fullURI = baseURI + 'pages';
    const itemId = parseInt(document.getElementById('edit-page-id').innerText.replace(/ID: /, ''));
    console.log(itemId);
    const pageJSON = cleanJSON(document.getElementById('edit-page-content').value.trim());
    
    const item = {
        Pg_Id: itemId,
        Pg_Title: document.getElementById('edit-page-title').value.trim(),
        Pg_Content: pageJSON
    };

    fetch(`${fullURI}/update-page`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => listRecords('pages'))
        .catch(error => console.error('Unable to update item.', error));

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function previewRecord(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        if (e.target.className.replace(/preview-/, '') == 'pages') {
            window.open("JBPageLaunch/index.html?" + item.pg_Id, "Preview", "fullscreen=yes");
        }
    }
}

function _displayRecords(data, type) {
    showHide(document.getElementById('list-' + type));

    const tBody = document.getElementById(type);
    tBody.innerHTML = '';

    //_displayCount(data.length);
    let id;
    let title;

    if (type === 'pages') {
        pages = data;
        id = 'pg_Id';
        title = 'pg_Title';
    }
    else if (type === 'courses') {
        courses = data;
        id = 'crs_Id';
        title = 'crs_Title';
    }

    const button = document.createElement('button');

    data.forEach(item => {
        console.log(item);
        // row 1
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let textNode1 = document.createTextNode(item[id]);
        td1.appendChild(textNode1);
     
        let td2 = document.createElement('td')
        let textNode2 = document.createTextNode(item[title]);
        td2.appendChild(textNode2);

        let td3 = document.createElement('td')
        let editButton = button.cloneNode(false);
        let textNode3 = document.createTextNode('Edit');
        editButton.appendChild(textNode3);
        editButton.classList.add('edit-' + type.replace(/s$/, ''));
        editButton.addEventListener('click', displayEditForm.bind(editButton, item));
        editButton.addEventListener('keydown', displayEditForm.bind(editButton, item));
        td3.appendChild(editButton);

        let td4 = document.createElement('td')
        let deleteButton = button.cloneNode(false);
        let textNode4 = document.createTextNode('Delete');
        deleteButton.appendChild(textNode4);
        deleteButton.classList.add('delete-' + type);
        deleteButton.addEventListener('click', deleteRecord.bind(deleteButton, item));
        deleteButton.addEventListener('keydown', deleteRecord.bind(deleteButton, item));
        td4.appendChild(deleteButton);

        let td5 = document.createElement('td')
        let previewButton = button.cloneNode(false);
        let textNode5 = document.createTextNode('Preview');
        previewButton.appendChild(textNode5);
        previewButton.classList.add('preview-' + type);
        previewButton.addEventListener('click', previewRecord.bind(previewButton, item));
        previewButton.addEventListener('keydown', previewRecord.bind(previewButton, item));
        td5.appendChild(previewButton);

        tr.append(td1, td2, td3, td4, td5);
        tBody.appendChild(tr);

    });
}

function cleanJSON(json) {
    json = json.replace(/\/\*(?:.|\n)*?\*\//g, ""); // remove all multiline comments
    json = json.replace(/(?<!https?:)\/\/.*?\n/g, "\n"); // remove inline comments
    json = json.replace(/\s*\n\s*/g, ""); // remove linebreaks and extra spacing
    json = json.replace(/,\s*(\}|\])/g, '$1'); // remove trailing commas
    json = json.replace(/^Lesson_Data_File\(/, ""); // remove function call
    json = json.replace(/\)\s*;\s*$/, ""); // remove functin call close paren and semicolon
    json = json.replace(/(?<!")question_answers\s*:/g, '"question_answers":'); // question_answers never has quotes around it
    json = json.replace(/(?<!")Video_Files_New\s*:/g, '"Video_Files_New":'); // question_answers never has quotes around it

    return json;
}