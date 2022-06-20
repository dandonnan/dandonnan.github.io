const maxGuesses = 5;

const millisecondsInSecond = 1000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInDay = 86400000;

const themeDark = 'dark';
const themeLight = 'light';

// todo: badge icons, remove letter, recycle date, delete other folders and recopy, put in proper puzzles

let guesses = 0;
let hints = [];

let currentGuess = '';
let currentTitleLength;

let theme = themeDark;

let displayingPopup = false;

let userData = {
    lastPuzzleId: 0,
    lastGuess: '',
    numberOfGuesses: 0,
    useHints: true,
    darkMode: true,
    stats: {
        played: 0,
        correct: 0,
        incorrect: 0,
        streak: 0,
        maxStreak: 0,
        guesses: [
            0,
            0,
            0,
            0,
            0
        ]
    },
    badges: []
};

document.onkeydown = function (keyboardEvent) {
    if (displayingPopup === true) {
        if (keyboardEvent.code === 'Escape') {
            HidePopup('howToPlay');
            HidePopup('stats');
            HidePopup('settings');
            HidePopup('won');
            HidePopup('lost');
        }
    }
    else {
        switch (keyboardEvent.code) {
            case 'Backspace':
                RemoveFromGuess();
                break;
        
            case 'Enter':
                Guess();
                break;

            case 'KeyA':
                AddToGuess('A');
                break;
        
            case 'KeyB':
                AddToGuess('B');
                break;
        
            case 'KeyC':
                AddToGuess('C');
                break;
            
            case 'KeyD':
                AddToGuess('D');
                break;
            
            case 'KeyE':
                AddToGuess('E');
                break;
            
            case 'KeyF':
                AddToGuess('F');
                break;
            
            case 'KeyG':
                AddToGuess('G');
                break;
                
            case 'KeyH':
                AddToGuess('H');
                break;
            
            case 'KeyI':
                AddToGuess('I');
                break;
            
            case 'KeyJ':
                AddToGuess('J');
                break;
            
            case 'KeyK':
                AddToGuess('K');
                break;
                
            case 'KeyL':
                AddToGuess('L');
                break;
                
            case 'KeyM':
                AddToGuess('M');
                break;
                
            case 'KeyN':
                AddToGuess('N');
                break;
                
            case 'KeyO':
                AddToGuess('O');
                break;
                    
            case 'KeyP':
                AddToGuess('P');
                break;
            
            case 'KeyQ':
                AddToGuess('Q');
                break;
            
            case 'KeyR':
                AddToGuess('R');
                break;
            
            case 'KeyS':
                AddToGuess('S');
                break;
                
            case 'KeyT':
                AddToGuess('T');
                break;
                
            case 'KeyU':
                AddToGuess('U');
                break;
                
            case 'KeyV':
                AddToGuess('V');
                break;
                
            case 'KeyW':
                AddToGuess('W');
                break;
                    
            case 'KeyX':
                AddToGuess('X');
                break;
            
            case 'KeyY':
                AddToGuess('Y');
                break;
                    
            case 'KeyZ':
                AddToGuess('Z');
                break;
        }
    }
}

function Start() {
    LoadData();

    SetupStats();

    let element = document.getElementById('title');

    let puzzle = GetPuzzle();

    let title = atob(puzzle.Name);

    let titleWithoutSpaces = title;

    while (titleWithoutSpaces.indexOf(' ') > -1) {
        titleWithoutSpaces = titleWithoutSpaces.replace(' ', '');
    }

    if (userData.darkMode) {
        theme = themeLight;
        document.getElementById('chkDark').checked = true;
    }

    ChangeTheme();

    currentTitleLength = titleWithoutSpaces.length;

    let html = '';

    for (let i = 0; i < title.length; i++){
        if (title[i] !== ' ') {
            html += '<div class="letter">&nbsp;</div>';
        }
        else {
            html += '<div class="space"></div>';
        }
    }

    element.innerHTML = html;

    if (userData.lastPuzzleId === 0) {
        ShowPopup('howToPlay');
    }

    if (userData.lastPuzzleId !== puzzle.Id) {
        userData.numberOfGuesses = 0;
        userData.lastGuess = '';
    }
    else {
        if (userData.lastGuess === titleWithoutSpaces.toUpperCase() || userData.numberOfGuesses >= maxGuesses) {
            ShowCountdown();
        }

        currentGuess = userData.lastGuess;

        PopulateLettersFromGuess();

        if (userData.useHints === true) {
            for (let i = 0; i < userData.numberOfGuesses; i++){
                guesses++;

                AddHint();
            }
        }

        let letters = document.getElementsByClassName('letter');

        for (let i = 0; i < letters.length; i++){
            if (letters[i].innerText === titleWithoutSpaces[i].toUpperCase() && letters[i].classList.contains('letterCorrect') === false) {
                letters[i].classList.add('letterCorrect');
            }
        }
    }
}

