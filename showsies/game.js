const storageKey = 'showsies';

// todo: sort out hints
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

// todo
const badges = [
    {
        Id: 'FirstTry',
        Name: 'First Try',
        Description: 'Correctly guess the title with the first guess.',
        Icon: '',
        Progress: 1
    },
    {
        Id: 'WeekStreak',
        Name: 'Weekly Streak',
        Description: 'Correctly guess titles for 7 days in a row.',
        Icon: '',
        Progress: 7
    },
    {
        Id: 'MonthStreak',
        Name: 'Monthly Streak',
        Description: 'Correctly guess titles for 30 days in a row.',
        Icon: '',
        Progress: 30
    },
    {
        Id: 'Five',
        Name: 'Five',
        Description: 'Correctly guess 5 titles.',
        Icon: '',
        Progress: 5
    },
    {
        Id: 'Ten',
        Name: 'Ten',
        Description: 'Correctly guess 10 titles.',
        Icon: '',
        Progress: 10
    },
    {
        Id: 'TwentyFive',
        Name: 'TwentyFive',
        Description: 'Correctly guess 25 titles.',
        Icon: '',
        Progress: 25
    },
    {
        Id: 'Fifty',
        Name: 'Fifty',
        Description: 'Correctly guess 50 titles.',
        Icon: '',
        Progress: 50
    },
    {
        Id: 'OneHundred',
        Name: 'OneHundred',
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