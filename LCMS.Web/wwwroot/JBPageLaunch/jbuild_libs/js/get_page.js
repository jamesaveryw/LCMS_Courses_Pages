const uri = '../../index.html/api/pages';

function getPage() {
    const id = location.search.substring(1);
    fetch(`${uri}/${id}`, {
        method: 'GET',
        type: 'application/json',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => _displayPage(data))
        .catch(error => console.error('Unable to get items.', error));
    

    return false;
}

function _displayPage(data) {
    let json = data.content;
    let jsonObj = JSON.parse(json);
    console.log(jsonObj);
    Lesson_Data_File(jsonObj);
}

