
let lastSearch = '';

function SearchProjects() {
    let currentText = document.getElementById('txtSearch').value;

    if (currentText !== lastSearch) {
        currentText = currentText.trim();

        if (currentText !== '') {
            RestrictToMatchingProjects(currentText);
        }
        else {
            ShowAllProjects();
        }
    }

    lastSearch = currentText;
}

function RestrictToMatchingProjects(searchTerm) {
    let projects = document.getElementsByClassName('project');

    searchTerm = searchTerm.toLowerCase();

    let searchTerms = searchTerm.split(' ');

    let matchingProjects = 0;

    for (let i = 0; i < projects.length; i++){
        let tags = projects[i].attributes.getNamedItem('data-tags').value;

        let tagList = tags.split(',');

        let matches = false;

        for (let j = 0; j < tagList.length; j++){
            for (let k = 0; k < searchTerms.length; k++) {
                if (tagList[j].indexOf(searchTerms[k]) > -1) {
                    matches = true;
                    matchingProjects++;
                    break;
                }
            }

            if (matches === true) {
                break;
            }
        }

        if (matches === true) {
            projects[i].classList.remove('hidden');
        }
        else {
            projects[i].classList.add('hidden');
        }
    }

    if (matchingProjects === 0) {
        document.getElementById('noResults').classList.remove('hidden');
    }
    else {
        document.getElementById('noResults').classList.add('hidden');
    }
}

function ShowAllProjects() {
    let projects = document.getElementsByClassName('project');

    for (let i = 0; i < projects.length; i++){
        if (projects[i].classList.contains('hidden')) {
            projects[i].classList.remove('hidden');
        }
    }

    document.getElementById('noResults').classList.add('hidden');
}