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
    'DOWN': 40,
    'COMMA': 188
});

const baseURI = 'api/';
var pages = {};
var courses = {};
var crsPgToDelete = [];
var crsPgToAdd = [];

let navLinks = slice(document.querySelectorAll('nav-link'));
for (let navLink of navLinks) {
    navLink.addEventListener('click', swapNavLinks);
    navLink.addEventListener('keydown', swapNavLinks);
}

listRecords("courses", "list-courses");

// show/hide various sections
// pass in the section that should be made active 
// and add .hidden to previously active section
function showHide(activeElId) {
    let activeEl = document.getElementById(activeElId);
    document.querySelector('.active').classList.add('hidden');
    document.querySelector('.active').classList.remove('active');
    activeEl.classList.remove('hidden');
    activeEl.classList.add('active');

}

// closes any modal/modal container with class open
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

// handles the top nav links
function swapNavLinks(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let id = e.target.id.replace(/-link/, '');
        showHide(id);

        let type;
        if (/list-courses/.test(id)) {
            type = 'courses';

            listRecords(type, 'list-courses', e);
        }
        else if (/list-pages/.test(id)) {
            type = 'pages';

            listRecords(type, 'list-pages', e);
        }
    }
}


// Course Functions
// create a new course
function createCourse(e) {
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
        .then(() => listRecords('courses', 'list-courses', e))
        .then(() => document.getElementById("new-course-form").reset())
        .catch(error => console.error('Unable to add item.', error));
}

// update course details
function updateCourse(e) {
    console.log('updating course')
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
        .then(() => listRecords('courses', 'list-courses', e))
        .catch(error => console.error('Unable to update item.', error));
}

// open the page list modal for editing
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

// save any changes to pages in a course
function savePagesInCourse(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {

        let fullURI = baseURI + 'coursespages';
        let trs = document.querySelectorAll('#page-list-modal-table tr');

        for (let tr of trs) {
            let item = {
                Crs_Id: parseInt(e.target.getAttribute('data-course-id')),
                Pg_Id: parseInt(tr.querySelector('td:nth-child(1)').innerHTML),
                CP_Order: parseInt(tr.querySelector('td:nth-child(3) input').value)
            };

            if (tr.classList.contains('new-page')) {
                fetch(fullURI, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                    .then(response => response.json())
                    .then(() => listRecords('pages', 'page-list-modal', e))
                    .catch(error => console.error('Unable to add item.', error));
            }
            else {
                fetch(`${fullURI}/update-coursepage`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                    .catch(error => console.error('Unable to update item.', error));
            }
        }

        // loop through crsPgToDelete
        for (let page of crsPgToDelete) {
            console.log(page);
            let crsId = page.crs_Id;
            let pgId = page.pg_Id;
            fullURI += '/' + crsId + '-' + pgId;
            console.log(fullURI)
            fetch(fullURI, {
                method: 'DELETE'
            })
                .then(() => listRecords('pages', 'page-list-modal', e))
                .catch(error => console.error('Unable to delete item.', error));
        }
        // delete each record
        cancelPagesInCourseUpdates(e);
    }
}

// cancel any updates to page list of course
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

        crsPgToDelete = [];
    }
}

// adds new page to page-list-modal
// pages added are not saved at this point
// only saved when save changes button (calls
// savePagesInCourse() is called)
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

// closes the list of possible pages to add
// and returns to the page list modal
function donePgAdd(e) {
    editPagesInCourse(e);
    document.getElementById('add-page-modal').classList.remove('open');
    document.getElementById('page-list-modal').classList.add('open');
    document.getElementById('add-page-modal-table').innerHTML = '';
}

// cancels any pages added to course
function cancelPgAdd(e) {
    let addedPgs = slice(document.querySelectorAll('#page-list-modal-table tr.new-page'));

    for (let addedPg of addedPgs) {
        document.getElementById('page-list-modal-table').removeChild(addedPg);
    }

    document.getElementById('add-page-modal').classList.remove('open');
    document.getElementById('page-list-modal').classList.add('open');
    document.getElementById('add-page-modal-table').innerHTML = '';
}

// queues a page for deletion from a course
// pages removed are not officially removed at
// this point. save changes button (calls
// savePagesInCourse() is called) must be clicked
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

async function getPagesInCoursePackage(course) {
    let updatedData;
    fullURI = baseURI + 'coursespages/pages/' + course.crs_Id;
    let response = await fetch(fullURI);
    let pagesInCourse = await response.json();
    updatedData = _updateDataForPackage(pagesInCourse);
    _packageCourse(updatedData, course);
        /*.then(response => response.json())
        .then(data => {
            updatedData = _updateDataForPackage(data);
            _packageCourse(updatedData, course);
        })
        .catch(error => console.error('Unable to get items.', error));*/
}

