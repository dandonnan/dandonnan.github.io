
const menuItemSelectedClass = 'selected';

const hiddenClass = 'hidden';

const menuIdPrefix = 'menu-';

const selectedItemContainerId = 'selectedItemContainer';

let currentSection = 'professional';

function ChangeSection(toSection) {

    if (currentSection !== toSection) {
        DeselectHeader(currentSection);
        SelectHeader(toSection);
    }

    currentSection = toSection;
}

function DeselectHeader(menuItem) {
    RemoveClassFromElement(GetItemWithPrefix(menuIdPrefix, menuItem), menuItemSelectedClass);

    HideElement(menuItem);

    HideElement(selectedItemContainerId);
}

function SelectHeader(menuItem) {
    AddClassToElement(GetItemWithPrefix(menuIdPrefix, menuItem), menuItemSelectedClass);

    ShowElement(menuItem);
}

function CopyContentIntoMain(contentSource) {
    let source = document.getElementById(contentSource);

    document.getElementById(selectedItemContainerId).innerHTML = source.innerHTML;

    ShowElement(selectedItemContainerId);

    window.scrollTo(0, 0);
}

function ShowElement(elementId) {
    RemoveClassFromElement(elementId, hiddenClass);
}

function HideElement(elementId) {
    AddClassToElement(elementId, hiddenClass);
}

function AddClassToElement(elementId, className) {
    let element = document.getElementById(elementId);

    if (element.classList.contains(className) === false) {
        element.classList.add(className);
    }
}

function RemoveClassFromElement(elementId, className) {
    let element = document.getElementById(elementId);

    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function GetItemWithPrefix(prefix, item) {
    return `${prefix}${item}`;
}