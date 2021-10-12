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
var pages = { };
var courses = { };
var crsPgToDelete = [ ];
var crsPgToAdd = [ ];

let navLinks = slice(document.querySelectorAll('nav-link'));
for (let navLink of navLinks) {
    navLink.addEventListener('click', swapNavLinks);
    navLink.addEventListener('keydown', swapNavLinks);
}



listRecords("courses", "list-courses");

// show/hide various sections
// pass in the section that should be made active 
// and add .hidden to previously active section
function showHide(activeEl) {
    document.querySelector('.active').classList.add('hidden');
    document.querySelector('.active').classList.remove('active');
    activeEl.classList.remove('hidden');
    activeEl.classList.add('active');
}

function closeModal(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        document.querySelector('.modal.open h2').innerHTML = document.querySelector('.modal.open h2').innerHTML.replace(/((?:Page|Course): ).*/, '$1');
        document.querySelector('.modal.open').classList.remove('open');
        document.querySelector('.modal-container.open').classList.remove('open');

        let hiddenCols = slice(document.querySelectorAll('.hidden-col'));
        for (let hiddenCol of hiddenCols) {
            hiddenCol.classList.add('hidden');
        }
    }
}

function swapNavLinks(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let id = e.target.id.replace(/-link/, '');
        showHide(document.getElementById(id));

        let type;
        if (/list-courses/.test(id)) {
            type = 'courses';

            listRecords(type, 'list-courses');
        }
        else if (/list-pages/.test(id)) {
            type = 'pages';

            listRecords(type, 'list-pages');
        }
    }
}


// Course Functions
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
        .then(() => listRecords('courses', 'course-list-modal'))
        .then(() => document.getElementById("new-course-form").reset())
        .catch(error => console.error('Unable to add item.', error));
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
        .then(() => listRecords('courses', 'course-list-modal'))
        .catch(error => console.error('Unable to update item.', error));

    return false;
}

function editPagesInCourse(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let disabledInputs = slice(document.querySelectorAll('#page-list-modal input[disabled]'));

        for (let disabledInput of disabledInputs) {
            disabledInput.removeAttribute('disabled');
        }

        let hiddenEls = slice(document.querySelectorAll('#page-list-modal  .hidden'));
        for (let hiddenEl of hiddenEls) {
            hiddenEl.classList.remove('hidden');
        }

        document.getElementById('init-btns').classList.add('hidden');
        document.getElementById('swap-btns').classList.remove('hidden');
        document.querySelector('#page-list-modal .close-modal').classList.add('hidden');
    }
}

function savePagesInCourse(e) {
    let fullURI;
    let trs = document.querySelectorAll('#page-list-modal-table tr');

    for (let tr of trs) {
        if (tr.classList.contains('new-page')) {
            // add new record to CoursesPages
            let item = {
                Crs_Id: parseInt(e.target.getAttribute('data-course-id')),
                Pg_Id: parseInt(tr.querySelector('td:nth-child(1)').innerHTML),
                CP_Order: parseInt(tr.querySelector('td:nth-child(3) input').value)
            };

            fullURI = baseURI + 'coursespages';

            fetch(fullURI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(response => response.json())
                .catch(error => console.error('Unable to add item.', error));
        }
        else {
            // update CoursesPages record
        }
    }

    // loop through crsPgToDelete
    // delete each record
    // call cancelPagesInCourseUpdates to update modal, list all records, and clear crsPgToDelete

}

function cancelPagesInCourseUpdates(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let disabledInputs = slice(document.querySelectorAll('#page-list-modal input:not([disabled])'));

        for (let disabledInput of disabledInputs) {
            disabledInput.setAttribute('disabled', true);
        }

        let hiddenEls = slice(document.querySelectorAll('#page-list-modal  .hidden-col'));
        for (let hiddenEl of hiddenEls) {
            hiddenEl.classList.add('hidden');
        }

        document.getElementById('init-btns').classList.remove('hidden');
        document.getElementById('swap-btns').classList.add('hidden');
        document.querySelector('#page-list-modal .close-modal').classList.remove('hidden');

        listRecords("pages", "page-list-modal", e);

        crsPgToDelete = [ ];
    }
}