function _updateDataForPackage(data) {
    data.forEach(item => {
        let pgJSON = item.pg_Content;
        let pgJSONObj = JSON.parse(pgJSON);
        let pgHTML = Lesson_Data_File(pgJSONObj);
        item.pg_HTML = pgHTML;
    });

    return data;
}

function _packageCourse(data, course) {

    fetch("Package/PackageCourse/" + course.crs_Id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch(error => console.error('Unable to package item.', error));
}


// Page Functions
function readJsonFile(form, e) {
    let fullURI = baseURI + 'pages/upload';
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    console.log(form);
    fetch(fullURI, {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => _parseFileInfo(data));
}

function _parseFileInfo(data) {
    console.log(cleanJSON(data.json));
    let jsonObj = JSON.parse(cleanJSON(data.json));
    let snippetContent = jsonObj[0].JBuilder_Content;
    let keywords = _findPageKeyTerms(data.json);
    let pgTitle;

    for (let snippet of snippetContent) {
        // get snippet type
        let key = Object.keys(snippet)[0];
        if (key == "Heading") {
            pgTitle = snippet.Heading[0].sngl_Heading;
            break;
        }
    }

    document.getElementById("upload-new-page").reset();
    autoFillCreatePage(pgTitle, keywords, jsonObj)
}

function autoFillCreatePage(pgTitle, keywords, jsonObj) {
    // hide upload and show new page form
    document.getElementById('new-page-form').classList.remove('hidden');
    document.getElementById('upload-new-page').classList.add('hidden');
    // autofill page form from data
    document.getElementById('page-title').value = pgTitle;
    document.getElementById('page-content').value = JSON.stringify(jsonObj);

    // autofill keywords from key terms in page
    for (let keyword of keywords) {
        createKeywordBlock(keyword, 'new');
    }

    // set event listeners for keyword input
    let keywordInput = document.getElementById('page-keyword-input');
    keywordInput.addEventListener('keydown', addKeywordToList);
}

// create new page
function createPage(e) {
    let fullURI = baseURI + 'pages';
    const addTitleTextbox = document.getElementById('page-title');
    const addJSONTextbox = document.getElementById('page-content');
    const keywordSpans = slice(document.querySelectorAll('#page-keyword-list .keyword'));
    let keywords = [];
    for (let keywordSpan of keywordSpans) {
        keywords.push(keywordSpan.innerHTML);
    }

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
        .then(data => _saveKeywords(data, keywords))
        .then(() => {
            listRecords('pages', 'list-pages', e);
            clearPageForm(e);
        })
        .catch(error => console.error('Unable to add page.', error));

}

// update a page
function updatePage(e) {
    let fullURI = baseURI + 'pages';
    const itemId = parseInt(document.getElementById('edit-page-id').innerText.replace(/ID: /, ''));
    const pageJSON = cleanJSON(document.getElementById('edit-page-content').value.trim());
    const keywordBlocks = slice(document.querySelectorAll('#edit-page-keyword-list .keyword'));
    let keywords = [];
    for (let keywordBlock of keywordBlocks) {
        keywords.push(keywordBlock.innerHTML);
    }

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
        .then(response => response.json())
        .then(data => getKeywordsInPage(data, keywords))
        .then(() => {
            listRecords('pages', 'list-pages', e);
            clearPageForm(e);
        })
        .catch(error => console.error('Unable to update item.', error));

    return false;
}

function clearPageForm(e) {
    console.log(e)
    if (e.type === 'click' || e.type === 'submit' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let form = (e.target.tagName === 'FORM') ? e.target : findAncestor(e.target, 'node', 'FORM');
        form.reset();
        let keywordBlocks = slice(form.querySelectorAll(".tag"));
        for (let keywordBlock of keywordBlocks) {
            keywordBlock.remove();
        }

        if (/new/.test.form.id) {
            // hide upload and show new page form
            document.getElementById('new-page-form').classList.add('hidden');
            document.getElementById('upload-new-page').classList.remove('hidden');
        }
    }
}


// Keyword Functions
function createKeyword(keyword, pageId) {
    let fullURI = baseURI + 'keywords';

    fetch(fullURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyword)
    })
        .then(response => response.json())
        .then(data => _saveKeywordToPage(data, pageId))
        .catch(error => console.error('Unable to add keyword.', error));
}

