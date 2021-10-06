/*************** HELPERS ***************/
/***************************************/
// create array from from querySelector
// Example: var arrayOfElements = slice(document.querySelectorAll('selector'));
function slice(nodes) {
    return Array.prototype.slice.call(nodes);
}
// set list of attributes on element
// Example: setAttrs(element, {'attribute-name': 'value', 'attribute-name': 'value', 'attribute-name': 'value'});
function setAttrs(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// returns the ancestor of element based on class, node 
// type, or ID.
function findAncestor(el, type, selector) {

    if (type == 'class') {
        while ((el = el.parentNode) && !el.classList.contains(selector));

        return el;
    }
    else if (type == 'node') {
        console.log(type)
        while ((el = el.parentNode) && el.tagName != selector);

        return el;
    }
    else if (type == 'id') {
        while ((el = el.parentNode) && el.getAttribute('id') != selector);

        return el;
    }
    else if (type == 'attr') {
        try {
            while ((el = el.parentNode) && !el.getAttribute(selector));
        } catch (err) {
            return null;
        }

        return el;
    }
    else {
        return null;
    }
}

// removes all child nodes from an element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function modalTrap(e) {
    console.log('modalTrap')
    // this is passed via bind on eventListner
    let modalContainer = this;
    console.log(focusableElements);
    // Check for TAB key pressed    
    if (e.which === keyCodes.TAB) {
        console.log("tab")
        // if there's only one tab stop, just prevent default
        if (firstTabStop === lastTabStop && document.activeElement == firstTabStop) {
            e.preventDefault();
        }
        // SHIFT + TAB
        else if (e.shiftKey) {
            if (document.activeElement === firstTabStop || document.activeElement.getAttribute("tabindex") == -1) {
                e.preventDefault();
                lastTabStop.focus();
            }

            // TAB
        } else {
            if (document.activeElement === lastTabStop) {
                e.preventDefault();
                firstTabStop.focus();
            }
        }
    }

    // ESCAPE
    if (e.which === keyCodes.ESC) {

        //window.getComputedStyle(x).display === "none"
        // modal type is alert and the "x" close button exists
        if (/alert/i.test(modalContainer.getAttribute('id')) && (modalContainer.querySelector('.xSpot').getAttribute)) {
            console.log('close')
            closeAlert();
        }

        else if (/terms/i.test(modalContainer) && window.getComputedStyle(modalContainer.getElementById('acceptBtn')).display !== 'none') {
            closeTerms(e);
        }


    }
}

/***************************************/
/***************************************/