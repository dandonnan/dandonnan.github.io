let currentPopup = '';

function ShowPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');

    currentPopup = popupId;

    setTimeout(() => {
        document.addEventListener('keyup', ListenToKeyboard);
        document.addEventListener('click', ListenToClick);
    }, 500);
}

function HidePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');

    document.removeEventListener('keyup', ListenToKeyboard);
    document.removeEventListener('click', ListenToClick);
}

function ListenToKeyboard(event) {
    if (event.code === 'Escape' || event.key === 'Escape') {
        HidePopup(currentPopup);
    }
}

function ListenToClick(event) {
    if (event.target.classList.contains('popupContent') === false) {
        HidePopup(currentPopup);
    }
}