function getKeywordsInPage(item, keywordsUpdate) {
    let fullURI = baseURI + 'pageskeywords/keywords/' + item.pg_Id;
    fetch(fullURI)
        .then(response => response.json())
        .then(data => {
            if (keywordsUpdate == null) {
                data.forEach(item => {
                    // send term to create kw block
                    createKeywordBlock(item.kw_Word, 'edit');
                });
            }
            else {
                _updatePageKeywords(data, keywordsUpdate, item);
            }
            
        })
        .catch(error => console.error('Unable to get keywords.', error));
}

// save keywords in newly added page
function _saveKeywords(data, keywords) {
    let pageId = data.pg_Id;

    for (let keyword of keywords) {
        const item = {
            Kw_Id: 0,
            Kw_Word: keyword
        }

        createKeyword(item, pageId);
    }
}

// save keywords to pagekeyword table
function _saveKeywordToPage(data, pageId) {
    let fullURI = baseURI + "pageskeywords";

    const item = {
        Pg_Id: pageId,
        Kw_Id: data.kw_Id
    }

    fetch(fullURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .catch(error => console.error('Unable to add keyword to page.', error));
}

function _deleteKeywordFromPage(pgId, kwId) {
    let fullURI = baseURI + "pageskeywords/"
    fetch(`${fullURI}${pgId}-${kwId}`, {
        method: 'DELETE'
    })
        .catch(error => console.error('Unable to delete keyword.', error));
}

function _updatePageKeywords(keywords, keywordsUpdate, page) {

    // cycle through existing keywords in page
    for (let keyword of keywords) {
        // if the keyword exists in the list of updated keywords,
        // then the record already exists. remove from the array.
        if (keywordsUpdate.findIndex(item => keyword.kw_Word.toLowerCase() === item.toLowerCase()) > -1) {
            let index = keywordsUpdate.findIndex(item => keyword.kw_Word.toLowerCase() === item.toLowerCase());
            keywordsUpdate.splice(index, 1);
        }
        // if the keyword doesn't exist in the list of updated
        // keywords, then the keyword was removed from the page.
        // remove from the database.
        else {
            // call remove keyword from DB function (pgId, kwId)
            _deleteKeywordFromPage(page.pg_Id, keyword.kw_Id);
        }
    }

    // anything left in the keywordsUpdate array needs to be added
    // to the DB
    _saveKeywords(page, keywordsUpdate);
}

function createKeywordBlock(keyword, type) {
    // tag container
    let tagDiv = (type === 'new') ? document.getElementById('page-keyword-list') : document.getElementById('edit-page-keyword-list')
    let input = (type === 'new') ? document.getElementById('page-keyword-input') : document.getElementById('edit-page-keyword-input');     

    // create block shell
    let kwBlock = document.createElement('span');
    kwBlock.classList.add('tag');
    // span with keyword in it
    let kwSpan = document.createElement('span');
    kwSpan.classList.add('keyword');
    let kwTextNode = document.createTextNode(keyword);
    // delete button
    let kwDelBtn = document.createElement('button');
    setAttrs(kwDelBtn, { 'type': 'button', 'aria-label': 'Remove tag' });
    let delTxtNode = document.createTextNode('x');
    kwDelBtn.addEventListener('click', removeKeywordBlock);
    kwDelBtn.addEventListener('keydown', removeKeywordBlock);

    // append everything
    kwDelBtn.append(delTxtNode);
    kwSpan.appendChild(kwTextNode);
    kwBlock.append(kwSpan, kwDelBtn);

    // insert into container
    tagDiv.insertBefore(kwBlock, input);
}

function removeKeywordBlock(e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        e.target.parentNode.remove();
    }
}

// add keyword to keyword container on add page form
function addKeywordToList(e) {
    if (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.COMMA)) {
        e.preventDefault();
        let input = e.target;
        let word = input.value.trim().replace(/,$/, '');
        
        let type = (/edit/.test(e.target.id)) ? 'edit' : 'new';
        createKeywordBlock(word, type);
        input.value = '';
    }
}

// Record Functions
// deletes page/course record
function deleteRecord(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        let fullURI = baseURI + e.target.className.replace('delete-', '');
        let id = item.pg_Id ? item.pg_Id : item.crs_Id;
        console.log(id);
        fetch(`${fullURI}/${id}`, {
            method: 'DELETE'
        })
            .then(() => listRecords(e.target.className.replace('delete-', ''), 'list-' + e.target.className.replace('delete-', ''), e))
            .catch(error => console.error('Unable to delete item.', error));
    }
}

