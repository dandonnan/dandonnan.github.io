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
        pointsToday: 0,
        totalPoints: 0,
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

    html += '<div class="wordWrapper">';

    // Generate the HTML for the title
    for (let i = 0; i < title.length; i++){
        if (title[i] !== ' ') {
            html += '<div class="letter">&nbsp;</div>';
        }
        else {
            html += '</div>';
            html += '<div class="space"></div>';
            html += '<div class="wordWrapper">';
        }
    }

    html += "</div>";

    // Apply the HTML onto the page
    element.innerHTML = html;

    // If the user has not attempted a puzzle before, show the how to play popup
    if (userData.lastPuzzleId === 0) {
        ShowPopup('howToPlay');
        ShowElement('firstTimePolicy');
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
            ShowAllHints(puzzle);
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
            Win(puzzle);
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
function Win(puzzle) {
    // Increase the amount correct and win streak progress
    userData.stats.correct++;
    userData.stats.streak++;

    // If the user has beaten their streak, update the max streak value
    if (userData.stats.streak > userData.stats.maxStreak) {
        userData.stats.maxStreak++;
    }

    // Set the number of guesses that the player guessed in
    userData.stats.guesses[userData.numberOfGuesses - 1]++;

    // Work out the number of points today (invert the number of guesses and multiply by 10 for 50, 40, etc.)
    userData.stats.pointsToday = (maxGuesses - userData.numberOfGuesses + 1) * 10;

    // If the user is on a streak, give an extra 5 points multiplied by the steak amount
    if (userData.stats.streak > 1) {
        userData.stats.pointsToday += userData.stats.streak * 5;
    }

    // Increase the total number of points by the amount awarded today
    userData.stats.totalPoints += userData.stats.pointsToday;

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

    // Show all hints
    ShowAllHints(puzzle);

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

// Remove a letter from the guess
function RemoveFromGuess() {
    // Get all letters displayed
    let letters = document.getElementsByClassName('letter');

    // If the current guess is not blank
    if (currentGuess.length > 0) {
        // Get the index of the last letter in the guess
        let lastIndex = currentGuess.length - 1;

        // Get the first index of a space in the guess - spaces can not
        // be entered by a user, but will get added between letters that
        // are in the correct place
        let firstSpace = currentGuess.indexOf(' ');

        // If there is a space, change the last index to be before it
        lastIndex = firstSpace > -1 ? firstSpace - 1 : lastIndex;

        // Get an appendix - if there is a space, this is everything from the space
        // onwards, otherwise this is blank
        let appendix = firstSpace > -1 ? currentGuess.substring(firstSpace) : '';

        // Work back through each letter in the guess until at the start
        while (lastIndex >= 0) {
            // If the letter at the current index is correct
            if (letters[lastIndex].classList.contains('letterCorrect')) {
                // Change the appendix to begin with the current letter
                appendix = currentGuess[lastIndex] + appendix;
            }
            else {
                // Set the current guess so it includes everything from the start up
                // to before the space, then add a space before the appendix
                currentGuess = currentGuess.substring(0, lastIndex) + ' ' + appendix;
                currentGuess = currentGuess.trimEnd();
                lastIndex = 0;

                // Populate the letters
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

    // If the popup is the How to Play one, hide the link
    // to the privacy policy (it can be accessed again in settings)
    if (popupId === 'howToPlay') {
        HideElement('firstTimePolicy');
    }
}

// Populate the letters from the guess
function PopulateLettersFromGuess() {
    // Get all letters
    let letters = document.getElementsByClassName('letter');

    // Make all letters contain a space
    for (let i = 0; i < letters.length; i++){
        letters[i].innerHTML = '&nbsp;';
    }

    // Go through each letter in the current guess
    for (let i = 0; i < currentGuess.length; i++){
        // If the letter has a value
        if (currentGuess[i] !== ' ') {
            // Set that value inside the box
            letters[i].innerText = currentGuess[i];
        }
    }
}

// Add a hint
function AddHint() {
    // If the player has hints enabled
    if (userData.useHints === true) {

        // Get the puzzle
        let puzzle = GetPuzzle();

        // Based on the current number of guesses, reveal
        // the relevant hint
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

// Show all hints
function ShowAllHints(puzzle) {
    RevealHint('hint1', GetFirstHint(puzzle));
    RevealHint('hint2', GetSecondHint(puzzle));
    RevealHint('hint3', GetThirdHint(puzzle));
    RevealHint('hint4', GetFourthHint(puzzle));
}

// Reveal a hint
function RevealHint(elementId, hint) {
    // Get the element where the hint will display
    let element = document.getElementById(elementId);

    // Show the element
    element.classList.remove('hidden');

    // Set the hint inside the element
    element.innerText = hint;
}

// Hide a hint
function HideHint(elementId) {
    // Get the element where the hint is displayed
    let element = document.getElementById(elementId);

    // If the element is not hidden
    if (element.classList.contains('hidden') === false) {
        // Hide it
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

    //let recycleStartDate = 1725148800000; // 1655510400000
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

    // Display a random other game
    document.getElementById('otherGame').innerHTML = GetOtherGameLink();

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
    if (difference <= 0) {
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

    if (userData.stats.pointsToday === undefined) {
        userData.stats.pointsToday = 0;
    }

    if (userData.stats.totalPoints === undefined) {
        userData.stats.totalPoints = 0;
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

// Toggle the hints
function ToggleHints() {
    // If hints are enabled
    if (userData.useHints === true) {
        // Disable them
        userData.useHints = false;
    }
    else {
        // Otherwise enable them
        userData.useHints = true;
    }

    // If hints are disabled, hide them all
    if (userData.useHints === false) {
        HideHint('hint1');
        HideHint('hint2');
        HideHint('hint3');
        HideHint('hint4');
    }
    else {
        // Otherwise get the number of guesses
        let totalGuesses = guesses;

        // Go through the number of guesses
        for (let i = 0; i < totalGuesses; i++){
            guesses = i + 1;
            
            // Add a hint for each guess
            AddHint();
        }
    }

    // Save the hint status
    SaveData();
}

// Setup the stats display
function SetupStats() {
    // Set the value for games played
    document.getElementById('statPlayed').innerText = userData.stats.played;

    // Set the value for correct guesses - if no games have been played this should be 0
    // otherwise convert into a percentage and round it so it does not display too many
    // decimal places
    document.getElementById('statCorrect').innerText = userData.stats.played === 0 ? 0 :
        Math.round((userData.stats.correct / userData.stats.played) * 1000) / 10;
    
    // Set the relevant values
    document.getElementById('statStreak').innerText = userData.stats.streak;
    document.getElementById('statMaxStreak').innerText = userData.stats.maxStreak;

    document.getElementById('statPointsToday').innerText = userData.stats.pointsToday;
    document.getElementById('statTotalPoints').innerText = userData.stats.totalPoints;

    document.getElementById('statGuess1').innerText = userData.stats.guesses[0];
    document.getElementById('statGuess2').innerText = userData.stats.guesses[1];
    document.getElementById('statGuess3').innerText = userData.stats.guesses[2];
    document.getElementById('statGuess4').innerText = userData.stats.guesses[3];
    document.getElementById('statGuess5').innerText = userData.stats.guesses[4];

    // Clear the badges - they are generated separately
    document.getElementById('unlockedBadges').innerHTML = '';
}

// Setup the badges display
function SetupStatBadges() {
    let unlockedBadges = '';

    // For each badge
    for (let i = 0; i < userData.badges.length; i++){
        // If the badge is unlocked, get a div for it to add to the page
        if (userData.badges[i].Unlocked === true) {
            unlockedBadges += GetBadgeDiv(badges[i]);
        }
    }

    // If no badges are unlocked, set a message
    if (unlockedBadges === '') {
        unlockedBadges = '<div class="credits">Keep playing to unlock badges.</div>';
    }

    // Set any divs and messages onto the page
    document.getElementById('unlockedBadges').innerHTML = '<div class="statBar">' + unlockedBadges + "</div>";
}

// View a badge by displaying a popup for it
function ViewBadge(id) {
    // Get the badge from the list by matching the id
    let badge = badges.find(b => b.Id === id);

    // Set the name, description and icon on the display
    document.getElementById('badgeName').innerText = badge.Name;
    document.getElementById('badgeIcon').innerHTML = `<img src="${badge.Icon}" class="badge" />`;
    document.getElementById('badgeDescription').innerText = badge.Description;

    // Show the badge popup
    ShowPopup('badgeInfo');
}

// Get a div for a badge that displays the icon and the badge's name
function GetBadgeDiv(badge) {
    return `<div class="stat"><img src="${badge.Icon}" class="badgeSmall" onclick="ViewBadge('${badge.Id}')" /><div class="statText">${badge.Name}</div></div>`;
}

// Copy the stats to the clipboard
function ShareStatsToClipboard() {
    // Get the game name from the storage key, turning the first character to upper case
    let gameName = storageKey[0].toUpperCase() + storageKey.substring(1, storageKey.length);

    // Create a string to put on the clipboard, consisting of the game name, date and points
    let contentToShare = `${gameName} - ${new Date(Date.now()).toLocaleDateString()}\n\nPoints Today: ${userData.stats.pointsToday}\nTotal Points: ${userData.stats.totalPoints}`;

    // Set the string on the clipboard
    navigator.clipboard.writeText(contentToShare);

    // Get all notification elements
    let notifications = document.querySelectorAll('[id=shared]');

    // For each notification element
    for (let i = 0; i < notifications.length; i++){
        // Show the text to indicate the string is copied
        notifications[i].classList.remove('hidden');

        // Hide the text after 2 seconds
        setTimeout(() => notifications[i].classList.add('hidden'), 2000);
    }
}

// A list of other games with links on where to play them
const otherGames = [
    {
        logo: '../../images/logo_crappybird.png',
        windows: 'https://dandonnan.itch.io/crappy-bird',
        android: 'https://play.google.com/store/apps/details?id=com.dandon.crappybird',
    },
    {
        logo: '../../images/logo_biggerfish.png',
        windows: 'https://dandonnan.itch.io/bigger-fish',
        android: 'https://play.google.com/store/apps/details?id=com.dandon.biggerfish',
    }
]

// Get a link to a random other game
function GetOtherGameLink() {
    // Get a random number up to the number of games
    let index = Math.floor(Math.random() * otherGames.length);

    // Get the game that matches the random number
    let otherGame = otherGames[index];
    
    // Get the HTML to display the logo
    let link = `<div class="otherGame"><img src="${otherGame.logo}" width="200px" />`;

    // If an Android link is set, add that to the generated HTML
    if (otherGame.android !== null && otherGame.android !== undefined) {
        link += `<a href="${otherGame.android}" target="_blank"><img class="gameLink" src="../../images/android.png" width="20px" /></a>`;
    }

    // If a Windows link is set, add that to the generated HTML
    if (otherGame.windows !== null && otherGame.windows !== undefined) {
        link += `<a href="${otherGame.windows}" target="_blank"><img class="gameLink" src="../../images/windows.png" width="20px" /></a>`;
    }

    // Close the div
    link += '</div>';

    // Return the HTML
    return link;
}

// Call the start method once the script has loaded
Start();