function addPageToCourse(e) {
    let tr = document.createElement('tr');
    tr.className = 'new-page';
    let tdID = document.createElement('td');
    let textNodeID = document.createTextNode(e.target.getAttribute('data-page-id'));
    tdID.appendChild(textNodeID);

    let tdTitle = document.createElement('td');
    let textNodeTitle = document.createTextNode(findAncestor(e.target, 'node', 'TR').querySelector('td:nth-child(2)').innerHTML);
    tdTitle.appendChild(textNodeTitle);

    let tdOrder = document.createElement('td');
    let orderInput = document.createElement('input');
    orderInput.setAttribute('type', 'text');
    orderInput.value = 0;
    tdOrder.appendChild(orderInput);

    let tdRemove = document.createElement('td');
    tdRemove.className = 'hidden hidden-col';
    let removeButton = document.createElement('button');
    setAttrs(removeButton, { 'type': 'button', 'data-course-id': e.target.getAttribute('data-course-id'), 'data-page-id': e.target.getAttribute('data-page-id') });
    removeButton.addEventListener('click', deletePgFromCrs);
    removeButton.addEventListener('keydown', deletePgFromCrs);
    let textNodeRemove = document.createTextNode('Remove');
    removeButton.appendChild(textNodeRemove);
    tdRemove.appendChild(removeButton);

    tr.append(tdID, tdTitle, tdOrder, tdRemove);
    document.getElementById('page-list-modal-table').appendChild(tr);

    let addObj = {
        'pg_Id': e.target.getAttribute('data-page-id'),
        'crs_Id': e.target.getAttribute('data-course-id')
    }
    crsPgToAdd.push(addObj)

    alert(findAncestor(e.target, 'node', 'TR').querySelector('td:nth-child(2)').innerHTML + " added to course.");
}

function donePgAdd(e) {
    editPagesInCourse(e);
    document.getElementById('add-page-modal').classList.remove('open');
    document.getElementById('page-list-modal').classList.add('open');
    document.getElementById('add-page-modal-table').innerHTML = '';
}

function cancelPgAdd(e) {
    let addedPgs = slice(document.querySelectorAll('#page-list-modal-table tr.new-page'));

    for (let addedPg of addedPgs) {
        document.getElementById('page-list-modal-table').removeChild(addedPg);
    }

    document.getElementById('add-page-modal').classList.remove('open');
    document.getElementById('page-list-modal').classList.add('open');
    document.getElementById('add-page-modal-table').innerHTML = '';
}

function deletePgFromCrs(e) {
    // remove from table
    let tr = findAncestor(e.target, 'node', 'TR');
    let tbody = findAncestor(tr, 'node', 'TBODY');
    tbody.removeChild(tr);

    // add to array to delete when updates are saved
    let deleteObj = {
        'pg_Id': e.target.getAttribute('data-page-id'),
        'crs_Id': e.target.getAttribute('data-course-id')
    }
    crsPgToDelete.push(deleteObj);
}


// Page Functions
function createPage() {
    let fullURI = baseURI + 'pages'
    const addTitleTextbox = document.getElementById('page-title');
    const addJSONTextbox = document.getElementById('page-content');

    const pageJSON = cleanJSON(addJSONTextbox.value.trim());

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
        .then(() => listRecords('pages', 'page-list-modal'))
        .then(() => document.getElementById("new-page-form").reset())
        .catch(error => console.error('Unable to add item.', error));

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
        .then(() => listRecords('pages', 'page-list-modal'))
        .catch(error => console.error('Unable to update item.', error));

    return false;
}


// Record Functions
function deleteRecord(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let fullURI = baseURI + e.target.className.replace('delete-', '');
        let id = item.pg_Id ? item.pg_Id : item.crs_Id;
        console.log(id);
        fetch(`${fullURI}/${id}`, {
            method: 'DELETE'
        })
            .then(() => listRecords(e.target.className.replace('delete-', '')))
            .catch(error => console.error('Unable to delete item.', error));
    }
}

function displayEditForm(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
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
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function previewRecord(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        if (e.target.className.replace(/preview-/, '') == 'pages') {
            window.open("JBPageLaunch/index.html?" + item.pg_Id, "Preview", "fullscreen=yes");
        }
    }
}



// Display Functions
function listRecords(type, contID, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let fullURI;

        if (!/modal/.test(contID)) {
            fullURI = baseURI + type;
        }
        else if (/page-list-modal/.test(contID)) {
            fullURI = baseURI + 'coursespages/' + type + '/' + e.target.getAttribute('data-course-id');
        }
        else if (/course-list-modal/.test(contID)) {
            fullURI = baseURI + 'coursespages/' + type + '/' + e.target.getAttribute('data-page-id');
        }
        else if (/add-page-modal/.test(contID)) {
            fullURI = baseURI + 'coursespages/' + type + '/-' + e.target.getAttribute('data-course-id');
        }

        console.log(fullURI);

        fetch(fullURI)
            .then(response => response.json())
            .then(data => _displayRecords(data, type, contID, e))
            .catch(error => console.error('Unable to get items.', error));
    }
}

