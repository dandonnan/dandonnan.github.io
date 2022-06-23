// The maximum number of guesses allowed.
const maxGuesses = 5;

// The number of milliseconds in other time values.
const millisecondsInSecond = 1000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInDay = 86400000;

// Known themes
const themeDark = 'dark';
const themeLight = 'light';

// TODO: Fix bug with remove letters
// TODO: Use correct recycle date
// TODO: Icons for non-film games
// TODO: Put in proper puzzles
// TODO: Check CSS for words on longer titles (on mobile)

let guesses = 0;
let hints = [];

let currentGuess = '';
let currentTitleLength;

let theme = themeDark;

let displayingPopup = false;

let currentPuzzle = null;

// Save data
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

// Add a keydown event to the page to react to button input
document.onkeydown = function (keyboardEvent) {
    if (displayingPopup === true) {
        // If a popup is displayed and Escape is pressed, close all popups
        if (keyboardEvent.code === 'Escape') {
            HidePopup('howToPlay');
            HidePopup('stats');
            HidePopup('settings');
            HidePopup('won');
            HidePopup('lost');
            HidePopup('badgeInfo');
        }
    }
    else {
        // Detect valid inputs and call the relevant methods
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

// Function called when the page loads
function Start() {
    // Load in any saved data
    LoadData();

    // Setup the stats popup
    SetupStats();

    // Setup the badges on the stats popup
    SetupStatBadges();

    // Get the puzzle title
    let element = document.getElementById('title');

    // Get today's puzzle
    let puzzle = GetPuzzle();

    // Get the name of the puzzle
    let title = atob(puzzle.Name);

    // Set the name, but without spaces
    let titleWithoutSpaces = title;

    // Remove all spaces from the name
    while (titleWithoutSpaces.indexOf(' ') > -1) {
        titleWithoutSpaces = titleWithoutSpaces.replace(' ', '');
    }

    // If dark mode is enabled
    if (userData.darkMode) {
        // Set the theme to light (this isn't a mistake - ChangeTheme will flip it back)
        theme = themeLight;
        document.getElementById('chkDark').checked = true;
    }

    // Change the page's theme
    ChangeTheme();

    currentTitleLength = titleWithoutSpaces.length;

    let html = '';

    // Generate the HTML for the title
    for (let i = 0; i < title.length; i++){
        if (title[i] !== ' ') {
            html += '<div class="letter">&nbsp;</div>';
        }
        else {
            html += '<div class="space"></div>';
        }
    }

    // Apply the HTML onto the page
    element.innerHTML = html;

    // If the user has not attempted a puzzle before, show the how to play popup
    if (userData.lastPuzzleId === 0) {
        ShowPopup('howToPlay');
    }

    // If today's puzzle is different from the last puzzle, reset the guesses
    if (userData.lastPuzzleId !== puzzle.Id) {
        userData.numberOfGuesses = 0;
        userData.lastGuess = '';
    }
    else {
        // If the user has used all their guesses, or has guessed correctly then display the countdown for the next puzzle
        if (userData.lastGuess === titleWithoutSpaces.toUpperCase() || userData.numberOfGuesses >= maxGuesses) {
            ShowCountdown();
        }

        currentGuess = userData.lastGuess;

        // Populate the title from the previous game
        PopulateLettersFromGuess();

        // Display hints based on the number of guesses already used
        if (userData.useHints === true) {
            for (let i = 0; i < userData.numberOfGuesses; i++){
                guesses++;

                AddHint();
            }
        }

        let letters = document.getElementsByClassName('letter');

        // Style any letters that are in the correct place
        for (let i = 0; i < letters.length; i++){
            if (letters[i].innerText === titleWithoutSpaces[i].toUpperCase() && letters[i].classList.contains('letterCorrect') === false) {
                letters[i].classList.add('letterCorrect');
            }
        }
    }
}

// Enter a guess
function Guess() {
    // Only allow guessing if it is the correct length and is not the same as the previous guess
    if (currentGuess !== '' && currentGuess !== userData.lastGuess && currentGuess.length === currentTitleLength) {

        // Get today's puzzle
        let puzzle = GetPuzzle();

        let title = atob(puzzle.Name);

        // Remove spaces from the title
        while (title.indexOf(' ') > -1) {
            title = title.replace(' ', '');
        }

        // For the first guess of the day, increase the puzzles played and set the latest puzzle id
        if (userData.numberOfGuesses === 0) {
            userData.stats.played++;
            userData.lastPuzzleId = puzzle.Id;
        }

        // Save the current guess and increase the number of guesses
        userData.lastGuess = currentGuess;
        userData.numberOfGuesses++;

        let letters = document.getElementsByClassName('letter');

        // Mark off any correct letters
        for (let i = 0; i < letters.length; i++){
            if (letters[i].innerText === title[i].toUpperCase() && letters[i].classList.contains('letterCorrect') === false) {
                letters[i].classList.add('letterCorrect');
            }
        }

        // If the guess is correct then display the win popup
        if (title.toUpperCase() === currentGuess) {
            Win();
        }
        else {
            // Increase the number of guesses
            guesses++;

            // If there are more guesses available, show a hint
            if (guesses < maxGuesses) {
                AddHint();
            }
            else {
                // Show the lose popup
                Lose();
            }
        }

        // Save to local storage
        SaveData();
    }
}

// Show the win popup
function Win() {
    // Increase the amount correct and win streak progress
    userData.stats.correct++;
    userData.stats.streak++;

    // If the user has beaten their streak, update the max streak value
    if (userData.stats.streak > userData.stats.maxStreak) {
        userData.stats.maxStreak++;
    }

    // Set the number of guesses that the player guessed in
    userData.stats.guesses[userData.numberOfGuesses - 1]++;

    // Update the stats popup
    SetupStats();

    // Reset the winStats box so any stats there won't get copied
    document.getElementById('winStats').innerHTML = '';

    // Get the stats from the stats popup
    let stats = document.getElementsByClassName('statBar');

    let newStats = '';

    // Copy the stats from the stats popup
    for (let i = 0; i < stats.length; i++){
        newStats += `<div class="statBar">${stats[i].innerHTML}</div>`;
    }

    // Add the copied stats to the win popup
    document.getElementById('winStats').innerHTML = newStats;

    // Unlock any badges and get which ones were unlocked
    let badgesUnlocked = UnlockBadges();

    let badgeInfo = '';

    // Get the HTML for the unlocked badges
    for (let i = 0; i < badgesUnlocked.length; i++){
        badgeInfo += GetBadgeDiv(badges[badgesUnlocked[i]]);
    }

    // If any badges were unlocked, add them to the win popup
    if (badgeInfo !== '') {
        document.getElementById('newBadges').innerHTML = '<div class="popupTitle">Badges Unlocked</div><div class="statBar">' + badgeInfo + '</div>';
    }

    // Update the badges section on the stats popup
    SetupStatBadges();

    // Show the popup
    ShowPopup('won');

    // Display the countdown on the main page
    ShowCountdown();
}

// Show the lose popup
function Lose() {
    // Increase the number of incorrect guesses
    userData.stats.incorrect++;

    // Set the winning streak to 0
    userData.stats.streak = 0;

    // Update the stats
    SetupStats();

    // Update the badges
    SetupStatBadges();

    // Show the correct answer
    document.getElementById('correctAnswer').innerText = atob(GetPuzzle().Name);

    // Show the popup and countdown
    ShowPopup('lost');
    ShowCountdown();
}

// Add a character to the guess
function AddToGuess(character) {
    // Find any spaces in the guess
    let firstSpace = currentGuess.indexOf(' ');

    // If there is a space
    if (firstSpace > -1) {
        // Replace the first space with the character
        currentGuess = currentGuess.substring(0, firstSpace) + character + currentGuess.substring(firstSpace + 1);

        PopulateLettersFromGuess();
    }
    else if (currentGuess.length < currentTitleLength) {
        // Otherwise pop the character onto the end of the guess
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

// Show an element by removing the hidden class
function ShowElement(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

// Hide an element by adding the hidden class
function HideElement(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

// Show a named popup
function ShowPopup(popupId) {
    displayingPopup = true;
    ShowElement(popupId);
}

// Hide a named popup
function HidePopup(popupId) {
    displayingPopup = false;
    HideElement(popupId);

    if (popupId === 'howToPlay') {
        HideElement('firstTimePolicy');
    }
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

// Get today's puzzle
function GetPuzzle() {
    // If the puzzle has not been retrieved
    if (currentPuzzle === null) {
        // Get the month and add one to it so it's the proper month (thanks, JavaScript)
        let month = new Date().getUTCMonth() + 1;

        // If the month is less than 10, add a 0 to the start
        if (month < 10) {
            month = `0${month}`;
        }

        // Setup the date with the relevant methods (because JavaScript gets the other numbers properly)
        let date = `${new Date().getUTCDate()}` +
            `${month}` +
            `${new Date().getUTCFullYear()}`;
    
        // Find the puzzle with the id that matches the date
        let puzzle = puzzles.find(m => m.Id === parseInt(date));

        // If the puzzle was not found, then recycle one from the list
        if (puzzle === undefined) {
            puzzle = GetRecycledPuzzle();
        }

        // Set the puzzle so it doesn't need to do this logic again
        currentPuzzle = puzzle;
    }

    return currentPuzzle;
}

// Get a recycled puzzle
function GetRecycledPuzzle() {
    //let recycleStartDate = 1725148800000;

    // todo: remove this and use the one above
    let recycleStartDate = 1655510400000;

    // Get midnight from today's date in UTC
    let today = new Date().setUTCHours(0, 0, 0, 0);

    // Find the difference between today and the first day of recycled dates
    let difference = today - recycleStartDate;

    if (difference > 0) {
        // Divide by the number of milliseconds in a day to get a smaller number
        difference /= millisecondsInDay;

        // If the difference is above the puzzles length, chop it down
        while (difference >= puzzles.length) {
            difference -= puzzles.length;
        }
    }

    return puzzles[difference];
}

// Parse a comma separated list like 'a,b,c' to display like 'a, b and c'
function ParseCommaList(list) {
    let names = '';

    // Get the position of the first comma
    let comma = list.indexOf(',');

    // As long as there is a comma in the list
    while (comma > -1) {
        // Get all text before the comma
        let item = list.substring(0, comma);

        // Remove the first item from the list
        list = list.substring(comma+1);

        // Find the next comma
        comma = list.indexOf(',');

        // If this is the first item, add it as it is
        if (names === '') {
            names = item;
        }
        else {
            // Otherwise, add it after a comma to the other items
            names = `${names}, ${item}`;
        }
    }

    if (names === '') {
        names = list;
    }
    else {
        // If this is the last item, add it after an 'and'
        names = `${names} and ${list}`;
    }

    return names;
}

// Show the countdown to the next puzzle
function ShowCountdown() {
    // Hide the keyboard
    HideElement('keyboard');

    // Show the countdown
    ShowElement('countdown');

    // Start counting down
    Countdown();

    // Call the Countdown timer every second
    setInterval(Countdown, millisecondsInSecond);
}

// Countdown to the next puzzle
function Countdown() {
    // Get tomorrow's date in UTC by instantiating 4 date objects because JavaScript
    let tomorrow = new Date(new Date(new Date(Date.now()).toUTCString()).setUTCHours(0, 0, 0, 0)).setUTCHours(24);

    // Get the time right now
    let now = Date.now();

    // Work out the difference between the two
    let difference = tomorrow - now;

    // If it is tomorrow then refresh the page to get the latest puzzle
    if (difference < 0) {
        window.location.reload();
    }

    // Convert the difference into hours, minutes and seconds
    let hours = Math.floor((difference % millisecondsInDay) / millisecondsInHour);
    let minutes = Math.floor((difference % millisecondsInHour) / millisecondsInMinute);
    let seconds = Math.floor((difference % millisecondsInMinute) / millisecondsInSecond);

    // Display the time
    document.getElementById('countdownTime').innerText = `${hours}h ${minutes}m ${seconds}s`
}

// Save the data to local storage by converting it to a JSON string
function SaveData() {
    localStorage.setItem(storageKey, JSON.stringify(userData));
}

// Get the data from local storage
function LoadData() {
    let data = localStorage.getItem(storageKey);

    // If there is data, convert it from a JSON string into an object
    if (data !== null && data !== undefined) {
        userData = JSON.parse(data);
    }
}

// Change the theme
function ChangeTheme() {
    // Swap the themes
    if (theme === themeDark) {
        theme = themeLight;
        userData.darkMode = false;
    }
    else {
        theme = themeDark;
        userData.darkMode = true;
    }

    // Get all elements that have the data-theme tag
    let themedElements = document.querySelectorAll('[data-theme]');

    // Set the elements to have the correct theme value (CSS will do the rest)
    for (let i = 0; i < themedElements.length; i++){
        themedElements[i].setAttribute('data-theme', theme);
    }

    // Save the theme change
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

    document.getElementById('unlockedBadges').innerHTML = '';
}

function SetupStatBadges() {
    let unlockedBadges = '';

    for (let i = 0; i < userData.badges.length; i++){
        if (userData.badges[i].Unlocked === true) {
            unlockedBadges += GetBadgeDiv(badges[i]);
        }
    }

    if (unlockedBadges === '') {
        unlockedBadges = '<div class="credits">Keep playing to unlock badges.</div>';
    }

    document.getElementById('unlockedBadges').innerHTML = '<div class="statBar">' + unlockedBadges + "</div>";
}

function ViewBadge(id) {
    let badge = badges.find(b => b.Id === id);

    document.getElementById('badgeName').innerText = badge.Name;
    document.getElementById('badgeIcon').innerHTML = `<img src="${badge.Icon}" class="badge" />`;
    document.getElementById('badgeDescription').innerText = badge.Description;

    ShowPopup('badgeInfo');
}

function GetBadgeDiv(badge) {
    return `<div class="stat"><img src="${badge.Icon}" class="badgeSmall" onclick="ViewBadge('${badge.Id}')" /><div class="statText">${badge.Name}</div></div>`;
}

Start();