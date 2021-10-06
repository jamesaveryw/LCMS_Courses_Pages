var keyCodes = Object.freeze({
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
        }
        else if (/list-pages/.test(id)) {
            type = 'pages';
        }

        listRecords(type);
    }
}

function listRecords(type, e) {
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
    const addNumTextbox = document.getElementById('course-num');
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
        .catch(error => console.error('Unable to add item.', error));
}

function createPage() {
    let fullURI = baseURI + 'pages'
    const addTitleTextbox = document.getElementById('page-title');
    const addJSONTextbox = document.getElementById('page-json');

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
        .catch(error => console.error('Unable to add item.', error));
}

function deletePage(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => listRecords('pages'))
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(item) {
    console.log(item)
    // hide/show sections
    /*showHide(document.getElementById('edit-course'));

    // save page for editing
    const item = courses.find(item => item.crs_Id === id);
    document.getElementById('edited-course-id').innerHTML = "<strong>Crs_Id:</strong> " + item.id;
    document.getElementById('edit-course-title').value = item.crs_Title;
    document.getElementById('edit-course-num').value = item.crs_Number;
    document.getElementById('edit-course-type').value = item.crs_Type;
    document.getElementById('edit-course-blurb').value = item.crs_Blurb;*/
}

function displayPageEditForm(id) {
    // hide/show sections
    showHide(document.getElementById('edit-page'));

    // save page for editing
    const item = pages.find(item => item.id === id);
    document.getElementById('edited-course-id').innerHTML = "<strong>Pg_Id</strong> " + item.id;
    document.getElementById('edit-page-title').value = item.title;
    document.getElementById('edit-page-json').value = item.content;
}

function updatePage() {
    const itemId = document.getElementById('edited-page-id').innerText.replace(/Guid: /, '');
    const pageJSON = cleanJSON(document.getElementById('edit-page-json').value.trim());
    
    const item = {
        id: itemId,
        title: document.getElementById('edit-page-title').value.trim(),
        content: pageJSON
    };

    console.log(item);
    fetch(`${uri}/update-page`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getPages())
        .catch(error => console.error('Unable to update item.', error));

    // closeInput();*/

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function previewPage(id, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        e.target
        window.open("JBPageLaunch/index.html?" + id, "Preview", "fullscreen=yes");
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
        editButton.addEventListener('click', displayEditForm.bind(editButton, item));
        editButton.addEventListener('keydown', displayEditForm.bind(editButton, item));
        td3.appendChild(editButton);

        let td4 = document.createElement('td')
        let deleteButton = button.cloneNode(false);
        let textNode4 = document.createTextNode('Delete');
        deleteButton.appendChild(textNode4);
        deleteButton.addEventListener('click', deletePage.bind(deleteButton, item[id]));
        deleteButton.addEventListener('keydown', deletePage.bind(deleteButton, item[id]));
        td4.appendChild(deleteButton);

        let td5 = document.createElement('td')
        let previewButton = button.cloneNode(false);
        let textNode5 = document.createTextNode('Preview');
        previewButton.appendChild(textNode5);
        previewButton.addEventListener('click', previewPage.bind(previewButton, item[id]));
        previewButton.addEventListener('keydown', previewPage.bind(previewButton, item[id]));
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