/*function displayList(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let type = e.target.className.replace(/list-/, '') + 's';
        let id;
        if (type == 'courses') {
            id = item.crs_Id;
        }
        else if (type == 'pages') {
            id = item.pg_Id;
        }
        let fullURI = baseURI + 'coursespages/' + type;
        fetch(`${fullURI}/${id}`)
            .then(response => response.json())
            .then(data => _displayListInModal(item, data, type))
            .catch((error) => {
                console.error('Unable to get items.', error)
                _displayListInModal(item, null, type);
            });
    }
}*/

function _displayRecords(data, type, contID, e) {
    // reset table contents
    const tBody = document.getElementById(contID + '-table');
    tBody.innerHTML = '';
    console.log(data);

    // set vars based on type
    let id;
    let title;
    let opTitle;
    let opType;
    let srcID;
    if (type === 'pages') {
        //pages = data;
        id = 'pg_Id';
        title = 'pg_Title';
        opTitle = 'crs_Title';
        opType = 'courses';
    }
    else if (type === 'courses') {
        //courses = data;
        id = 'crs_Id';
        title = 'crs_Title';
        opTitle = 'pg_Title';
        opType = 'pages'
    }

    // show modal if contID contains modal
    if (/modal/.test(contID)) {
        srcID = e.target.getAttribute('data-' + opType.replace(/s$/, '') + '-id');
        document.getElementById(contID).classList.add('open');
        document.getElementById('modal-container').classList.add('open');
        document.querySelector('.modal.open h2').innerHTML = document.querySelector('.modal.open h2').innerHTML.replace(/((?:Page|Course): ).*/, '$1');
        document.getElementById('list-' + opType.replace(/s$/, '') + '-title').innerHTML = document.getElementById('list-' + opType.replace(/s$/, '') + '-title').innerHTML + window[opType][srcID][opTitle];
        document.getElementById('cancel-chng-btn').setAttribute('data-' + opType.replace(/s$/, '') + '-id', srcID);
        document.getElementById('save-chng-btn').setAttribute('data-' + opType.replace(/s$/, '') + '-id', srcID);
        document.getElementById('add-page-btn').setAttribute('data-' + opType.replace(/s$/, '') + '-id', srcID);
    }
    if (/add-page/.test(contID)) {
        document.getElementById('page-list-modal').classList.remove('open');
    }

    const button = document.createElement('button');

    data.forEach(item => {

        let tr = document.createElement('tr');

        let tdID = document.createElement('td');
        let textNodeID = document.createTextNode(item[id]);
        tdID.appendChild(textNodeID);

        let tdTitle = document.createElement('td')
        let textNodeTitle = document.createTextNode(item[title]);
        tdTitle.appendChild(textNodeTitle);

        if (!/modal/.test(contID)) {
            // save data item to global var with id as key
            window[type][item[id]] = item;

            let tdList = document.createElement('td')
            let listButton = button.cloneNode(false);
            let nodeText = (type === 'courses') ? 'List Pages' : 'List Courses';
            let textNodeList = document.createTextNode(nodeText);
            listButton.appendChild(textNodeList);
            listButton.classList.add('list-' + type.replace(/s$/, ''));
            listButton.setAttribute('data-' + type.replace(/s$/, '') + '-id', item[id]);
            listButton.addEventListener('click', listRecords.bind(listButton, opType, opType.replace(/s$/, '') + '-list-modal'));
            listButton.addEventListener('keydown', listRecords.bind(listButton, opType, opType.replace(/s$/, '') + '-list-modal'));
            tdList.appendChild(listButton);

            let tdEdit = document.createElement('td')
            let editButton = button.cloneNode(false);
            let textNodeEdit = document.createTextNode('Edit');
            editButton.appendChild(textNodeEdit);
            editButton.classList.add('edit-' + type.replace(/s$/, ''));
            editButton.addEventListener('click', displayEditForm.bind(editButton, item));
            editButton.addEventListener('keydown', displayEditForm.bind(editButton, item));
            tdEdit.appendChild(editButton);

            let tdDelete = document.createElement('td')
            let deleteButton = button.cloneNode(false);
            let textNodeDelete = document.createTextNode('Delete');
            deleteButton.appendChild(textNodeDelete);
            deleteButton.classList.add('delete-' + type);
            deleteButton.addEventListener('click', deleteRecord.bind(deleteButton, item));
            deleteButton.addEventListener('keydown', deleteRecord.bind(deleteButton, item));
            tdDelete.appendChild(deleteButton);

            let tdPreview = document.createElement('td')
            let previewButton = button.cloneNode(false);
            let textNodePreview = document.createTextNode('Preview');
            previewButton.appendChild(textNodePreview);
            previewButton.classList.add('preview-' + type);
            previewButton.addEventListener('click', previewRecord.bind(previewButton, item));
            previewButton.addEventListener('keydown', previewRecord.bind(previewButton, item));
            tdPreview.appendChild(previewButton);

            tr.append(tdID, tdTitle, tdList, tdEdit, tdDelete, tdPreview);
        }
        else if (/page-list/.test(contID)) {

            let tdOrder = document.createElement('td');
            let orderInput = document.createElement('input');
            setAttrs(orderInput, { 'disabled': true, 'type': 'text' });
            orderInput.value = item['cP_Order'];
            tdOrder.appendChild(orderInput);

            let tdRemove = document.createElement('td');
            tdRemove.className = 'hidden hidden-col';
            let removeButton = button.cloneNode(false);
            setAttrs(removeButton, { 'type': 'button', 'data-course-id': srcID, 'data-page-id': item[id] });
            removeButton.addEventListener('click', deletePgFromCrs);
            removeButton.addEventListener('keydown', deletePgFromCrs);
            let textNodeRemove = document.createTextNode('Remove');
            removeButton.appendChild(textNodeRemove);
            tdRemove.appendChild(removeButton);

            tr.append(tdID, tdTitle, tdOrder, tdRemove);
        }
        else if (/course-list/.test(contID)) {

            let tdNum = document.createElement('td');
            let textNodeNum = document.createTextNode(item['crs_Number']);
            tdNum.appendChild(textNodeNum);

            tr.append(tdID, tdTitle, tdNum);
        }
        else if (/add-page/.test(contID)) {
            let tdAdd = document.createElement('td');
            let addButton = button.cloneNode(false);
            setAttrs(addButton, { 'type': 'button', 'data-course-id': srcID, 'data-page-id': item[id] });
            addButton.addEventListener('click', addPageToCourse);
            addButton.addEventListener('keydown', addPageToCourse);
            let textNodeAdd = document.createTextNode('Add');
            addButton.appendChild(textNodeAdd);
            tdAdd.appendChild(addButton);

            tr.append(tdID, tdTitle, tdAdd);
        }


        tBody.appendChild(tr);

    });
}

