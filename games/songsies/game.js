const storageKey = 'songsies';

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
    return `The movie is a ${ParseCommaList(atob(puzzle.Genre))}"`;
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
        Name: 'Box Office Brain',
        Description: 'Correctly guess 10 titles in a row.',
        Icon: 'images/badge2.png',
        Progress: 10
    },
    {
        Id: 'StreakThirty',
        Name: 'Movie Magic',
        Description: 'Correctly guess 30 titles in a row.',
        Icon: 'images/badge3.png',
        Progress: 30
    },
    {
        Id: 'Five',
        Name: 'Cult Hits',
        Description: 'Correctly guess 5 titles.',
        Icon: 'images/badge4.png',
        Progress: 5
    },
    {
        Id: 'Ten',
        Name: 'Indie Darlings',
        Description: 'Correctly guess 10 titles.',
        Icon: 'images/badge5.png',
        Progress: 10
    },
    {
        Id: 'TwentyFive',
        Name: 'Film Fan',
        Description: 'Correctly guess 25 titles.',
        Icon: 'images/badge6.png',
        Progress: 25
    },
    {
        Id: 'Fifty',
        Name: 'Film Buff',
        Description: 'Correctly guess 50 titles.',
        Icon: 'images/badge7.png',
        Progress: 50
    },
    {
        Id: 'OneHundred',
        Name: 'Movie Mastermind',
        Description: 'Correctly guess 100 titles.',
        Icon: 'images/badge8.png',
        Progress: 100
    }
]

const puzzles = [
    {
        Id: 26082022,
        Name: 'VG95IFN0b3J5',
        Director: 'Sm9obiBMYXNzZXRlcg==',
        Year: 1995,
        Stars: 'VG9tIEhhbmtzLFRpbSBBbGxlbg==',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 27082022,
        Name: 'TWFyeSBQb3BwaW5z',
        Director: 'Um9iZXJ0IFN0ZXZlbnNvbg==',
        Year: 1964,
        Stars: 'SnVsaWUgQW5kcmV3cyxEaWNrIFZhbiBEeWtl',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 28082022,
        Name: 'SnVyYXNzaWMgUGFyaw==',
        Director: 'U3RldmVuIFNwaWVsYmVyZw==',
        Year: 1993,
        Stars: 'U2FtIE5laWxsLExhdXJhIERlcm4sSmVmZiBHb2xkYmx1bQ==',
        Genre: 'dW5kZWZpbmVk'
    },
    {
        Id: 29082022,
        Name: 'U2hyZWs=',
        Director: 'Tm9ib2R5IHJlbWVtYmVycw==',
        Year: 2001,
        Stars: 'TWlrZSBNeWVycyxFZGRpZSBNdXJwaHksQ2FtZXJvbiBEaWF6',
        Genre: 'dW5kZWZpbmVk'
    }         
]