// displays the form to edit a page/course
function displayEditForm(item, e) {
    console.log(item)
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        showHide(e.target.className);
        let type = e.target.className.replace(/edit-/, '');
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

        if (type === 'page') {
            getKeywordsInPage(item)
        }

    }
}

// cancels the edit form
function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

// previews a page
function previewRecord(item, e) {
    if (!e || e.type === 'click' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
        if (e.target.className.replace(/preview-/, '') == 'pages') {
            window.open("JBPageLaunch/index.html?" + item.pg_Id, "Preview", "fullscreen=yes");
        }
    }
}

// Display Functions
// get list of pages/courses
function listRecords(type, contID, e) {
    if (!e || e.type === 'click' || e.type === 'submit' || (e.type === 'keydown' && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
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

        fetch(fullURI)
            .then(response => response.json())
            .then(data => _displayRecords(data, type, contID, e))
            .catch(error => console.error('Unable to get items.', error));
    }
}

// diplay list retrieved from listRecords()
function _displayRecords(data, type, contID, e) {
    // reset table contents
    const tBody = document.getElementById(contID + '-table');
    tBody.innerHTML = '';

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

    if (/page-list-modal/.test(contID)) {
        data.sort((a, b) => (a.cP_Order > b.cP_Order) ? 1 : -1);
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

            let tdPreviewPackage = document.createElement('td')
            let previewPackageButton = button.cloneNode(false);
            let textNodePreviewPackage;
            if (type == 'pages') {
                textNodePreviewPackage = document.createTextNode('Preview');
                previewPackageButton.classList.add('preview-' + type);
                previewPackageButton.addEventListener('click', previewRecord.bind(previewPackageButton, item));
                previewPackageButton.addEventListener('keydown', previewRecord.bind(previewPackageButton, item));
            }
            else if (type == 'courses') {
                textNodePreviewPackage = document.createTextNode('Package');
                previewPackageButton.classList.add('package-' + type);
                previewPackageButton.addEventListener('click', getPagesInCoursePackage.bind(previewPackageButton, item));
                previewPackageButton.addEventListener('keydown', getPagesInCoursePackage.bind(previewPackageButton, item));
            }


            previewPackageButton.appendChild(textNodePreviewPackage);
            tdPreviewPackage.appendChild(previewPackageButton);

            tr.append(tdID, tdTitle, tdList, tdEdit, tdDelete, tdPreviewPackage);
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


// Clean up JSON so it's parsable
function cleanJSON(json) {
    json = json.replace(/\/\*(?:.|\n|\r)*?\*\//g, ""); // remove all multiline comments
    json = json.replace(/(?<!https?:)\/\/.*?(?:\n|\r)/g, "\n"); // remove inline comments
    json = json.replace(/\s*\n\s*/g, ""); // remove linebreaks and extra spacing
    json = json.replace(/,\s*(\}|\])/g, '$1'); // remove trailing commas
    json = json.replace(/^Lesson_Data_File\(/, ""); // remove function call
    json = json.replace(/\)\s*;\s*$/, ""); // remove functin call close paren and semicolon
    json = json.replace(/\t/g, "    "); // JSON.parse doesn't like tabs in the content
    json = json.replace(/(?<!")question_answers\s*:/g, '"question_answers":'); // question_answers never has quotes around it
    json = json.replace(/(?<!")Video_Files_New\s*:/g, '"Video_Files_New":'); // question_answers never has quotes around it


    return json;
}

function _findPageKeyTerms(pgJson) {
    let pageKeyTerms = [];

    let ktRE = /<span class='keyterm' tabindex='0' role='button'>(.*?)<\/span>/g;
    let ktMatches = [...pgJson.matchAll(ktRE)];

    return ktMatches.map(m => m[1]);
}

/*function _addTermsToPgSetup(json, terms) {
    let jsonObj = JSON.parse(json);
    let jsonTerms = [];

    if (jsonObj[0].Page_Setup.keywords) {
        jsonTerms = jsonObj[0].Page_Setup.keywords;
        for (let term of terms) {
            let termExists = false;
            for (let jsonTerm of jsonTerms) {
                if (term.toLowerCase().trim() == jsonTerm.toLowerCase().trim()) termExists = true;
            }

            if (!termExists) jsonObj[0].Page_Setup.keywords.push(term);
        }
    }
    else {
        jsonObj[0].Page_Setup.keywords = terms;
    }

    return JSON.stringify(jsonObj);
}*/