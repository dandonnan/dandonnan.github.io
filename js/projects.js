
let lastSearch = '';

function SearchProjects() {
    let currentText = document.getElementById('txtSearch').value;

    if (currentText !== lastSearch) {
        currentText = currentText.trim();

        let projects;

        if (currentText !== '') {
            projects = FindMatchingProjects(currentText);
        }
        else {
            projects = FindAllProjects();
        }

        // todo: put projects on page
    }

    lastSearch = currentText;
}

function FindMatchingProjects(searchTerm) {
    // todo:
}

function FindAllProjects() {
    // todo:
}