const storageKey = 'filmsies';

function GetFirstHint(puzzle) {
    return `This movie was released in ${puzzle.Year}`;
}

function GetSecondHint(puzzle) {
    return `It was directed by ${atob(puzzle.Director)}`;
}

function GetThirdHint(puzzle) {
    return `It features ${ParseCommaList(atob(puzzle.Stars))}`;
}

function GetFourthHint(puzzle) {
    return `"${atob(puzzle.Quote)}"`;
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

// todo: icons
const badges = [
    {
        Id: 'LuckyGuess',
        Name: 'Lucky Guess',
        Description: 'Correctly guess the title with the first guess.',
        Icon: '',
        Progress: 1
    },
    {
        Id: 'StreakTen',
        Name: 'Box Office Brain',
        Description: 'Correctly guess 10 titles in a row.',
        Icon: '',
        Progress: 10
    },
    {
        Id: 'StreakThirty',
        Name: 'Movie Magic',
        Description: 'Correctly guess 30 titles in a row.',
        Icon: '',
        Progress: 30
    },
    {
        Id: 'Five',
        Name: 'Cult Hits',
        Description: 'Correctly guess 5 titles.',
        Icon: '',
        Progress: 5
    },
    {
        Id: 'Ten',
        Name: 'Indie Darlings',
        Description: 'Correctly guess 10 titles.',
        Icon: '',
        Progress: 10
    },
    {
        Id: 'TwentyFive',
        Name: 'Film Fan',
        Description: 'Correctly guess 25 titles.',
        Icon: '',
        Progress: 25
    },
    {
        Id: 'Fifty',
        Name: 'Film Buff',
        Description: 'Correctly guess 50 titles.',
        Icon: '',
        Progress: 50
    },
    {
        Id: 'OneHundred',
        Name: 'Movie Mastermind',
        Description: 'Correctly guess 100 titles.',
        Icon: '',
        Progress: 100
    }
]

const puzzles = [
    {
        Id: 30052022,
        Name: 'R3VhcmRpYW5zIG9mIHRoZSBHYWxheHk=',
        Director: 'SmFtZXMgR3Vubg==',
        Year: 2014,
        Stars: 'Q2hyaXMgUHJhdHQsWm9lIFNhbGRhbmEsRGF2ZSBCYXV0aXN0YQ==',
        Quote: 'SSBhbSBHcm9vdC4='
    },
    {
        Id: 29052022,
        Name: 'UmVhZHkgUGxheWVyIE9uZQ==',
        Director: 'U3RldmVuIFNwaWVsYmVyZw==',
        Year: 2017,
        Stars: 'T2xpdmlhIENvb2tl',
        Quote: 'Pz8/'
    },
    {
        Id: 27052022,
        Name: 'RmFudGFzdGljIE1yIEZveA==',
        Director: 'KCgpKQ==',
        Year: 2017,
        Stars: 'Pj4=',
        Quote: 'Pz8/'
    },
    {
        Id: 26052022,
        Name: 'SnVubw==',
        Director: 'KCgpKQ==',
        Year: 2017,
        Stars: 'Pj4=',
        Quote: 'Pz8/'
    }      
]