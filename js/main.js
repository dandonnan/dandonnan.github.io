
const menuItemSelectedClass = 'selected';

const hiddenClass = 'hidden';

const menuIdPrefix = 'menu-';

const selectedItemContainerId = 'selectedItemContainer';

const clickHintContainerId = 'clickHint';

let currentSection = 'professional';

function ChangeSection(toSection) {

    if (currentSection !== toSection) {
        DeselectHeader(currentSection);
        ResetClickHintPrompt(toSection);
        SelectHeader(toSection);
    }

    currentSection = toSection;
}

function DeselectHeader(menuItem) {
    RemoveClassFromElement(GetItemWithPrefix(menuIdPrefix, menuItem), menuItemSelectedClass);

    HideElement(menuItem);
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

function ResetClickHintPrompt(menuItem) {
    if (menuItem === 'professional' || menuItem === 'personal') {
        CopyContentIntoMain(clickHintContainerId);
    }
    else {
        HideElement(selectedItemContainerId);
    }
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