function Guess() {
    if (currentGuess !== '' && currentGuess !== userData.lastGuess && currentGuess.length === currentTitleLength) {
        let puzzle = GetPuzzle();

        let title = atob(puzzle.Name);

        while (title.indexOf(' ') > -1) {
            title = title.replace(' ', '');
        }

        if (userData.numberOfGuesses === 0) {
            userData.stats.played++;
            userData.lastPuzzleId = puzzle.Id;
        }

        userData.lastGuess = currentGuess;
        userData.numberOfGuesses++;

        let letters = document.getElementsByClassName('letter');

        for (let i = 0; i < letters.length; i++){
            if (letters[i].innerText === title[i].toUpperCase() && letters[i].classList.contains('letterCorrect') === false) {
                letters[i].classList.add('letterCorrect');
            }
        }

        if (title.toUpperCase() === currentGuess) {
            Win();
        }
        else {
            guesses++;

            if (guesses < maxGuesses) {
                AddHint();
            }
            else {
                Lose();
            }
        }

        SaveData();
    }
}

function Win() {
    userData.stats.correct++;
    userData.stats.streak++;

    if (userData.stats.streak > userData.stats.maxStreak) {
        userData.stats.maxStreak++;
    }

    userData.stats.guesses[userData.numberOfGuesses - 1]++;

    let badgesUnlocked = UnlockBadges();

    let badgeInfo = '';

    for (let i = 0; i < badgesUnlocked.length; i++){
        // todo: badge icon
        badgeInfo += `<div>${badges[badgesUnlocked[i]].Name}</div>`;
    }

    if (badgeInfo !== '') {
        document.getElementById('newBadges').innerHTML = '<div class="popupTitle">Badges Unlocked</div>' + badgeInfo;
    }

    SetupStats();

    document.getElementById('winStats').innerHTML = '';

    let stats = document.getElementsByClassName('statBar');

    let newStats = '';

    for (let i = 0; i < stats.length; i++){
        newStats += `<div class="statBar">${stats[i].innerHTML}</div>`;
    }

    document.getElementById('winStats').innerHTML = newStats;

    ShowPopup('won');

    ShowCountdown();
}

function Lose() {
    userData.stats.incorrect++;

    userData.stats.streak = 0;

    SetupStats();

    document.getElementById('correctAnswer').innerText = atob(GetPuzzle().Name);

    ShowPopup('lost');
    ShowCountdown();
}

function AddToGuess(character) {
    let firstSpace = currentGuess.indexOf(' ');

    if (firstSpace > -1) {
        currentGuess = currentGuess.substring(0, firstSpace) + character + currentGuess.substring(firstSpace + 1);

        PopulateLettersFromGuess();
    }
    else if (currentGuess.length < currentTitleLength) {
        currentGuess += character;

        PopulateLettersFromGuess();
    }
}

function RemoveFromGuess() {
    // todo: fix this

    let letters = document.getElementsByClassName('letter');

    if (currentGuess.length > 0) {
        let lastIndex = currentGuess.length - 1;

        let firstSpace = currentGuess.indexOf(' ');

        lastIndex = firstSpace > -1 ? firstSpace - 1 : lastIndex;

        let appendix = firstSpace > -1 ? currentGuess.substring(firstSpace) : '';

        while (lastIndex >= 0) {
            if (letters[lastIndex].classList.contains('letterCorrect')) {
                appendix = ' ' + currentGuess[lastIndex] + appendix;
            }
            else {
                currentGuess = currentGuess.substring(0, lastIndex) + appendix;
                lastIndex = 0;

                PopulateLettersFromGuess();
            }

            lastIndex--;
        }
    }
}