/*function _displayListInModal(srcItem, data, type) {
    console.log(data)
    let modal;
    if (type === 'courses') {
        console.log("courses")
        modal = document.getElementById('page-list-modal');
        document.getElementById('crs_title').innerHTML = 'Course: ' + srcItem.crs_Number;
        document.getElementById('crs_intro').innerHTML = 'Pages in "' + srcItem.crs_Title + ':"';
        modal.classList.add('open');
        if (data != null) {
            data.forEach(item => {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = item.pg_Id;
                let td2 = document.createElement('td');
                td2.innerHTML = item.pg_Title;
                let td3 = document.createElement('td');
                let orderInput = document.createElement('input');
                setAttrs(orderInput, { "type": "text", "id": srcItem.crs_Id + "-" + item.pg_Id });
                orderInput.disabled = true;
                console.log(orderInput);
                orderInput.value = item.cP_Order;
                 
                td3.appendChild(orderInput);
                tr.append(td1, td2, td3);
                modal.querySelector('tbody').appendChild(tr);
            });
        }
    }
    else if (type === 'pages') {
        modal = document.getElementById('course-list-modal');
        document.getElementById('pg_title').innerHTML = 'Page ' + srcItem.pg_Title;
        document.getElementById('pg_intro').innerHTML = 'Courses "' + srcItem.pg_Title + '" appears in:';
        modal.classList.add('open');
        if (data != null) {
            data.forEach(item => {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = item.crs_Id;
                let td2 = document.createElement('td');
                td2.innerHTML = item.crs_Title;
                let td3 = document.createElement('td');
                td3.innerHTML = item.crs_Number;
                tr.append(td1, td2, td3);
                modal.querySelector('tbody').appendChild(tr);
            });
        }
    }    


    document.getElementById('modal-container').classList.add('open');
    modal.focus();
}*/





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