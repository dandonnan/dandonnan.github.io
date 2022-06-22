const storageKey = 'gamesies';

function GetFirstHint(puzzle) {
    return `This game was released in ${puzzle.Year}`;
}

function GetSecondHint(puzzle) {
    return `It was developed by ${atob(puzzle.Developer)}`;
}

function GetThirdHint(puzzle) {
    return `It can be played on ${ParseCommaList(atob(puzzle.Platforms))}`;
}

function GetFourthHint(puzzle) {
    return `Genres include ${ParseCommaList(atob(puzzle.Genre))}`;
}

function UnlockBadges() {
    let badgesUnlocked = [];

    if (userData.badges.length === 0) {
        for (let i = 0; i < badges.length; i++){
            userData.badges.push({
                Id: badges[i].Id,
                Progress: 0,
                Unlocked: false
            });
        }
    }

    if (userData.numberOfGuesses === 1 && userData.badges[0].Unlocked === false) {
        userData.badges[0].Progress = 1;
        userData.badges[0].Unlocked = true;

        badgesUnlocked.push(0);
    }

    for (let i = 1; i < 3; i++){
        if (userData.badges[i].Unlocked === false
            && userData.stats.streak >= 1) {
            userData.badges[i].Progress++;

            if (userData.badges[i].Progress >= badges[i].Progress) {
                userData.badges[i].Unlocked = true;
                badgesUnlocked.push(i);
            }
        }
    }

    for (let i = 3; i < 8; i++){
        if (userData.badges[i].Unlocked === false) {
            userData.badges[i].Progress++;

            if (userData.badges[i].Progress >= badges[i].Progress) {
                userData.badges[i].Unlocked = true;
                badgesUnlocked.push(i);
            }
        }
    }

    return badgesUnlocked;
}

const badges = [
    {
        Id: 'LuckyGuess',
        Name: 'Lucky Guess',
        Description: 'Correctly guess the title with the first guess.',
        Icon: 'images/badge1.png',
        Progress: 1
    },
    {
        Id: 'StreakTen',
        Name: 'High Score',
        Description: 'Correctly guess 10 titles in a row.',
        Icon: 'images/badge2.png',
        Progress: 10
    },
    {
        Id: 'StreakThirty',
        Name: 'New High Score',
        Description: 'Correctly guess 30 titles in a row.',
        Icon: 'images/badge3.png',
        Progress: 30
    },
    {
        Id: 'Five',
        Name: 'Level Up',
        Description: 'Correctly guess 5 titles.',
        Icon: 'images/badge4.png',
        Progress: 5
    },
    {
        Id: 'Ten',
        Name: 'Casual Gamer',
        Description: 'Correctly guess 10 titles.',
        Icon: 'images/badge5.png',
        Progress: 10
    },
    {
        Id: 'TwentyFive',
        Name: 'Achievement Hunter',
        Description: 'Correctly guess 25 titles.',
        Icon: 'images/badge6.png',
        Progress: 25
    },
    {
        Id: 'Fifty',
        Name: 'Pro Gamer',
        Description: 'Correctly guess 50 titles.',
        Icon: 'images/badge7.png',
        Progress: 50
    },
    {
        Id: 'OneHundred',
        Name: 'Gotta Name \'em All',
        Description: 'Correctly guess 100 titles.',
        Icon: 'images/badge8.png',
        Progress: 100
    }
]

const puzzles = [
    {
        Id: 26082022,
        Name: 'U3VwZXIgTWFyaW8gR2FsYXh5',
        Developer: 'TmludGVuZG8=',
        Year: 2007,
        Platforms: 'V2lp',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 27082022,
        Name: 'U29uaWMgdGhlIEhlZGdlaG9n',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 1991,
        Platforms: 'TWVnYSBEcml2ZSAoR2VuZXNpcyk=',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 28082022,
        Name: 'QW5ncnkgQmlyZHM=',
        Developer: 'Um92aW8=',
        Year: 2009,
        Platforms: 'aU9T',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 29082022,
        Name: 'QW5pbWFsIENyb3NzaW5n',
        Developer: 'TmludGVuZG8=',
        Year: 2001,
        Platforms: 'R2FtZWN1YmU=',
        Genre: 'dW5kZWZpbmVk'
    }          
]