function ShowElement(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function HideElement(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function ShowPopup(popupId) {
    displayingPopup = true;
    ShowElement(popupId);
}

function HidePopup(popupId) {
    displayingPopup = false;
    HideElement(popupId);
}

function PopulateLettersFromGuess() {
    let letters = document.getElementsByClassName('letter');

    for (let i = 0; i < letters.length; i++){
        letters[i].innerHTML = '&nbsp;';
    }

    for (let i = 0; i < currentGuess.length; i++){
        if (currentGuess[i] !== ' ') {
            letters[i].innerText = currentGuess[i];
        }
    }
}

function AddHint() {
    if (userData.useHints === true) {

        let puzzle = GetPuzzle();

        switch (guesses) {
            case 1:
                RevealHint('hint1', GetFirstHint(puzzle));
                break;
        
            case 2:
                RevealHint('hint2', GetSecondHint(puzzle));
                break;
        
            case 3:
                RevealHint('hint3', GetThirdHint(puzzle));
                break;
        
            case 4:
                RevealHint('hint4', GetFourthHint(puzzle));
                break;
        
            default:
                break;
        }
    }
}

function RevealHint(elementId, hint) {
    let element = document.getElementById(elementId);

    element.classList.remove('hidden');

    element.innerText = hint;
}

function HideHint(elementId) {
    let element = document.getElementById(elementId);

    if (element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
    }
}

function GetPuzzle() {
    let month = new Date().getUTCMonth() + 1;

    if (month < 10) {
        month = `0${month}`;
    }

    let date = `${new Date().getUTCDate()}` +
        `${month}` +
        `${new Date().getUTCFullYear()}`;
    
    let puzzle = puzzles.find(m => m.Id === parseInt(date));

    if (puzzle === undefined) {
        puzzle = GetRecycledPuzzle();
    }

    return puzzle;
}

function GetRecycledPuzzle() {
    //let recycleStartDate = 1725148800000;

    // todo: remove this and use the one above
    let recycleStartDate = 1655510400000;

    let today = new Date().setUTCHours(0, 0, 0, 0);

    let difference = today - recycleStartDate;

    if (difference > 0) {
        difference /= millisecondsInDay;

        while (difference > puzzles.length) {
            difference -= puzzles.length;
        }
    }

    return puzzles[difference];
}

function ParseCommaList(list) {
    let names = '';

    let comma = list.indexOf(',');

    while (comma > -1) {
        let item = list.substring(0, comma);

        list = list.substring(comma+1);

        comma = list.indexOf(',');

        if (names === '') {
            names = item;
        }
        else {
            names = `${names}, ${item}`;
        }
    }

    if (names === '') {
        names = list;
    }
    else {
        names = `${names} and ${list}`;
    }

    return names;
}

function ShowCountdown() {
    HideElement('keyboard');
    ShowElement('countdown');

    Countdown();

    setInterval(Countdown, millisecondsInSecond);
}

function Countdown() {
    let tomorrow = new Date(new Date(new Date(Date.now()).toUTCString()).setUTCHours(0, 0, 0, 0)).setUTCHours(24);

    let now = Date.now();

    let difference = tomorrow - now;

    if (difference < 0) {
        window.location.reload();
    }

    let hours = Math.floor((difference % millisecondsInDay) / millisecondsInHour);
    let minutes = Math.floor((difference % millisecondsInHour) / millisecondsInMinute);
    let seconds = Math.floor((difference % millisecondsInMinute) / millisecondsInSecond);

    document.getElementById('countdownTime').innerText = `${hours}h ${minutes}m ${seconds}s`
}

function SaveData() {
    localStorage.setItem(storageKey, JSON.stringify(userData));
}

function LoadData() {
    let data = localStorage.getItem(storageKey);

    if (data !== null && data !== undefined) {
        userData = JSON.parse(data);
    }
}

function ChangeTheme() {
    if (theme === themeDark) {
        theme = themeLight;
        userData.darkMode = false;
    }
    else {
        theme = themeDark;
        userData.darkMode = true;
    }

    let themedElements = document.querySelectorAll('[data-theme]');

    for (let i = 0; i < themedElements.length; i++){
        themedElements[i].setAttribute('data-theme', theme);
    }

    SaveData();
}

function ToggleHints() {
    if (userData.useHints === true) {
        userData.useHints = false;
    }
    else {
        userData.useHints = true;
    }

    if (userData.useHints === false) {
        HideHint('hint1');
        HideHint('hint2');
        HideHint('hint3');
        HideHint('hint4');
    }
    else {
        let totalGuesses = guesses;

        for (let i = 0; i < totalGuesses; i++){
            guesses = i + 1;
            AddHint();
        }
    }

    SaveData();
}

function SetupStats() {
    document.getElementById('statPlayed').innerText = userData.stats.played;
    document.getElementById('statCorrect').innerText = userData.stats.played === 0 ? 0 :
                    Math.round((userData.stats.correct / userData.stats.played) * 1000) / 10;
    document.getElementById('statStreak').innerText = userData.stats.streak;
    document.getElementById('statMaxStreak').innerText = userData.stats.maxStreak;

    document.getElementById('statGuess1').innerText = userData.stats.guesses[0];
    document.getElementById('statGuess2').innerText = userData.stats.guesses[1];
    document.getElementById('statGuess3').innerText = userData.stats.guesses[2];
    document.getElementById('statGuess4').innerText = userData.stats.guesses[3];
    document.getElementById('statGuess5').innerText = userData.stats.guesses[4];

    let unlockedBadges = '';

    for (let i = 0; i < userData.badges.length; i++){
        if (userData.badges[i].Unlocked === true) {
            // todo: badge icon
            unlockedBadges += `<div>${badges[i].Name}</div>`;
        }
    }

    if (unlockedBadges === '') {
        unlockedBadges = '<div class="credits">Keep playing to unlock badges.</div>';
    }

    document.getElementById('unlockedBadges').innerHTML = unlockedBadges;
}

Start();