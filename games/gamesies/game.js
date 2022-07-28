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
    return `The game fits the ${atob(puzzle.Genre)} genre`;
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
        Id: 12122023,
        Name: 'U3VwZXIgTWFyaW8gR2FsYXh5',
        Developer: 'TmludGVuZG8=',
        Year: 2007,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'V2lp'
    },
    {
        Id: 12072023,
        Name: 'V2lpIFNwb3J0cw==',
        Developer: 'TmludGVuZG8=',
        Year: 2006,
        Genre: 'U3BvcnRz',
        Platforms: 'V2lp'
    },
    {
        Id: 30092022,
        Name: 'V2lpIFNwb3J0cyBSZXNvcnQ=',
        Developer: 'TmludGVuZG8=',
        Year: 2009,
        Genre: 'U3BvcnRz',
        Platforms: 'V2lp'
    },
    {
        Id: 29122023,
        Name: 'U3VwZXIgTWFyaW8gT2R5c3NleQ==',
        Developer: 'TmludGVuZG8=',
        Year: 2017,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 20022023,
        Name: 'QW5ncnkgQmlyZHM=',
        Developer: 'Um92aW8=',
        Year: 2009,
        Genre: 'Q2FzdWFs',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 9102022,
        Name: 'VGhlIExhc3Qgb2YgVXM=',
        Developer: 'TmF1Z2h0eSBEb2c=',
        Year: 2013,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 30122022,
        Name: 'U3RhcmRldyBWYWxsZXk=',
        Developer: 'Q29uY2VybmVkIEFwZQ==',
        Year: 2016,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 9062023,
        Name: 'TWFyaW8gS2FydCBEUw==',
        Developer: 'TmludGVuZG8=',
        Year: 2005,
        Genre: 'UmFjaW5n',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 26082023,
        Name: 'U3VwZXIgTW9ua2V5IEJhbGw=',
        Developer: 'QW11c2VtZW50IFZpc2lvbg==',
        Year: 2001,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 14112022,
        Name: 'U3VwZXIgTWFyaW8gU3Vuc2hpbmU=',
        Developer: 'TmludGVuZG8=',
        Year: 2002,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 24032023,
        Name: 'QWdlbnRzIG9mIE1heWhlbQ==',
        Developer: 'Vm9saXRpb24=',
        Year: 2017,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 27082023,
        Name: 'UmFyZSBSZXBsYXk=',
        Developer: 'UmFyZQ==',
        Year: 2015,
        Genre: 'Q29tcGlsYXRpb24=',
        Platforms: 'WGJveCBPbmU='
    },
    {
        Id: 6122022,
        Name: 'UGVyZmVjdCBEYXJr',
        Developer: 'UmFyZQ==',
        Year: 2000,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'TmludGVuZG8gNjQ='
    },
    {
        Id: 3122022,
        Name: 'Qmxhc3QgQ29ycHM=',
        Developer: 'UmFyZQ==',
        Year: 1997,
        Genre: 'QWN0aW9u',
        Platforms: 'TmludGVuZG8gNjQ='
    },
    {
        Id: 13042023,
        Name: 'QmF0dGxldG9hZHM=',
        Developer: 'UmFyZQ==',
        Year: 1991,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'TkVT'
    },
    {
        Id: 11092022,
        Name: 'U29uaWMgdGhlIEhlZGdlaG9n',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 1991,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 12092023,
        Name: 'R29sZGVuIEF4ZQ==',
        Developer: 'U2VnYQ==',
        Year: 1989,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 6122023,
        Name: 'QWx0ZXJlZCBCZWFzdA==',
        Developer: 'U2VnYQ==',
        Year: 1988,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 4092022,
        Name: 'U3RyZWV0cyBvZiBSYWdl',
        Developer: 'U2VnYQ==',
        Year: 1991,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 16122023,
        Name: 'RGVzdGlueQ==',
        Developer: 'QnVuZ2ll',
        Year: 2014,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25l'
    },
    {
        Id: 28102023,
        Name: 'RGlzbmV5IEluZmluaXR5',
        Developer: 'QXZhbGFuY2hlIFNvZnR3YXJl',
        Year: 2013,
        Genre: 'VG95cyB0byBMaWZl',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxXaWkgVQ=='
    },
    {
        Id: 6102023,
        Name: 'VW50aWwgRGF3bg==',
        Developer: 'U3VwZXJtYXNzaXZlIEdhbWVz',
        Year: 2015,
        Genre: 'SG9ycm9y',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 20102023,
        Name: 'UmVzaWRlbnQgRXZpbA==',
        Developer: 'Q2FwY29t',
        Year: 1996,
        Genre: 'SG9ycm9y',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 23042023,
        Name: 'U2lsZW50IEhpbGw=',
        Developer: 'VGVhbSBTaWxlbnQ=',
        Year: 1999,
        Genre: 'SG9ycm9y',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 30032023,
        Name: 'Q3Jhc2ggQmFuZGljb290',
        Developer: 'TmF1Z2h0eSBEb2c=',
        Year: 1996,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 8092023,
        Name: 'Q3Jhc2ggVGVhbSBSYWNpbmc=',
        Developer: 'TmF1Z2h0eSBEb2c=',
        Year: 1999,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 17042023,
        Name: 'Q3Jhc2ggQmFzaA==',
        Developer: 'RXVyb2NvbQ==',
        Year: 2000,
        Genre: 'UGFydHk=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 5012023,
        Name: 'TEVHTyBEaW1lbnNpb25z',
        Developer: 'VHJhdmVsbGVyJ3MgVGFsZXM=',
        Year: 2015,
        Genre: 'VG95cyB0byBMaWZl',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25lLFdpaSBV'
    },
    {
        Id: 20012023,
        Name: 'R2Vuc2hpbiBJbXBhY3Q=',
        Developer: 'bWlIb1lv',
        Year: 2020,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxpT1MsQW5kcm9pZA=='
    },
    {
        Id: 15112022,
        Name: 'RG9ua2V5IEtvbmc=',
        Developer: 'TmludGVuZG8=',
        Year: 1981,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'QXJjYWRlLE5FUw=='
    },
    {
        Id: 30112022,
        Name: 'RG9ua2V5IEtvbmcgQ291bnRyeQ==',
        Developer: 'UmFyZQ==',
        Year: 1994,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'U05FUw=='
    },
    {
        Id: 11072023,
        Name: 'RG9ua2V5IEtvbmcgTGFuZA==',
        Developer: 'UmFyZQ==',
        Year: 1995,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZSBCb3k='
    },
    {
        Id: 27052023,
        Name: 'RGlkZHkgS29uZyBSYWNpbmc=',
        Developer: 'UmFyZQ==',
        Year: 1997,
        Genre: 'TmludGVuZG8gNjQ=',
        Platforms: 'UmFjaW5n'
    },
    {
        Id: 3072023,
        Name: 'RG9ua2V5IEtvbmdh',
        Developer: 'TmFtY28=',
        Year: 2003,
        Genre: 'Umh5dGht',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 6022023,
        Name: 'RG9ua2V5IEtvbmcgQ291bnRyeSBSZXR1cm5z',
        Developer: 'UmV0cm8gU3R1ZGlvcw==',
        Year: 2010,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'V2lp'
    },
    {
        Id: 4112022,
        Name: 'TWV0cm9pZCBQcmltZQ==',
        Developer: 'UmV0cm8gU3R1ZGlvcw==',
        Year: 2002,
        Genre: 'Rmlyc3QgUGVyc29uIEFkdmVudHVyZQ==',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 30112023,
        Name: 'TWV0cm9pZA==',
        Developer: 'TmludGVuZG8=',
        Year: 1986,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'TkVT'
    },
    {
        Id: 16092023,
        Name: 'U3VwZXIgTWV0cm9pZA==',
        Developer: 'TmludGVuZG8=',
        Year: 1994,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'U05FUw=='
    },
    {
        Id: 2022023,
        Name: 'TWV0cm9pZCBGdXNpb24=',
        Developer: 'TmludGVuZG8=',
        Year: 2002,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'R2FtZSBCb3kgQWR2YW5jZQ=='
    },
    {
        Id: 11092023,
        Name: 'TWV0cm9pZCBEcmVhZA==',
        Developer: 'TWVyY3VyeVN0ZWFt',
        Year: 2021,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 25052023,
        Name: 'U3VwZXIgTWFyaW8gTGFuZA==',
        Developer: 'TmludGVuZG8=',
        Year: 1989,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZSBCb3k='
    },
    {
        Id: 10072023,
        Name: 'TWFyaW8gVGVubmlz',
        Developer: 'Q2FtZWxvdA==',
        Year: 2000,
        Genre: 'U3BvcnRz',
        Platforms: 'TmludGVuZG8gNjQ='
    },
    {
        Id: 10112023,
        Name: 'UGFSYXBwYSB0aGUgUmFwcGVy',
        Developer: 'TmFuYU9uLVNoYQ==',
        Year: 1996,
        Genre: 'Umh5dGht',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 27102023,
        Name: 'RGFuY2UgRGFuY2UgUmV2b2x1dGlvbg==',
        Developer: 'S29uYW1p',
        Year: 1998,
        Genre: 'Umh5dGht',
        Platforms: 'QXJjYWRlLFBsYXlTdGF0aW9u'
    },
    {
        Id: 2102023,
        Name: 'R3VpdGFyIEhlcm8=',
        Developer: 'SGFybW9uaXg=',
        Year: 2005,
        Genre: 'UnlodGht',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 7092022,
        Name: 'Um9jayBCYW5k',
        Developer: 'SGFybW9uaXg=',
        Year: 2007,
        Genre: 'Umh5dGht',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 25012023,
        Name: 'Um9ja3NtaXRo',
        Developer: 'VWJpc29mdA==',
        Year: 2011,
        Genre: 'Umh5dGht',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 24102022,
        Name: 'RGFuY2UgQ2VudHJhbA==',
        Developer: 'SGFybW9uaXg=',
        Year: 2010,
        Genre: 'Umh5dGht',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 1102022,
        Name: 'SnVzdCBEYW5jZQ==',
        Developer: 'VWJpc29mdA==',
        Year: 2009,
        Genre: 'Umh5dGht',
        Platforms: 'V2lp'
    },
    {
        Id: 21122022,
        Name: 'U3VwZXIgTWFyaW8gQWR2YW5jZQ==',
        Developer: 'TmludGVuZG8=',
        Year: 2001,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZSBCb3kgQWR2YW5jZQ=='
    },
    {
        Id: 13072023,
        Name: 'R29sZGVuIFN1bg==',
        Developer: 'Q2FtZWxvdA==',
        Year: 2001,
        Genre: 'UlBH',
        Platforms: 'R2FtZSBCb3kgQWR2YW5jZQ=='
    },
    {
        Id: 9092022,
        Name: 'U29uaWMgQWR2YW5jZQ==',
        Developer: 'RGltcHM=',
        Year: 2001,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZSBCb3kgQWR2YW5jZQ=='
    },
    {
        Id: 15062023,
        Name: 'R3JhbiBUdXJpc21v',
        Developer: 'UG9seXBob255IERpZ2l0YWw=',
        Year: 1997,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 19082023,
        Name: 'RmluYWwgRmFudGFzeSBWSUk=',
        Developer: 'U3F1YXJl',
        Year: 1997,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 13062023,
        Name: 'VG9tYiBSYWlkZXI=',
        Developer: 'Q29yZSBEZXNpZ24=',
        Year: 1996,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24sUEM='
    },
    {
        Id: 14092022,
        Name: 'TWV0YWwgR2VhciBTb2xpZA==',
        Developer: 'S29uYW1p',
        Year: 1998,
        Genre: 'U3RlYWx0aA==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 30042023,
        Name: 'U3B5cm8gdGhlIERyYWdvbg==',
        Developer: 'SW5zb21uaWFjIEdhbWVz',
        Year: 1998,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 2032023,
        Name: 'UmF5bWFu',
        Developer: 'VWJpc29mdA==',
        Year: 1995,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 24082022,
        Name: 'UmF5bWFuIE9yaWdpbnM=',
        Developer: 'VWJpc29mdA==',
        Year: 2011,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxXaWk='
    },
    {
        Id: 17032023,
        Name: 'UmF5bWFuIExlZ2VuZHM=',
        Developer: 'VWJpc29mdA==',
        Year: 2013,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MCxXaWkgVQ=='
    },
    {
        Id: 25082023,
        Name: 'U3Vuc2V0IE92ZXJkcml2ZQ==',
        Developer: 'SW5zb21uaWFjIEdhbWVz',
        Year: 2014,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'WGJveCBPbmU='
    },
    {
        Id: 22122023,
        Name: 'S2luZ2RvbSBIZWFydHM=',
        Developer: 'U3F1YXJl',
        Year: 2002,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 20052023,
        Name: 'R29kIG9mIFdhcg==',
        Developer: 'U2FudGEgTW9uaWNhIFN0dWRpbw==',
        Year: 2005,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 7072023,
        Name: 'QnVsbHk=',
        Developer: 'Um9ja3N0YXI=',
        Year: 2006,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 4072023,
        Name: 'VGhlIFNpbXM=',
        Developer: 'TWF4aXM=',
        Year: 2000,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 27112023,
        Name: 'TXlTaW1z',
        Developer: 'RUE=',
        Year: 2007,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'V2lpLE5pbnRlbmRvIERT'
    },
    {
        Id: 11122022,
        Name: 'Q3JhenkgVGF4aQ==',
        Developer: 'SGl0bWFrZXI=',
        Year: 1999,
        Genre: 'UmFjaW5n',
        Platforms: 'QXJjYWRlLERyZWFtY2FzdA=='
    },
    {
        Id: 7122022,
        Name: 'TW90b3JTdG9ybQ==',
        Developer: 'RXZvbHV0aW9uIFN0dWRpb3M=',
        Year: 2006,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 10112022,
        Name: 'SGVhdnkgUmFpbg==',
        Developer: 'UXVhbnRpYyBEcmVhbQ==',
        Year: 2010,
        Genre: 'SW50ZXJhY3RpdmU=',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 11102023,
        Name: 'TGl0dGxlQmlnUGxhbmV0',
        Developer: 'TWVkaWEgTW9sZWN1bGU=',
        Year: 2008,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 10012023,
        Name: 'SG9yaXpvbiBaZXJvIERhd24=',
        Developer: 'R3VlcmlsbGEgR2FtZXM=',
        Year: 2017,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 24082023,
        Name: 'S25hY2s=',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 2013,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 14062023,
        Name: 'QXBlIEVzY2FwZQ==',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 1999,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 23082023,
        Name: 'RHJpdmVjbHVi',
        Developer: 'RXZvbHV0aW9uIFN0dWRpb3M=',
        Year: 2014,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 27092023,
        Name: 'R2VhcnMgb2YgV2Fy',
        Developer: 'RXBpYyBHYW1lcw==',
        Year: 2006,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 11082023,
        Name: 'TEVHTyBSYWNlcnM=',
        Developer: 'SGlnaCBWb2x0YWdlIFNvZnR3YXJl',
        Year: 1999,
        Genre: 'UmFjaW5n',
        Platforms: 'UEMsUGxheVN0YXRpb24sTmludGVuZG8gNjQ='
    },
    {
        Id: 8102022,
        Name: 'V2lpIEZpdA==',
        Developer: 'TmludGVuZG8=',
        Year: 2007,
        Genre: 'Rml0bmVzcw==',
        Platforms: 'V2lp'
    },
    {
        Id: 31122022,
        Name: 'UG9wc3RhciBNYWtlcg==',
        Developer: 'VGVxdWUgU29mdHdhcmU=',
        Year: 2001,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 16072023,
        Name: 'TW9ydGFsIEtvbWJhdA==',
        Developer: 'TWlkd2F5',
        Year: 1992,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'QXJjYWRlLFNORVMsU2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 14072023,
        Name: 'RG9vbQ==',
        Developer: 'aWQgU29mdHdhcmU=',
        Year: 1993,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 13022023,
        Name: 'SGFsbyBDb21iYXQgRXZvbHZlZA==',
        Developer: 'QnVuZ2ll',
        Year: 2001,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'WGJveA=='
    },
    {
        Id: 12102022,
        Name: 'UG9uZw==',
        Developer: 'QXRhcmk=',
        Year: 1972,
        Genre: 'U3BvcnRz',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 23032023,
        Name: 'R3JhbmQgVGhlZnQgQXV0byBW',
        Developer: 'Um9ja3N0YXIgTm9ydGg=',
        Year: 2013,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 25072023,
        Name: 'Qm9yZGVybGFuZHM=',
        Developer: 'R2VhcmJveCBTb2Z0d2FyZQ==',
        Year: 2009,
        Genre: 'QWN0aW9u',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 14012023,
        Name: 'WGVub2JsYWRlIENocm9uaWNsZXM=',
        Developer: 'TW9ub2xpdGggU29mdA==',
        Year: 2010,
        Genre: 'UlBH',
        Platforms: 'V2lp'
    },
    {
        Id: 26012023,
        Name: 'QW5pbWFsIENyb3NzaW5n',
        Developer: 'TmludGVuZG8=',
        Year: 2001,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 27092022,
        Name: 'TGVtbWluZ3M=',
        Developer: 'RE1BIERlc2lnbg==',
        Year: 1991,
        Genre: 'UHV6emxl',
        Platforms: 'QW1pZ2E='
    },
    {
        Id: 22082023,
        Name: 'TXlzdA==',
        Developer: 'Q3lhbiBJbmM=',
        Year: 1993,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'TWFjaW50b3No'
    },
    {
        Id: 1102023,
        Name: 'TWluZWNyYWZ0',
        Developer: 'TW9qYW5n',
        Year: 2013,
        Genre: 'U2FuZGJveA==',
        Platforms: 'UEM='
    },
    {
        Id: 1122023,
        Name: 'QnJhaWQ=',
        Developer: 'TnVtYmVyIE5vbmU=',
        Year: 2008,
        Genre: 'UHV6emxl',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 19032023,
        Name: 'QWR2YW5jZSBXYXJz',
        Developer: 'SW50ZWxsaWdlbnQgU3lzdGVtcw==',
        Year: 2001,
        Genre: 'VHVybi1CYXNlZA==',
        Platforms: 'R2FtZSBCb3kgQWR2YW5jZWQ='
    },
    {
        Id: 27122022,
        Name: 'U3VwZXIgTWVhdCBCb3k=',
        Developer: 'VGVhbSBNZWF0',
        Year: 2010,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 15082023,
        Name: 'TEVHTyBJc2xhbmQ=',
        Developer: 'TWluZHNjYXBl',
        Year: 1997,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEM='
    },
    {
        Id: 15092023,
        Name: 'VGVycmFyaWE=',
        Developer: 'UmUtTG9naWM=',
        Year: 2001,
        Genre: 'U2FuZGJveA==',
        Platforms: 'UEM='
    },
    {
        Id: 22032023,
        Name: 'TWFyaW8gS2FydCBXaWk=',
        Developer: 'TmludGVuZG8=',
        Year: 2008,
        Genre: 'UmFjaW5n',
        Platforms: 'V2lp'
    },
    {
        Id: 17072023,
        Name: 'UmVkIERlYWQgUmVkZW1wdGlvbg==',
        Developer: 'Um9ja3N0YXIgU2FuIERpZWdv',
        Year: 2010,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 9042023,
        Name: 'VGhlIE9yZWdvbiBUcmFpbA==',
        Developer: 'RG9uIFJhd2l0c2NoLCBCaWxsIEhlaW5lbWFubiwgUGF1bCBEaWxsZW5iZXJnZXI=',
        Year: 1971,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'SFAgMjEwMA=='
    },
    {
        Id: 26092022,
        Name: 'RHVjayBIdW50',
        Developer: 'TmludGVuZG8=',
        Year: 1984,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'TkVT'
    },
    {
        Id: 23012023,
        Name: 'T3ZlcndhdGNo',
        Developer: 'QmxpenphcmQ=',
        Year: 2016,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 19102023,
        Name: 'SWNv',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 2001,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 21042023,
        Name: 'R3JpbSBGYW5kYWdv',
        Developer: 'THVjYXNBcnRz',
        Year: 1998,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEM='
    },
    {
        Id: 17112023,
        Name: 'Rmxhc2hiYWNr',
        Developer: 'RGVscGhpbmUgU29mdHdhcmU=',
        Year: 1992,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'QW1pZ2E='
    },
    {
        Id: 17052023,
        Name: 'U2ltQ2l0eQ==',
        Developer: 'TWF4aXM=',
        Year: 1989,
        Genre: 'Q2l0eSBCdWlsZGluZw==',
        Platforms: 'QW1pZ2EsTWFjaW50b3No'
    },
    {
        Id: 27072023,
        Name: 'S2luZWN0IFNwb3J0cw==',
        Developer: 'UmFyZQ==',
        Year: 2010,
        Genre: 'U3BvcnRz',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 8122022,
        Name: 'TGVhZ3VlIG9mIExlZ2VuZHM=',
        Developer: 'UmlvdCBHYW1lcw==',
        Year: 2009,
        Genre: 'TU9CQQ==',
        Platforms: 'UEM='
    },
    {
        Id: 17122023,
        Name: 'SW5zaWRl',
        Developer: 'UGxheWRlYWQ=',
        Year: 2016,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 25062023,
        Name: 'VGl0YW5mYWxs',
        Developer: 'UmVzcGF3biBFbnRlcnRhaW5tZW50',
        Year: 2014,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'WGJveCBPbmUsUEM='
    },
    {
        Id: 11122023,
        Name: 'RGFyayBTb3Vscw==',
        Developer: 'RnJvbVNvZnR3YXJl',
        Year: 2011,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 14122023,
        Name: 'Rm9ydG5pdGU=',
        Developer: 'RXBpYyBHYW1lcw==',
        Year: 2017,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 11112023,
        Name: 'VGhlIFdpdG5lc3M=',
        Developer: 'VGhla2xhLCBJbmM=',
        Year: 2016,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 29052023,
        Name: 'Sm91cm5leQ==',
        Developer: 'VGhhdGdhbWVjb21wYW55',
        Year: 2012,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 2102022,
        Name: 'QXBleCBMZWdlbmRz',
        Developer: 'UmVzcGF3biBFbnRlcnRhaW5tZW50',
        Year: 2019,
        Genre: 'QmF0dGxlIFJveWFsZQ==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 23112023,
        Name: 'SG9sbG93IEtuaWdodA==',
        Developer: 'VGVhbSBDaGVycnk=',
        Year: 2017,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEM='
    },
    {
        Id: 30082023,
        Name: 'RWFydGhCb3VuZA==',
        Developer: 'QXBlIEluYy4gJiBIQUwgTGFib3JhdG9yeQ==',
        Year: 1994,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 12032023,
        Name: 'V29ybGQgb2YgV2FyY3JhZnQ=',
        Developer: 'QmxpenphcmQgRW50ZXJ0YWlubWVudA==',
        Year: 2004,
        Genre: 'TU1P',
        Platforms: 'UEM='
    },
    {
        Id: 31102023,
        Name: 'Q2hyb25vIFRyaWdnZXI=',
        Developer: 'U3F1YXJl',
        Year: 1995,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 11062023,
        Name: 'UG9ydGFs',
        Developer: 'VmFsdmU=',
        Year: 2007,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 22112023,
        Name: 'QmlvU2hvY2s=',
        Developer: 'Mks=',
        Year: 2007,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'WGJveCAzNjAsUEM='
    },
    {
        Id: 31082023,
        Name: 'SGFkZXM=',
        Developer: 'U3VwZXJnaWFudCBHYW1lcw==',
        Year: 2020,
        Genre: 'Um9ndWVsaWtl',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 6052023,
        Name: 'RmV6',
        Developer: 'UG9seXRyb24gQ29ycG9yYXRpb24=',
        Year: 2012,
        Genre: 'UHV6emxl',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 30092023,
        Name: 'Qmlvc2hvY2sgSW5maW5pdGU=',
        Developer: 'SXJyYXRpb25hbCBHYW1lcw==',
        Year: 2013,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 19022023,
        Name: 'UGlsb3R3aW5ncw==',
        Developer: 'TmludGVuZG8=',
        Year: 1990,
        Genre: 'RmxpZ2h0IFNpbXVsYXRpb24=',
        Platforms: 'U05FUw=='
    },
    {
        Id: 17122022,
        Name: 'UGlsb3R3aW5ncyBSZXNvcnQ=',
        Developer: 'TmludGVuZG8=',
        Year: 2011,
        Genre: 'RmxpZ2h0IFNpbXVsYXRpb24=',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 12012023,
        Name: 'TWV0cm9pZCBQcmltZSBIdW50ZXJz',
        Developer: 'TmludGVuZG8=',
        Year: 2006,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 28102022,
        Name: 'UmVkIFN0ZWVs',
        Developer: 'VWJpc29mdA==',
        Year: 2006,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'V2lp'
    },
    {
        Id: 17102023,
        Name: 'TmludGVuZG9ncw==',
        Developer: 'TmludGVuZG8=',
        Year: 2005,
        Genre: 'UGV0IFNpbXVsYXRpb24=',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 13122022,
        Name: 'QmlnIEJyYWluIEFjYWRlbXk=',
        Developer: 'TmludGVuZG8=',
        Year: 2005,
        Genre: 'UHV6emxl',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 7102023,
        Name: 'Q29va2luZyBNYW1h',
        Developer: 'T2ZmaWNlIENyZWF0ZQ==',
        Year: 2006,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 14102022,
        Name: 'QXJ0IEFjYWRlbXk=',
        Developer: 'SGVhZHN0cm9uZyBHYW1lcw==',
        Year: 2010,
        Genre: 'QXJ0',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 22082022,
        Name: 'U2NyaWJibGVuYXV0cw==',
        Developer: 'NXRoIENlbGw=',
        Year: 2009,
        Genre: 'UHV6emxl',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 4052023,
        Name: 'RWxpdGUgQmVhdCBBZ2VudHM=',
        Developer: 'aU5pUw==',
        Year: 2006,
        Genre: 'TXVzaWM=',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 22092022,
        Name: 'VG9tb2RhY2hpIExpZmU=',
        Developer: 'TmludGVuZG8=',
        Year: 2013,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 20112022,
        Name: 'UmluZyBGaXQgQWR2ZW50dXJl',
        Developer: 'TmludGVuZG8=',
        Year: 2019,
        Genre: 'Rml0bmVzcw==',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 16022023,
        Name: 'U3BsYXRvb24=',
        Developer: 'TmludGVuZG8=',
        Year: 2015,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 29092022,
        Name: 'U3VwZXIgTWFyaW8gTWFrZXI=',
        Developer: 'TmludGVuZG8=',
        Year: 2015,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 7112023,
        Name: 'TmludGVuZG8gTGFuZA==',
        Developer: 'TmludGVuZG8=',
        Year: 2012,
        Genre: 'UGFydHk=',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 13012023,
        Name: 'UGlrbWlu',
        Developer: 'TmludGVuZG8=',
        Year: 2001,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 12062023,
        Name: 'SHlydWxlIFdhcnJpb3Jz',
        Developer: 'T21lZ2EgRm9yY2UgJiBUZWFtIE5pbmph',
        Year: 2014,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 6112023,
        Name: 'QW1vbmcgVXM=',
        Developer: 'SW5uZXJzbG90aA==',
        Year: 2018,
        Genre: 'UGFydHk=',
        Platforms: 'UEMsaU9TLEFuZHJvaWQ='
    },
    {
        Id: 11052023,
        Name: 'QXJtcw==',
        Developer: 'TmludGVuZG8=',
        Year: 2017,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 8112023,
        Name: 'T2N0b3BhdGggVHJhdmVsZXI=',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2018,
        Genre: 'UlBH',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 4112023,
        Name: 'SGFsbyBSZWFjaA==',
        Developer: 'QnVuZ2ll',
        Year: 2010,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 1032023,
        Name: 'U2FpbnRzIFJvdw==',
        Developer: 'Vm9saXRpb24=',
        Year: 2006,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 6082023,
        Name: 'RGVhZCBSaXNpbmc=',
        Developer: 'Q2FwY29t',
        Year: 2006,
        Genre: 'SG9ycm9y',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 4062023,
        Name: 'TWFzcyBFZmZlY3Q=',
        Developer: 'QmlvV2FyZQ==',
        Year: 2007,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 10022023,
        Name: 'Q3JhY2tkb3du',
        Developer: 'UmVhbHRpbWUgV29ybGRz',
        Year: 2007,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 24102023,
        Name: 'UGVyZmVjdCBEYXJrIFplcm8=',
        Developer: 'UmFyZQ==',
        Year: 2005,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 18102022,
        Name: 'SGFsbyBXYXJz',
        Developer: 'RW5zZW1ibGUgU3R1ZGlvcw==',
        Year: 2009,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 23022023,
        Name: 'VHJpYWxzIEV2b2x1dGlvbg==',
        Developer: 'UmVkTHlueA==',
        Year: 2012,
        Genre: 'UmFjaW5n',
        Platforms: 'WGJveCAzNjAsUEM='
    },
    {
        Id: 21102022,
        Name: 'RHVrZSBOdWtlbSBGb3JldmVy',
        Developer: 'M0QgUmVhbG1z',
        Year: 2011,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 16042023,
        Name: 'RHJhZ29uIEFnZSBPcmlnaW5z',
        Developer: 'QmlvV2FyZQ==',
        Year: 2009,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 25082022,
        Name: 'TGltYm8=',
        Developer: 'UGxheWRlYWQ=',
        Year: 2010,
        Genre: 'UHV6emxl',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 17092022,
        Name: 'VHJpYWxzIEhE',
        Developer: 'UmVkTHlueA==',
        Year: 2009,
        Genre: 'UmFjaW5n',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 23122023,
        Name: 'U29uaWMgSGVyb2Vz',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 2003,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'R2FtZUN1YmUsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 1122022,
        Name: 'Q3Jhc2ggVHdpbnNhbml0eQ==',
        Developer: 'VHJhdmVsbGVyJ3MgVGFsZXM=',
        Year: 2004,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 23082022,
        Name: 'TEVHTyBDaXR5IFVuZGVyY292ZXI=',
        Developer: 'VHJhdmVsbGVyJ3MgVGFsZXM=',
        Year: 2013,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 6032023,
        Name: 'TWFyaW8gS2FydCBUb3Vy',
        Developer: 'RGVOQQ==',
        Year: 2019,
        Genre: 'UmFjaW5n',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 18042023,
        Name: 'TG9zdFdpbmRz',
        Developer: 'RnJvbnRpZXIgRGV2ZWxvcG1lbnRz',
        Year: 2008,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'V2lp'
    },
    {
        Id: 8082023,
        Name: 'V2lpIFBsYXk=',
        Developer: 'TmludGVuZG8=',
        Year: 2006,
        Genre: 'UGFydHk=',
        Platforms: 'V2lp'
    },
    {
        Id: 19042023,
        Name: 'UmF5bWFuIFJhdmluZyBSYWJiaWRz',
        Developer: 'VWJpc29mdA==',
        Year: 2006,
        Genre: 'UGFydHk=',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94IDM2MCxXaWk='
    },
    {
        Id: 21062023,
        Name: 'TW9uc3RlciBIdW50ZXIgVHJp',
        Developer: 'Q2FwY29t',
        Year: 2009,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'V2lp'
    },
    {
        Id: 24122023,
        Name: 'R3JhbmQgVGhlZnQgQXV0bw==',
        Developer: 'RE1BIERlc2lnbg==',
        Year: 1997,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24='
    },
    {
        Id: 21032023,
        Name: 'RGlnaW1vbiBXb3JsZA==',
        Developer: 'QmFuZGFp',
        Year: 1999,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 25102023,
        Name: 'RGlnaW1vbiBSdW1ibGUgQXJlbmE=',
        Developer: 'QmFuZGFp',
        Year: 2001,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 23072023,
        Name: 'VG9tYiBSYWlkZXIgQ2hyb25pY2xlcw==',
        Developer: 'Q29yZSBEZXNpZ24=',
        Year: 2000,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24sUEMsRHJlYW1jYXN0'
    },
    {
        Id: 21112023,
        Name: 'QnVybm91dCBSZXZlbmdl',
        Developer: 'Q3JpdGVyaW9uIEdhbWVz',
        Year: 2005,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 17092023,
        Name: 'Q3V0IHRoZSBSb3Bl',
        Developer: 'WmVwdG9MYWI=',
        Year: 2010,
        Genre: 'UHV6emxl',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 23092022,
        Name: 'RmxhcHB5IEJpcmQ=',
        Developer: 'RG9uZyBOZ3V5ZW4=',
        Year: 2013,
        Genre: 'Q2FzdWFs',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 23122022,
        Name: 'VGVtcGxlIFJ1bg==',
        Developer: 'SW1hbmdpIFN0dWRpb3M=',
        Year: 2011,
        Genre: 'Q2FzdWFs',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 6072023,
        Name: 'Wm9tYmk=',
        Developer: 'VWJpc29mdA==',
        Year: 1986,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'QW1zdHJhZCBDUEM='
    },
    {
        Id: 3092022,
        Name: 'Wm9tYmlV',
        Developer: 'VWJpc29mdA==',
        Year: 2012,
        Genre: 'SG9ycm9y',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 19122023,
        Name: 'U2thdGViYWxs',
        Developer: 'VWJpc29mdA==',
        Year: 1989,
        Genre: 'U3BvcnRz',
        Platforms: 'QW1zdHJhZCBDUEMsQXRhcmkgU1QsQ29tbW9kb3JlIDY0'
    },
    {
        Id: 5102022,
        Name: 'Qm9tYmVybWFu',
        Developer: 'SHVkc29uIFNvZnQ=',
        Year: 1990,
        Genre: 'QWN0aW8=',
        Platforms: 'VHVyYm9HcmFmeC0xNixBbWlnYSxBdGFyaSBTVA=='
    },
    {
        Id: 2112022,
        Name: 'QmFsbG9vbiBGaWdodA==',
        Developer: 'TmludGVuZG8gJiBIQUwgTGFib3JhdG9yeQ==',
        Year: 1985,
        Genre: 'QWN0aW9u',
        Platforms: 'TkVT'
    },
    {
        Id: 14122022,
        Name: 'RXhjaXRlYmlrZQ==',
        Developer: 'TmludGVuZG8=',
        Year: 1984,
        Genre: 'UmFjaW5n',
        Platforms: 'TkVT'
    },
    {
        Id: 27012023,
        Name: 'SWNlIENsaW1iZXI=',
        Developer: 'TmludGVuZG8=',
        Year: 1985,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TkVT'
    },
    {
        Id: 19052023,
        Name: 'U3RhckNyYWZ0',
        Developer: 'QmxpenphcmQgRW50ZXJ0YWlubWVudA==',
        Year: 1998,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'UEM='
    },
    {
        Id: 9122023,
        Name: 'TWlzc2lsZSBDb21tYW5k',
        Developer: 'QXRhcmk=',
        Year: 1980,
        Genre: 'QXJjYWRl',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 26062023,
        Name: 'U25pcGVyIEVsaXRl',
        Developer: 'UmViZWxsaW9uIERldmVsb3BtZW50cw==',
        Year: 2005,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 22102022,
        Name: 'R3JhbmRpYQ==',
        Developer: 'R2FtZSBBcnRz',
        Year: 1997,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24sU2VnYSBTYXR1cm4='
    },
    {
        Id: 10032023,
        Name: 'RmluYWwgRmlnaHQ=',
        Developer: 'Q2FwY29t',
        Year: 1989,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 28032023,
        Name: 'V29ybXM=',
        Developer: 'VGVhbTE3',
        Year: 1995,
        Genre: 'VGFjdGljYWw=',
        Platforms: 'QW1pZ2E='
    },
    {
        Id: 5122022,
        Name: 'V29ybXMgQXJtYWdlZGRvbg==',
        Developer: 'VGVhbTE3',
        Year: 1999,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'UEM='
    },
    {
        Id: 21102023,
        Name: 'V29ybXMgUnVtYmxl',
        Developer: 'VGVhbTE3',
        Year: 2020,
        Genre: 'QWN0aW9u',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1'
    },
    {
        Id: 1062023,
        Name: 'V29ybXMgV29ybGQgUGFydHk=',
        Developer: 'VGVhbTE3',
        Year: 2001,
        Genre: 'VGFjdGljYWw=',
        Platforms: 'UEMsUGxheVN0YXRpb24sRHJlYW1jYXN0'
    },
    {
        Id: 21022023,
        Name: 'VGhlIEVzY2FwaXN0cw==',
        Developer: 'TW91bGR5IFRvb2YgU3R1ZGlvcw==',
        Year: 2015,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IDM2MCxYYm94IE9uZQ=='
    },
    {
        Id: 16012023,
        Name: 'T3ZlcmNvb2tlZA==',
        Developer: 'R2hvc3QgVG93biBHYW1lcw==',
        Year: 2016,
        Genre: 'UGFydHk=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 4022023,
        Name: 'TXkgVGltZSBhdCBQb3J0aWE=',
        Developer: 'UGF0aGVhIEdhbWVz',
        Year: 2019,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 7092023,
        Name: 'TW92aW5nIE91dA==',
        Developer: 'RGV2TSBHYW1lcyAmIFNNRyBTdHVkaW8=',
        Year: 2020,
        Genre: 'UGFydHk=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 20042023,
        Name: 'RXNjYXBlIGZyb20gTW9ua2V5IElzbGFuZA==',
        Developer: 'THVjYXNBcnRz',
        Year: 2001,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEM='
    },
    {
        Id: 24012023,
        Name: 'VGFsZXMgb2YgTW9ua2V5IElzbGFuZA==',
        Developer: 'VGVsbHRhbGUgR2FtZXM=',
        Year: 2009,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsV2lpLFBsYXlTdGF0aW9uIDM='
    },
    {
        Id: 18112023,
        Name: 'WElJSQ==',
        Developer: 'VWJpc29mdA==',
        Year: 2003,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsUGxheVN0YXRpb24gMixHYW1lQ3ViZSxYYm94'
    },
    {
        Id: 3022023,
        Name: 'UHJpbmNlIG9mIFBlcnNpYQ==',
        Developer: 'Sm9yZGFuIE1lY2huZXI=',
        Year: 1989,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'QXBwbGUgSUk='
    },
    {
        Id: 5092023,
        Name: 'RmFyIENyeQ==',
        Developer: 'Q3J5dGVr',
        Year: 2004,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 5042023,
        Name: 'RmFyIENyeSBQcmltYWw=',
        Developer: 'VWJpc29mdA==',
        Year: 2016,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 4102022,
        Name: 'VGhlIFdhbGtpbmcgRGVhZA==',
        Developer: 'VGVsbHRhbGUgR2FtZXM=',
        Year: 2012,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 21072023,
        Name: 'VGhlIFdvbGYgQW1vbmcgVXM=',
        Developer: 'VGVsbHRhbGUgR2Ftc2U=',
        Year: 2013,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 2082023,
        Name: 'VGhlIEphY2tib3ggUGFydHkgUGFjaw==',
        Developer: 'SmFja2JveCBHYW1lcw==',
        Year: 2014,
        Genre: 'UGFydHk=',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggT25lLFBD'
    },
    {
        Id: 24042023,
        Name: 'Q2FsbCBvZiBKdWFyZXo=',
        Developer: 'VGVjaGxhbmQ=',
        Year: 2006,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 3092023,
        Name: 'Tm8gTW9yZSBIZXJvZXM=',
        Developer: 'R3Jhc3Nob3BwZXIgTWFudWZhY3R1cmU=',
        Year: 2007,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'V2lp'
    },
    {
        Id: 18102023,
        Name: 'SGF6ZQ==',
        Developer: 'RnJlZSBSYWRpY2FsIERlc2lnbg==',
        Year: 2008,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 28012023,
        Name: 'U2hhdW4gV2hpdGUgU2thdGVib2FyZGluZw==',
        Developer: 'VWJpc29mdA==',
        Year: 2010,
        Genre: 'U3BvcnRz',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxXaWk='
    },
    {
        Id: 25022023,
        Name: 'Q2hpbGQgb2YgRWRlbg==',
        Developer: 'USBFbnRlcnRhaW5tZW50',
        Year: 2011,
        Genre: 'TXVzaWM=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 10042023,
        Name: 'Q3ViaWMgTmluamE=',
        Developer: 'QVEgSW50ZXJhY3RpdmU=',
        Year: 2011,
        Genre: 'UHV6emxl',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 28062023,
        Name: 'Um9ja2V0IExlYWd1ZQ==',
        Developer: 'UHN5b25peA==',
        Year: 2015,
        Genre: 'U3BvcnRz',
        Platforms: 'UEMsUGxheVN0YXRpb24gNA=='
    },
    {
        Id: 14082023,
        Name: 'VHJpYWxzIEZ1c2lvbg==',
        Developer: 'UmVkIEx5bng=',
        Year: 2014,
        Genre: 'UmFjaW5n',
        Platforms: 'UEMsUGxheXN0YXRpb24gNCxYYm94IDM2MCxYYm94IE9uZQ=='
    },
    {
        Id: 8112022,
        Name: 'Q2hpbGQgb2YgTGlnaHQ=',
        Developer: 'VWJpc29mdA==',
        Year: 2014,
        Genre: 'UlBH',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25lLFdpaSBV'
    },
    {
        Id: 3112023,
        Name: 'V2F0Y2ggRG9ncw==',
        Developer: 'VWJpc29mdA==',
        Year: 2014,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25l'
    },
    {
        Id: 16082023,
        Name: 'VGhlIENyZXc=',
        Developer: 'VWJpc29mdA==',
        Year: 2014,
        Genre: 'UmFjaW5n',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxYYm94IDM2MA=='
    },
    {
        Id: 25102022,
        Name: 'R3JvdyBIb21l',
        Developer: 'VWJpc29mdA==',
        Year: 2015,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gNA=='
    },
    {
        Id: 20112023,
        Name: 'U3RlZXA=',
        Developer: 'VWJpc29mdA==',
        Year: 2016,
        Genre: 'U3BvcnRz',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 24072023,
        Name: 'Rm9yIEhvbm9y',
        Developer: 'VWJpc29mdA==',
        Year: 2017,
        Genre: 'QWN0aW9u',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 16102022,
        Name: 'QnJhd2xoYWxsYQ==',
        Developer: 'Qmx1ZSBNYW1tb3RoIEdhbWVz',
        Year: 2018,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 23092023,
        Name: 'SW1tb3J0YWxzIEZlbnl4IFJpc2luZw==',
        Developer: 'VWJpc29mdA==',
        Year: 2020,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LE5pbnRlbmRvIFN3aXRjaCxYYm94IE9uZSxYYm94IFNlcmllcyBY'
    },
    {
        Id: 13102022,
        Name: 'UmlkZXJzIFJlcHVibGlj',
        Developer: 'VWJpc29mdA==',
        Year: 2021,
        Genre: 'U3BvcnRz',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLFhib3ggU2VyaWVzIFg='
    },
    {
        Id: 15092022,
        Name: 'RmluYWwgRmFudGFzeQ==',
        Developer: 'U3F1YXJl',
        Year: 1987,
        Genre: 'UlBH',
        Platforms: 'TkVT'
    },
    {
        Id: 12052023,
        Name: 'U2VjcmV0IG9mIE1hbmE=',
        Developer: 'U3F1YXJl',
        Year: 1993,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 31072023,
        Name: 'U3VwZXIgTWFyaW8gUlBH',
        Developer: 'U3F1YXJl',
        Year: 1996,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 22092023,
        Name: 'WGVub2dlYXJz',
        Developer: 'U3F1YXJl',
        Year: 1998,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 14052023,
        Name: 'Q2hvY29ibyBSYWNpbmc=',
        Developer: 'U3F1YXJl',
        Year: 1999,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 12092022,
        Name: 'TGVnZW5kIG9mIE1hbmE=',
        Developer: 'U3F1YXJl',
        Year: 1999,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 9112022,
        Name: 'QmFsYW4gV29uZGVyd29ybGQ=',
        Developer: 'U3F1YXJl',
        Year: 2021,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLFhib3ggU2VyaWVzIFgsTmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 3102023,
        Name: 'VHJpYWxzIG9mIE1hbmE=',
        Developer: 'U3F1YXJl',
        Year: 1995,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 1112022,
        Name: 'Q2hyb25vIENyb3Nz',
        Developer: 'U3F1YXJl',
        Year: 1999,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 24052023,
        Name: 'VGhlIFdvcmxkIEVuZHMgd2l0aCBZb3U=',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2007,
        Genre: 'UlBH',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 29012023,
        Name: 'TWFyaW8gU3BvcnRzIE1peA==',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2010,
        Genre: 'U3BvcnRz',
        Platforms: 'V2lp'
    },
    {
        Id: 4102023,
        Name: 'UXVhbnR1bSBDb251bmRydW0=',
        Developer: 'QWlydGlnaHQgR2FtZXM=',
        Year: 2012,
        Genre: 'UHV6emxl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 12112022,
        Name: 'QnJhdmVseSBEZWZhdWx0',
        Developer: 'U2lsaWNvbiBTdHVkaW8=',
        Year: 2012,
        Genre: 'UlBH',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 26072023,
        Name: 'TWFyYmxlIE1hZG5lc3M=',
        Developer: 'TWFyayBDZXJueQ==',
        Year: 1984,
        Genre: 'UGxhdGZvcm0=',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 26112023,
        Name: 'UG9wdWxvdXM=',
        Developer: 'QnVsbGZyb2cgUHJvZHVjdGlvbnM=',
        Year: 1989,
        Genre: 'R29k',
        Platforms: 'QW1pZ2EsQXRhcmkgU3QsU2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 29082023,
        Name: 'U2hhcSBGdQ==',
        Developer: 'RGVscGhpbmUgU29mdHdhcmU=',
        Year: 1994,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKSxTTkVT'
    },
    {
        Id: 11022023,
        Name: 'RGlhYmxv',
        Developer: 'QmxpenphcmQgRW50ZXJ0YWlubWVudA==',
        Year: 1997,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEM='
    },
    {
        Id: 2112023,
        Name: 'TWVkYWwgb2YgSG9ub3I=',
        Developer: 'RHJlYW1Xb3JrcyBJbnRlcmFjdGl2ZQ==',
        Year: 1999,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 26032023,
        Name: 'U1NY',
        Developer: 'RUE=',
        Year: 2000,
        Genre: 'U3BvcnRz',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 16092022,
        Name: 'Q2VsIERhbWFnZQ==',
        Developer: 'UHNldWRvIEludGVyYWN0aXZl',
        Year: 2001,
        Genre: 'QWN0aW9u',
        Platforms: 'WGJveA=='
    },
    {
        Id: 18122023,
        Name: 'RklGQSBTdHJlZXQ=',
        Developer: 'RUE=',
        Year: 2005,
        Genre: 'U3BvcnRz',
        Platforms: 'R2FtZUN1YmUsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 5102023,
        Name: 'QnVybm91dCBMZWdlbmRz',
        Developer: 'Q3JpdGVyaW9uIEdhbWVz',
        Year: 2005,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gUG9ydGFibGUsTmludGVuZG8gRFM='
    },
    {
        Id: 9032023,
        Name: 'Qm9vZ2ll',
        Developer: 'RUE=',
        Year: 2007,
        Genre: 'TXVzaWM=',
        Platforms: 'V2lpLFBsYXlTdGF0aW9uIDIsTmludGVuZG8gRFM='
    },
    {
        Id: 10062023,
        Name: 'U2thdGU=',
        Developer: 'RUE=',
        Year: 2007,
        Genre: 'U3BvcnRz',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 19072023,
        Name: 'Q3J5c2lz',
        Developer: 'Q3J5dGVr',
        Year: 2007,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 20122023,
        Name: 'QnVybm91dCBQYXJhZGlzZQ==',
        Developer: 'Q3JpdGVyaW9uIEdhbWVz',
        Year: 2008,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 25032023,
        Name: 'Qm9vbSBCbG94',
        Developer: 'RUE=',
        Year: 2008,
        Genre: 'UHV6emxl',
        Platforms: 'V2lp'
    },
    {
        Id: 11102022,
        Name: 'U3BvcmU=',
        Developer: 'TWF4aXM=',
        Year: 2008,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 24112022,
        Name: 'S2F0YW1hcmkgRGFtYWN5',
        Developer: 'TmFtY28=',
        Year: 2004,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 8052023,
        Name: 'U2hhbg==',
        Developer: 'S2xlaSBFbnRlcnRhaW5tZW50',
        Year: 2010,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 20062023,
        Name: 'RGVhZCBTcGFjZQ==',
        Developer: 'RUE=',
        Year: 2008,
        Genre: 'SG9ycm9y',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 19102022,
        Name: 'QnVsbGV0c3Rvcm0=',
        Developer: 'UGVvcGxlIENhbiBGbHk=',
        Year: 2011,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 18112022,
        Name: 'VGhlbWUgUGFyaw==',
        Developer: 'QnVsbGZyb2cgUHJvZHVjdGlvbnM=',
        Year: 1994,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEMsQW1pZ2EsM0RP'
    },
    {
        Id: 7082023,
        Name: 'RnVzZQ==',
        Developer: 'SW5zb21uaWFjIEdhbWVz',
        Year: 2013,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 3122023,
        Name: 'TmVlZCBmb3IgU3BlZWQgUml2YWxz',
        Developer: 'R2hvc3QgR2FtZXM=',
        Year: 2013,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFBD'
    },
    {
        Id: 6012023,
        Name: 'UGVnZ2xl',
        Developer: 'UG9wQ2FwIEdhbWVz',
        Year: 2007,
        Genre: 'UHV6emxl',
        Platforms: 'UEM='
    },
    {
        Id: 8012023,
        Name: 'QmF0dGxlZmllbGQgSGFyZGxpbmU=',
        Developer: 'VmlzY2VyYWwgR2FtZXM=',
        Year: 2015,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25lLFBD'
    },
    {
        Id: 30072023,
        Name: 'TmVlZCBmb3IgU3BlZWQ=',
        Developer: 'R2hvc3QgR2FtZXM=',
        Year: 2015,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 1052023,
        Name: 'U3RhciBXYXJzIEJhdHRsZWZyb250',
        Developer: 'RUE=',
        Year: 2015,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxXaW5kb3dz'
    },
    {
        Id: 5072023,
        Name: 'VW5yYXZlbA==',
        Developer: 'Q29sZHdvb2QgSW50ZXJhY3RpdmU=',
        Year: 2016,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 10122022,
        Name: 'QSBXYXkgT3V0',
        Developer: 'SGF6ZWxpZ2h0IFN0dWRpb3M=',
        Year: 2018,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 20122022,
        Name: 'QW50aGVt',
        Developer: 'QmlvV2FyZQ==',
        Year: 2019,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 25112023,
        Name: 'SXQgVGFrZXMgVHdv',
        Developer: 'SGF6ZWxpZ2h0IFN0dWRpb3M=',
        Year: 2021,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLFhib3ggU2VyaWVzIFgsUEM='
    },
    {
        Id: 15012023,
        Name: 'U3RhciBGb3g=',
        Developer: 'TmludGVuZG8=',
        Year: 1993,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'U05FUw=='
    },
    {
        Id: 30102022,
        Name: 'U3RhciBGb3ggQWR2ZW50dXJlcw==',
        Developer: 'UmFyZQ==',
        Year: 2002,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'R2FtZUN1YmU='
    },
    {
        Id: 21112022,
        Name: 'U3RhciBGb3ggWmVybw==',
        Developer: 'TmludGVuZG8=',
        Year: 2016,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'V2lpIFU='
    },
    {
        Id: 14022023,
        Name: 'S2lkIEljYXJ1cw==',
        Developer: 'TmludGVuZG8=',
        Year: 1986,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TkVT'
    },
    {
        Id: 28072023,
        Name: 'TWFkV29ybGQ=',
        Developer: 'UGxhdGludW1HYW1lcw==',
        Year: 2009,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'V2lp'
    },
    {
        Id: 7032023,
        Name: 'QmF5b25ldHRh',
        Developer: 'UGxhdGludW1HYW1lcw==',
        Year: 2009,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 13082023,
        Name: 'VmFucXVpc2g=',
        Developer: 'UGxhdGludW1HYW1lcw==',
        Year: 2010,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 19112022,
        Name: 'QXN0cmFsIENoYWlu',
        Developer: 'UGxhdGludW1HYW1lcw==',
        Year: 2019,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 29112023,
        Name: 'V2F2ZSBSYWNl',
        Developer: 'TmludGVuZG8=',
        Year: 1992,
        Genre: 'UmFjaW5n',
        Platforms: 'R2FtZSBCb3k='
    },
    {
        Id: 15042023,
        Name: 'Q2VsZXN0ZQ==',
        Developer: 'TWFkZHkgVGhvcnNvbiAmIE5vZWwgQmVycnk=',
        Year: 2018,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 31082022,
        Name: 'VW5wYWNraW5n',
        Developer: 'V2l0Y2ggQmVhbQ==',
        Year: 2021,
        Genre: 'UHV6emxl',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLE5pbnRlbmRvIFN3aXRjaA=='
    },
    {
        Id: 22022023,
        Name: 'VW50aXRsZWQgR29vc2UgR2FtZQ==',
        Developer: 'SG91c2UgSG91c2U=',
        Year: 2019,
        Genre: 'UHV6emxl',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNoLFhib3ggT25lLFBsYXlTdGF0aW9uIDQ='
    },
    {
        Id: 17012023,
        Name: 'QmFiYSBJcyBZb3U=',
        Developer: 'QXJ2aSBUZWlrYXJp',
        Year: 2019,
        Genre: 'UHV6emxl',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 5052023,
        Name: 'T3hlbmZyZWU=',
        Developer: 'TmlnaHQgU2Nob29sIFN0dWRpbw==',
        Year: 2016,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsWGJveCBPbmU='
    },
    {
        Id: 10082023,
        Name: 'U29uaWMgTWFuaWE=',
        Developer: 'Q2hyaXN0aWFuIFdoaXRlaGVhZA==',
        Year: 2017,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2gsUEM='
    },
    {
        Id: 7122023,
        Name: 'SGFybW9LbmlnaHQ=',
        Developer: 'R2FtZSBGcmVhaw==',
        Year: 2012,
        Genre: 'Umh5dGht',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 12022023,
        Name: 'TGl0dGxlIFRvd24gSGVybw==',
        Developer: 'R2FtZSBGcmVhaw==',
        Year: 2019,
        Genre: 'UlBH',
        Platforms: 'TmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 25122022,
        Name: 'U2hpbiBNZWdhbWkgVGVuc2Vp',
        Developer: 'QXRsdXM=',
        Year: 1992,
        Genre: 'UlBH',
        Platforms: 'U05FUw=='
    },
    {
        Id: 21092023,
        Name: 'Q2F0aGVyaW5l',
        Developer: 'QXRsdXM=',
        Year: 2011,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 29062023,
        Name: 'QmVhdXRpZnVsIEthdGFtYXJp',
        Developer: 'TmFtY28gQmFuZGFpIEdhbWVz',
        Year: 2007,
        Genre: 'UHV6emxl',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 8102023,
        Name: 'Q29kZSBWZWlu',
        Developer: 'QmFuZGFpIE5hbWNvIFN0dWRpb3M=',
        Year: 2019,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 2062023,
        Name: 'RWxkZW4gUmluZw==',
        Developer: 'RnJvbVNvZnR3YXJl',
        Year: 2022,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLFhib3ggU2VyaWVzIFgsUEM='
    },
    {
        Id: 24112023,
        Name: 'R28gVmFjYXRpb24=',
        Developer: 'TmFtY28gQmFuZGFpIEdhbWVz',
        Year: 2011,
        Genre: 'UGFydHk=',
        Platforms: 'V2lp'
    },
    {
        Id: 4082023,
        Name: 'R2FsYWdh',
        Developer: 'TmFtY28=',
        Year: 1981,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 8062023,
        Name: 'UHJvamVjdCBDQVJT',
        Developer: 'U2xpZ2h0bHkgTWFkIFN0dWRpb3M=',
        Year: 2015,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 17022023,
        Name: 'UmlkZ2UgUmFjZXI=',
        Developer: 'TmFtY28=',
        Year: 1994,
        Genre: 'UmFjaW5n',
        Platforms: 'QXJjYWRlLFBsYXlTdGF0aW9u'
    },
    {
        Id: 7022023,
        Name: 'U291bGNhbGlidXI=',
        Developer: 'UHJvamVjdCBTb3U=',
        Year: 1998,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'QXJjYWRlLERyZWFtY2FzdA=='
    },
    {
        Id: 28122023,
        Name: 'RGV2aWwgTWF5IENyeQ==',
        Developer: 'Q2FwY29t',
        Year: 2001,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 30012023,
        Name: 'RGlubyBDcmlzaXM=',
        Developer: 'Q2FwY29t',
        Year: 1999,
        Genre: 'SG9ycm9y',
        Platforms: 'UGxheVN0YXRpb24sRHJlYW1jYXN0LFBD'
    },
    {
        Id: 11112022,
        Name: 'Vmlld3RpZnVsIEpvZQ==',
        Developer: 'Q2FwY29t',
        Year: 2003,
        Genre: 'QmVhdCAnZW0gdXA=',
        Platforms: 'R2FtZUN1YmUsUGxheVN0YXRpb24gMg=='
    },
    {
        Id: 27112022,
        Name: 'Q2FzdGxldmFuaWE=',
        Developer: 'S29uYW1p',
        Year: 1986,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TkVT'
    },
    {
        Id: 28092022,
        Name: 'RGVhZCBvciBBbGl2ZQ==',
        Developer: 'VGVhbSBOaW5qYQ==',
        Year: 1996,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'QXJjYWRlLFNlZ2EgU2F0dXJuLFBsYXlTdGF0aW9u'
    },
    {
        Id: 18022023,
        Name: 'TmlvaA==',
        Developer: 'VGVhbSBOaW5qYQ==',
        Year: 2017,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNCxQQw=='
    },
    {
        Id: 15032023,
        Name: 'TmluamEgR2FpZGVu',
        Developer: 'VGVhbSBOaW5qYQ==',
        Year: 2004,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'WGJveA=='
    },
    {
        Id: 13112023,
        Name: 'RG9yaXRvcyBDcmFzaCBDb3Vyc2U=',
        Developer: 'V2FuYWtvIEdhbWVz',
        Year: 2010,
        Genre: 'UGxhdGZvcm1pbmc=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 19112023,
        Name: 'QWxpZW4gSG9taW5pZA==',
        Developer: 'VGhlIEJlaGVtb3Ro',
        Year: 2005,
        Genre: 'UnVuIGFuZCBHdW4=',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94LEdhbWVDdWJl'
    },
    {
        Id: 10052023,
        Name: 'QmxhY2s=',
        Developer: 'Q3JpdGVyaW9uIEdhbWVz',
        Year: 2006,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 26092023,
        Name: 'Qmxvb2RSYXluZQ==',
        Developer: 'VGVybWluYWwgUmVhbGl0eQ==',
        Year: 2002,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94LEdhbWVDdWJlLFBD'
    },
    {
        Id: 11032023,
        Name: 'Q3Jhc2ggTml0cm8gS2FydA==',
        Developer: 'VmljYXJpb3VzIFZpc2lvbnM=',
        Year: 2003,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94LEdhbWVDdWJlLEdhbWUgQm95IEFkdmFuY2U='
    },
    {
        Id: 30102023,
        Name: 'RW50ZXIgdGhlIE1hdHJpeA==',
        Developer: 'U2hpbnkgRW50ZXJ0YWlubWVudA==',
        Year: 2003,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'R2FtZUN1YmUsUGxheVN0YXRpb24gMixYYm94LFBD'
    },
    {
        Id: 28022023,
        Name: 'RmFibGU=',
        Developer: 'QmlnIEJsdWUgQm94IFN0dWRpb3M=',
        Year: 2004,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'WGJveCxQQw=='
    },
    {
        Id: 21092022,
        Name: 'RnVzaW9uIEZyZW56eQ==',
        Developer: 'QmxpdHogR2FtZXM=',
        Year: 2001,
        Genre: 'UGFydHk=',
        Platforms: 'WGJveA=='
    },
    {
        Id: 27042023,
        Name: 'SmFkZSBFbXBpcmU=',
        Developer: 'QmlvV2FyZQ==',
        Year: 2005,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'WGJveA=='
    },
    {
        Id: 7062023,
        Name: 'SnVzdCBDYXVzZQ==',
        Developer: 'QXZhbGFuY2hlIFN0dWRpb3M=',
        Year: 2006,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94LFhib3ggMzYwLFBD'
    },
    {
        Id: 26052023,
        Name: 'U29uaWMgUmlkZXJz',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 2006,
        Genre: 'UmFjaW5n',
        Platforms: 'R2FtZUN1YmUsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 27102022,
        Name: 'UHJvamVjdCBHb3RoYW0gUmFjaW5n',
        Developer: 'Qml6YXJyZSBDcmVhdGlvbnM=',
        Year: 2001,
        Genre: 'UmFjaW5n',
        Platforms: 'WGJveA=='
    },
    {
        Id: 3082023,
        Name: 'TG9kZSBSdW5uZXI=',
        Developer: 'RG91Z2xhcyBFLiBTbWl0aA==',
        Year: 1983,
        Genre: 'UHV6emxl',
        Platforms: 'QXBwbGUgSUksQ29tbW9kb3JlIDY0LEF0YXJpIDgwMA=='
    },
    {
        Id: 28092023,
        Name: 'U3B5IEh1bnRlcg==',
        Developer: 'QmFsbHkgTWlkd2F5',
        Year: 1983,
        Genre: 'QWN0aW9u',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 13052023,
        Name: 'TWFuaWFjIE1hbnNpb24=',
        Developer: 'THVjYXNmaWxtIEdhbWVz',
        Year: 1987,
        Genre: 'UG9pbnQgYW5kIENsaWNr',
        Platforms: 'QXBwbGUgSUksQ29tbW9kb3JlIDY0'
    },
    {
        Id: 24062023,
        Name: 'U3RhclRyb3BpY3M=',
        Developer: 'TmludGVuZG8=',
        Year: 1990,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'TkVT'
    },
    {
        Id: 28112023,
        Name: 'R3JhZGl1cw==',
        Developer: 'S29uYW1p',
        Year: 1985,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 3032023,
        Name: 'TWljcm8gTWFjaGluZXM=',
        Developer: 'Q29kZW1hc3RlcnM=',
        Year: 1991,
        Genre: 'UmFjaW5n',
        Platforms: 'TkVT'
    },
    {
        Id: 26042023,
        Name: 'TWVnYSBNYW4=',
        Developer: 'Q2FwY29t',
        Year: 1987,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TkVT'
    },
    {
        Id: 28112022,
        Name: 'QnViYmxlIEJvYmJsZQ==',
        Developer: 'VGFpdG8=',
        Year: 1986,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 6092023,
        Name: 'Uml2ZXIgQ2l0eSBSYW5zb20=',
        Developer: 'VGVjaG5vcyBKYXBhbg==',
        Year: 1989,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'TkVT'
    },
    {
        Id: 5022023,
        Name: 'Q29udHJh',
        Developer: 'S29uYW1p',
        Year: 1987,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 26082022,
        Name: 'QmlvbmljIENvbW1hbmRv',
        Developer: 'Q2FwY29t',
        Year: 1987,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 26022023,
        Name: 'VGhlIExlZ2VuZCBvZiBaZWxkYQ==',
        Developer: 'TmludGVuZG8=',
        Year: 1986,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'TkVT'
    },
    {
        Id: 14092023,
        Name: 'U3Vuc2V0IFJpZGVycw==',
        Developer: 'S29uYW1p',
        Year: 1991,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 2122023,
        Name: 'U3VwZXIgU3RhciBXYXJz',
        Developer: 'THVjYXNBcnRz',
        Year: 1992,
        Genre: 'QWN0aW9u',
        Platforms: 'U05FUw=='
    },
    {
        Id: 9102023,
        Name: 'S2lsbGVyIEluc3RpbmN0',
        Developer: 'UmFyZQ==',
        Year: 1995,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'U05FUw=='
    },
    {
        Id: 2122022,
        Name: 'U2hhZG93cnVu',
        Developer: 'Qmx1ZVNreSBTb2Z0d2FyZQ==',
        Year: 1994,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 7102022,
        Name: 'SW50ZXJuYXRpb25hbCBTdXBlcnN0YXIgU29jY2Vy',
        Developer: 'S29uYW1p',
        Year: 1994,
        Genre: 'U3BvcnRz',
        Platforms: 'U05FUw=='
    },
    {
        Id: 19012023,
        Name: 'RWFydGh3b3JtIEppbQ==',
        Developer: 'U2hpbnkgRW50ZXJ0YWlubWVudA==',
        Year: 1994,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKSxTTkVT'
    },
    {
        Id: 10102023,
        Name: 'U3VwZXIgQm9tYmVybWFu',
        Developer: 'SHVkc29uIFNvZnQ=',
        Year: 1993,
        Genre: 'UGFydHk=',
        Platforms: 'U05FUw=='
    },
    {
        Id: 15102022,
        Name: 'SGFydmVzdCBNb29u',
        Developer: 'QW1jY3Vz',
        Year: 1996,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'U05FUw=='
    },
    {
        Id: 9112023,
        Name: 'TkJBIEphbQ==',
        Developer: 'TWlkd2F5',
        Year: 1993,
        Genre: 'U3BvcnRz',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 1092022,
        Name: 'TWFyaW8gUGFpbnQ=',
        Developer: 'TmludGVuZG8=',
        Year: 1992,
        Genre: 'Q2FzdWFs',
        Platforms: 'U05FUw=='
    },
    {
        Id: 25042023,
        Name: 'U3lwaG9uIEZpbHRlcg==',
        Developer: 'RWlkZXRpYw==',
        Year: 1999,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 15112023,
        Name: 'RmluYWwgRmFudGFzeSBUYWN0aWNz',
        Developer: 'U3F1YXJl',
        Year: 1997,
        Genre: 'VGFjdGljYWw=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 3112022,
        Name: 'RHJpdmVy',
        Developer: 'UmVmbGVjdGlvbnMgSW50ZXJhY3RpdmU=',
        Year: 1999,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 20092022,
        Name: 'VGVra2Vu',
        Developer: 'TmFtY28=',
        Year: 1994,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 21012023,
        Name: 'VGltZSBDcmlzaXM=',
        Developer: 'TmFtbw==',
        Year: 1995,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 7112022,
        Name: 'TWVnYSBNYW4gTGVnZW5kcw==',
        Developer: 'Q2FwY29t',
        Year: 1997,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 3042023,
        Name: 'VGhlIExlZ2VuZCBvZiBEcmFnb29u',
        Developer: 'SmFwYW4gU3R1ZGk=',
        Year: 1999,
        Genre: 'UlBH',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 18092022,
        Name: 'U2hhZG93IG9mIHRoZSBDb2xvc3N1cw==',
        Developer: 'VGVhbSBJY28=',
        Year: 2005,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 28052023,
        Name: 'U1NYIFRyaWNreQ==',
        Developer: 'RUE=',
        Year: 2001,
        Genre: 'U3BvcnRz',
        Platforms: 'UGxheVN0YXRpb24gMixHYW1lQ3ViZSxYYm94'
    },
    {
        Id: 16112023,
        Name: 'T2thbWk=',
        Developer: 'Q2xvdmVyIFN0dWRpbw==',
        Year: 2006,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 13032023,
        Name: 'TWF4IFBheW5l',
        Developer: 'UmVtZWR5IEVudGVydGFpbm1lbnQ=',
        Year: 2002,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 31102022,
        Name: 'RGV1cyBFeA==',
        Developer: 'SW9uIFN0b3Jt',
        Year: 2000,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEM='
    },
    {
        Id: 29072023,
        Name: 'VmFsa3lyaWEgQ2hyb25pY2xlcw==',
        Developer: 'U2VnYQ==',
        Year: 2008,
        Genre: 'VGFjdGljYWw=',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 27062023,
        Name: 'RGlzaG9ub3JlZA==',
        Developer: 'QXJrYW5lIFN0dWRpb3M=',
        Year: 2012,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 26102022,
        Name: 'SW5mYW1vdXM=',
        Developer: 'U3Vja2VyIFB1bmNo',
        Year: 2009,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 21122023,
        Name: 'R2hvc3Qgb2YgVHN1c2hpbWE=',
        Developer: 'U3Vja2VyIFB1bmNo',
        Year: 2020,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 20092023,
        Name: 'SW5mYW1vdXMgU2Vjb25kIFNvbg==',
        Developer: 'U3Vja2VyIFB1bmNo',
        Year: 2014,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 13092022,
        Name: 'SW5mYW1vdXMgRmlyc3QgTGlnaHQ=',
        Developer: 'U3Vja2VyIFB1bmNo',
        Year: 2014,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 23062023,
        Name: 'RGFya3NpZGVycw==',
        Developer: 'VmlnaWwgR2FtZXM=',
        Year: 2010,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 18092023,
        Name: 'U2xlZXBpbmcgRG9ncw==',
        Developer: 'VW5pdGVkIEZyb250IEdhbWVz',
        Year: 2012,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 20032023,
        Name: 'SGVhdmVubHkgU3dvcmQ=',
        Developer: 'TmluamEgVGhlb3J5',
        Year: 2007,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 29102022,
        Name: 'U3BlbHVua3k=',
        Developer: 'RGVyZWsgWXU=',
        Year: 2012,
        Genre: 'UGxhdGZvbWVy',
        Platforms: 'WGJveCAzNjAsUGxheVN0YXRpb24gMw=='
    },
    {
        Id: 7012023,
        Name: 'Qmxvb2Rib3JuZQ==',
        Developer: 'RnJvbVNvZnR3YXJl',
        Year: 2015,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 16052023,
        Name: 'SGl0bWFu',
        Developer: 'SU8gSW50ZXJhY3RpdmU=',
        Year: 2016,
        Genre: 'U3RlYWx0aA==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 30062023,
        Name: 'SGl0bWFuIEdv',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2014,
        Genre: 'UHV6emxl',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 21052023,
        Name: 'TGFyYSBDcm9mdCBHbw==',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2015,
        Genre: 'UHV6emxl',
        Platforms: 'aU9TLEFuZHJvaWQsUEM='
    },
    {
        Id: 9072023,
        Name: 'VGhlIExhc3QgR3VhcmRpYW4=',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 2016,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 14042023,
        Name: 'TG9jb1JvY28=',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 2006,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gUG9ydGFibGU='
    },
    {
        Id: 17102022,
        Name: 'UGF0YXBvbg==',
        Developer: 'UHlyYW1pZA==',
        Year: 2007,
        Genre: 'Umh5dGht',
        Platforms: 'UGxheVN0YXRpb24gUG9ydGFibGU='
    },
    {
        Id: 29082022,
        Name: 'R3Jhdml0eSBSdXNo',
        Developer: 'SmFwYW4gU3R1ZGlv',
        Year: 2012,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gVml0YQ=='
    },
    {
        Id: 9082023,
        Name: 'RGF5cyBHb25l',
        Developer: 'QmVuZCBTdHVkaW8=',
        Year: 2019,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 22052023,
        Name: 'VGV0cmlzIEVmZmVjdA==',
        Developer: 'TW9uc3RhcnMgJiBSZXNvbmFpcg==',
        Year: 2018,
        Genre: 'UHV6emxl',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 1072023,
        Name: 'RHJlYW1z',
        Developer: 'TWVkaWEgTW9sZWN1bGU=',
        Year: 2020,
        Genre: 'Q3JlYXRpdmU=',
        Platforms: 'UGxheVN0YXRpb24gNA=='
    },
    {
        Id: 2092022,
        Name: 'VGVhcmF3YXk=',
        Developer: 'TWVkaWEgTW9sZWN1bGU=',
        Year: 2013,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UGxheVN0YXRpb24gVml0YQ=='
    },
    {
        Id: 8032023,
        Name: 'RHJhZ29uIFF1ZXN0IEJ1aWxkZXJz',
        Developer: 'U3F1YXJlIEVuaXg=',
        Year: 2016,
        Genre: 'U2FuZGJveA==',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFBsYXlTdGF0aW9uIFZpdGE='
    },
    {
        Id: 17082023,
        Name: 'SG90bGluZSBNaWFtaQ==',
        Developer: 'RGVubmF0b24gR2FtZXM=',
        Year: 2012,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'UEM='
    },
    {
        Id: 28082023,
        Name: 'RG9vbSBFdGVybmFs',
        Developer: 'aWQgU29mdHdhcmU=',
        Year: 2020,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 3052023,
        Name: 'QSBTaG9ydCBIaWtl',
        Developer: 'QWRhbSBSb2JpbnNvbi1ZdQ==',
        Year: 2019,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEM='
    },
    {
        Id: 8022023,
        Name: 'Q2l0aWVzIFNreWxpbmVz',
        Developer: 'Q29sb3NzYWwgT3JkZXI=',
        Year: 2015,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 17062023,
        Name: 'QmF0bWFuIEFya2hhbSBBc3lsdW0=',
        Developer: 'Um9ja3N0ZWFkeQ==',
        Year: 2009,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 18062023,
        Name: 'QmF0bWFuIEFya2hhbSBDaXR5',
        Developer: 'Um9ja3N0ZWFkeQ==',
        Year: 2011,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 1012023,
        Name: 'T3V0ZXIgV2lsZA==',
        Developer: 'TW9iaXVzIERpZ2l0YWw=',
        Year: 2019,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gNCxYYm94IE9uZSxQQw=='
    },
    {
        Id: 5062023,
        Name: 'QmFzdGlvbg==',
        Developer: 'U3VwZXJnaWFudCBHYW1lcw==',
        Year: 2011,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'WGJveCAzNjAsUEM='
    },
    {
        Id: 31032023,
        Name: 'VGhlIEJpbmRpbmcgb2YgSXNhYWM=',
        Developer: 'RWRtdW5kIE1jTWlsbGVuICYgRmxvcmlhbiBIaW1zbA==',
        Year: 2011,
        Genre: 'Um9ndWVsaWtl',
        Platforms: 'UEM='
    },
    {
        Id: 18052023,
        Name: 'Q2FzdGxlIENyYXNoZXJz',
        Developer: 'VGhlIEJlaGVtb3Ro',
        Year: 2008,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 13112022,
        Name: 'RGVhZCBJc2xhbmQ=',
        Developer: 'VGVjaGxhbmQ=',
        Year: 2011,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MCxQQw=='
    },
    {
        Id: 2012023,
        Name: 'R29hdCBTaW11bGF0b3I=',
        Developer: 'Q29mZmVlIFN0YWluIFN0dWRpb3M=',
        Year: 2014,
        Genre: 'QWN0aW9u',
        Platforms: 'UEM='
    },
    {
        Id: 10102022,
        Name: 'QSBIYXQgaW4gVGltZQ==',
        Developer: 'R2VhcnMgZm9yIEJyZWFrZmFzdA==',
        Year: 2017,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 19062023,
        Name: 'UGxhbmV0IENvYXN0ZXI=',
        Developer: 'RnJvbnRpZXIgRGV2ZWxvcG1lbnRz',
        Year: 2016,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 20082023,
        Name: 'UGxhbmV0IFpvbw==',
        Developer: 'RnJvbnRpZXIgRGV2ZWxvcG1lbnRz',
        Year: 2019,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 18082023,
        Name: 'Um9sbGVyQ29hc3RlciBUeWNvb24=',
        Developer: 'Q2hyaXMgU2F3eWVy',
        Year: 1999,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 26122023,
        Name: 'Wm9vIFR5Y29vbg==',
        Developer: 'Qmx1ZSBGYW5nIEdhbWVz',
        Year: 2001,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 25112022,
        Name: 'RWxpdGU=',
        Developer: 'RGF2aWQgQnJhYmVuICYgSWFuIEJlbGw=',
        Year: 1984,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'QkJDIE1pY3JvLEFjb3JuIEVsZWN0cm9u'
    },
    {
        Id: 9012023,
        Name: 'RWxpdGUgRGFuZ2Vyb3Vz',
        Developer: 'RnJvbnRpZXIgRGV2ZWxvcG1lbnRz',
        Year: 2014,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 9022023,
        Name: 'SnVyYXNzaWMgV29ybGQgRXZvbHV0aW9u',
        Developer: 'RnJvbnRpZXIgRGV2ZWxvcG1lbnRz',
        Year: 2018,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 25092023,
        Name: 'U3VwZXIgSGV4YWdvbg==',
        Developer: 'VGVycnkgQ2F2YW5hZ2g=',
        Year: 2012,
        Genre: 'QWN0aW9u',
        Platforms: 'UEMsaU9T'
    },
    {
        Id: 19122022,
        Name: 'RGljZXkgRHVuZ2VvbnM=',
        Developer: 'VGVycnkgQ2F2YW5hZ2g=',
        Year: 2019,
        Genre: 'Um9ndWVsaWtl',
        Platforms: 'UEM='
    },
    {
        Id: 5032023,
        Name: 'VlZWVlZW',
        Developer: 'VGVycnkgQ2F2YW5hZ2g=',
        Year: 2010,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEM='
    },
    {
        Id: 12042023,
        Name: 'UVdPUA==',
        Developer: 'QmVubmV0dCBGb2RkeQ==',
        Year: 2008,
        Genre: 'U3BvcnRz',
        Platforms: 'UEM='
    },
    {
        Id: 6042023,
        Name: 'QXBlIE91dA==',
        Developer: 'R2FiZSBDdXp6aWxsbw==',
        Year: 2019,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 14112023,
        Name: 'VGVtdGVt',
        Developer: 'Q3JlbWE=',
        Year: 2020,
        Genre: 'TU1PUlBH',
        Platforms: 'UEMsUGxheVN0YXRpb24gNQ=='
    },
    {
        Id: 8072023,
        Name: 'Um9jayBCYW5kIEJsaXR6',
        Developer: 'SGFybW9uaXg=',
        Year: 2012,
        Genre: 'Umh5dGht',
        Platforms: 'WGJveCAzNjAsUGxheVN0YXRpb24gMw=='
    },
    {
        Id: 3102022,
        Name: 'QmF0dGxlYmxvY2sgVGhlYXRlcg==',
        Developer: 'VGhlIEJlaGVtb3Ro',
        Year: 2013,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsWGJveCAzNjA='
    },
    {
        Id: 22112022,
        Name: 'VGFsZXMgZnJvbSB0aGUgQm9yZGVybGFuZHM=',
        Developer: 'VGVsbHRhbGUgR2FtZXM=',
        Year: 2014,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25l'
    },
    {
        Id: 28082022,
        Name: 'QSBLaW5nZG9tIGZvciBLZWZsaW5ncw==',
        Developer: 'TmluamFCZWU=',
        Year: 2008,
        Genre: 'Q2l0eSBCdWlsZGluZw==',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 10122023,
        Name: 'QmVqZXdlbGVk',
        Developer: 'UG9wQ2FwIEdhbWVz',
        Year: 2001,
        Genre: 'UHV6emxl',
        Platforms: 'UEM='
    },
    {
        Id: 11012023,
        Name: 'RnJ1aXQgTmluamE=',
        Developer: 'SGFsZmJyaWNr',
        Year: 2010,
        Genre: 'Q2FzdWFs',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 12102023,
        Name: 'VGhlIE1hdw==',
        Developer: 'VHdpc3RlZCBQaXhlbA==',
        Year: 2009,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'WGJveCAzNjAsUEM='
    },
    {
        Id: 18122022,
        Name: 'Sm9lIERhbmdlcg==',
        Developer: 'SGVsbG8gR2FtZXM=',
        Year: 2010,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 30122023,
        Name: 'RmVlZGluZyBGcmVuenk=',
        Developer: 'U3Byb3V0IEdhbWVz',
        Year: 2004,
        Genre: 'QXJjYWRl',
        Platforms: 'UEM='
    },
    {
        Id: 3012023,
        Name: 'Qm9vbSBCb29tIFJvY2tldA==',
        Developer: 'Qml6YXJyZSBDcmVhdGlvbnM=',
        Year: 2007,
        Genre: 'Umh5dGht',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 4092023,
        Name: 'TG9jb0N5Y2xl',
        Developer: 'VHdpc3RlZCBQaXhlbA==',
        Year: 2013,
        Genre: 'UmFjaW5n',
        Platforms: 'WGJveCBPbmU='
    },
    {
        Id: 20072023,
        Name: 'SHlkcm9waG9iaWE=',
        Developer: 'RGFyayBFbmVyZ3kgRGlnaXRhbA==',
        Year: 2010,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'WGJveCAzNjAsUGxheVN0YXRpb24gMyxQQw=='
    },
    {
        Id: 26112022,
        Name: 'RmFibGUgSGVyb2Vz',
        Developer: 'TGlvbmhlYWQgU3R1ZGlvcw==',
        Year: 2012,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'WGJveCAzNjA='
    },
    {
        Id: 24022023,
        Name: 'RXBpYyBNaWNrZXk=',
        Developer: 'SnVuY3Rpb24gUG9pbnQ=',
        Year: 2010,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'V2lp'
    },
    {
        Id: 4122023,
        Name: 'RnJvZ2dlcg==',
        Developer: 'S29uYW1p',
        Year: 1981,
        Genre: 'QWN0aW8=',
        Platforms: 'QXJhZGU='
    },
    {
        Id: 9052023,
        Name: 'SmV0IFNldCBSYWRpbw==',
        Developer: 'U21pbGViaXQ=',
        Year: 2000,
        Genre: 'QWN0aW9u',
        Platforms: 'RHJlYW1jYXN0'
    },
    {
        Id: 7052023,
        Name: 'U2FtYmEgZGUgQW1pZ28=',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 2000,
        Genre: 'Umh5dGht',
        Platforms: 'RHJlYW1jYXN0LEFyY2FkZQ=='
    },
    {
        Id: 15102023,
        Name: 'U2VhbWFu',
        Developer: 'Vml2YXJpdW0gJiBKZWxseXZpc2lvbg==',
        Year: 1999,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'RHJlYW1jYXN0'
    },
    {
        Id: 15052023,
        Name: 'U2hlbm11ZQ==',
        Developer: 'U2VnYQ==',
        Year: 1999,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'RHJlYW1jYXN0'
    },
    {
        Id: 13092023,
        Name: 'U29uaWMgQWR2ZW50dXJl',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 1998,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'RHJlYW1jYXN0'
    },
    {
        Id: 29102023,
        Name: 'VW5yZWFsIFRvdXJuYW1lbnQ=',
        Developer: 'RXBpYyBHYW1lcw==',
        Year: 1999,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 16112022,
        Name: 'Q29udHJhc3Q=',
        Developer: 'Q29tcHVsc2lvbiBHYW1lcw==',
        Year: 2013,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFBD'
    },
    {
        Id: 14102023,
        Name: 'SmV3ZWwgUXVlc3Q=',
        Developer: 'aVdpbg==',
        Year: 2004,
        Genre: 'UHV6emxl',
        Platforms: 'UEM='
    },
    {
        Id: 16032023,
        Name: 'U2hpbm9iaQ==',
        Developer: 'U2VnYQ==',
        Year: 1987,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 14032023,
        Name: 'RWNjbyB0aGUgRG9scGhpbg==',
        Developer: 'Tm92b3RyYWRl',
        Year: 1992,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'U2VnYSBNZWdhIERyaXZlIChHZW5lc2lzKQ=='
    },
    {
        Id: 4042023,
        Name: 'VHdpc3RlZCBNZXRhbA==',
        Developer: 'U2luZ2xlVHJhYw==',
        Year: 1995,
        Genre: 'RmlnaHRpbmc=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 21082023,
        Name: 'S2lsbHpvbmU=',
        Developer: 'R3VlcnJpbGxhIEdhbWVz',
        Year: 2004,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 4122022,
        Name: 'RmF0IFByaW5jZXNz',
        Developer: 'VGl0YW4gU3R1ZGlvcw==',
        Year: 2009,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 1092023,
        Name: 'TWVkaUV2aWw=',
        Developer: 'U0NFIENhbWJyaWRnZSBTdHVkaW8=',
        Year: 1998,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24='
    },
    {
        Id: 29122022,
        Name: 'RGlnaW1vbiBXb3JsZCBEUw==',
        Developer: 'QkVD',
        Year: 2006,
        Genre: 'UlBH',
        Platforms: 'TmludGVuZG8gRFM='
    },
    {
        Id: 22122022,
        Name: 'R3JpZA==',
        Developer: 'Q29kZW1hc3RlcnM=',
        Year: 2019,
        Genre: 'UmFjaW5n',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 6102022,
        Name: 'RGlydCBSYWxseQ==',
        Developer: 'Q29kZW1hc3RlcnM=',
        Year: 2015,
        Genre: 'UmFjaW5n',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 18032023,
        Name: 'UGhhbnRhc3kgU3RhciBPbmxpbmU=',
        Developer: 'U29uaWMgVGVhbQ==',
        Year: 2000,
        Genre: 'UlBH',
        Platforms: 'RHJlYW1jYXN0'
    },
    {
        Id: 23112022,
        Name: 'UHJvIEV2b2x1dGlvbiBTb2NjZXI=',
        Developer: 'S29uYW1p',
        Year: 2001,
        Genre: 'U3BvcnRz',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 22102023,
        Name: 'RGVhZCBieSBEYXlsaWdodA==',
        Developer: 'QmVoYXZpb3VyIEludGVyYWN0aXZl',
        Year: 2016,
        Genre: 'SG9ycm9y',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 2092023,
        Name: 'RW50ZXIgdGhlIEd1bmdlb24=',
        Developer: 'RG9kZ2UgUm9s',
        Year: 2016,
        Genre: 'Um9ndWVsaWtl',
        Platforms: 'UGxheVN0YXRpb24gNCxQQw=='
    },
    {
        Id: 22072023,
        Name: 'U3RlYW1Xb3JsZCBEaWc=',
        Developer: 'SW1hZ2UgJiBGb3Jt',
        Year: 2013,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'TmludGVuZG8gM0RTLFBD'
    },
    {
        Id: 4012023,
        Name: 'U3RlYW1Xb3JsZCBIZWlzdA==',
        Developer: 'SW1hZ2UgJiBGb3Jt',
        Year: 2015,
        Genre: 'VGFjdGljYWw=',
        Platforms: 'TmludGVuZG8gM0RT'
    },
    {
        Id: 11042023,
        Name: 'UGhhc21vcGhvYmlh',
        Developer: 'S2luZXRpYyBHYW1lcw==',
        Year: 2020,
        Genre: 'SG9ycm9y',
        Platforms: 'UEM='
    },
    {
        Id: 29032023,
        Name: 'QmVhdCBTYWJlcg==',
        Developer: 'QmVhdCBHYW1lcw==',
        Year: 2019,
        Genre: 'Umh5dGht',
        Platforms: 'UGxheVN0YXRpb24gNCxQQw=='
    },
    {
        Id: 23102022,
        Name: 'U3VwZXJob3Q=',
        Developer: 'U3VwZXJob3QgVGVhbQ==',
        Year: 2016,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsWGJveCBPbmU='
    },
    {
        Id: 28122022,
        Name: 'RG91YmxlIERyYWdv',
        Developer: 'VGVjaG5vcyBKYXBhbg==',
        Year: 1987,
        Genre: 'QmVhdCAnZW0gVXA=',
        Platforms: 'QXJjYWRl'
    },
    {
        Id: 30052023,
        Name: 'TWV0YWwgU2x1Zw==',
        Developer: 'TmF6Y2E=',
        Year: 1996,
        Genre: 'UnVuIGFuZCBHdW4=',
        Platforms: 'TmVvIEdlbw=='
    },
    {
        Id: 16062023,
        Name: 'TWFuaHVudA==',
        Developer: 'Um9ja3N0YXI=',
        Year: 2003,
        Genre: 'U3RlYWx0aA==',
        Platforms: 'UGxheVN0YXRpb24gMg=='
    },
    {
        Id: 6062023,
        Name: 'UmVkIERlYWQgUmV2b2x2ZXI=',
        Developer: 'Um9ja3N0YXI=',
        Year: 2004,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 29092023,
        Name: 'VGhlbWUgSG9zcGl0YWw=',
        Developer: 'QnVsbGZyb2c=',
        Year: 1997,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 9122022,
        Name: 'RHVuZ2VvbiBLZWVwZXI=',
        Developer: 'QnVsbGZyb2c=',
        Year: 1997,
        Genre: 'U3RyYXRlZ3k=',
        Platforms: 'UEM='
    },
    {
        Id: 17112022,
        Name: 'VHdvIFBvaW50IEhvc3BpdGFs',
        Developer: 'VHdvIFBvaW50IFN0dWRpb3M=',
        Year: 2018,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 31012023,
        Name: 'TWluZWNyYWZ0IER1bmdlb25z',
        Developer: 'TW9qYW5n',
        Year: 2020,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNoLFBsYXlTdGF0aW9uIDQsWGJveCBPbmU='
    },
    {
        Id: 23052023,
        Name: 'R3ViYmxl',
        Developer: 'QWN0dWFsIEVudGVydGFpbm1lbnQ=',
        Year: 1997,
        Genre: 'UHV6emxl',
        Platforms: 'UEM='
    },
    {
        Id: 2042023,
        Name: 'R2V4',
        Developer: 'Q3J5c3RhbCBEeW5hbWljcw==',
        Year: 1995,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'M0RPLlBsYXlTdGF0aW9uLFNlZ2EgU2F0dXJu'
    },
    {
        Id: 24092023,
        Name: 'VlJDaGF0',
        Developer: 'VlJDaGF0IEluYw==',
        Year: 2014,
        Genre: 'TU1P',
        Platforms: 'UEM='
    },
    {
        Id: 18012023,
        Name: 'UmFmdA==',
        Developer: 'UmVkYmVldCBJbnRlcmFjdGl2ZQ==',
        Year: 2022,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEM='
    },
    {
        Id: 19092022,
        Name: 'U21pdGU=',
        Developer: 'SGktUmV6IFN0dWRpb3M=',
        Year: 2014,
        Genre: 'TU9CQQ==',
        Platforms: 'UEM='
    },
    {
        Id: 16102023,
        Name: 'TWFmaWE=',
        Developer: 'SWxsdXNpb24gU29mdHdvcmtz',
        Year: 2002,
        Genre: 'QWN0b24tQWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMixYYm94'
    },
    {
        Id: 8042023,
        Name: 'VWx0aW1hdGUgQ2hpY2tlbiBIb3JzZQ==',
        Developer: 'Q2xldmVyIEVuZGVhdm91ciBHYW1lcw==',
        Year: 2016,
        Genre: 'UGFydHk=',
        Platforms: 'UEM='
    },
    {
        Id: 10092023,
        Name: 'TWluaSBNZXRybw==',
        Developer: 'RGlub3NhdXIgUG9sbyBDbHVi',
        Year: 2015,
        Genre: 'UHV6emxl',
        Platforms: 'UEM='
    },
    {
        Id: 1042023,
        Name: 'TWluaSBNb3RvcndheXM=',
        Developer: 'RGlub3NhdXIgUG9sbyBDbHVi',
        Year: 2019,
        Genre: 'UHV6emxl',
        Platforms: 'aU9T'
    },
    {
        Id: 16122022,
        Name: 'TW9udW1lbnQgVmFsbGV5',
        Developer: 'VXN0d28gR2FtZXM=',
        Year: 2014,
        Genre: 'UHV6emxl',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 15122023,
        Name: 'U2VhIG9mIFRoaWV2ZXM=',
        Developer: 'UmFyZQ==',
        Year: 2018,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsWGJveCBPbmU='
    },
    {
        Id: 31052023,
        Name: 'QnVnc25heA==',
        Developer: 'WW91bmcgSG9yc2Vz',
        Year: 2020,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gNSxQbGF5U3RhdGlvbiA0'
    },
    {
        Id: 15022023,
        Name: 'VGhlIFN0YW5sZXkgUGFyYWJsZQ==',
        Developer: 'R2FsYWN0aWMgQ2FmZQ==',
        Year: 2013,
        Genre: 'U3Rvcnk=',
        Platforms: 'UEM='
    },
    {
        Id: 5112023,
        Name: 'TWljcm9zb2Z0IEZsaWdodCBTaW11bGF0b3I=',
        Developer: 'QXNvYm8gU3R1ZGlv',
        Year: 2020,
        Genre: 'U2ltdWxhdG9y',
        Platforms: 'UEM='
    },
    {
        Id: 22042023,
        Name: 'V29yZHMgd2l0aCBGcmllbmRz',
        Developer: 'WnluZ2E=',
        Year: 2009,
        Genre: 'V29yZA==',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 5082023,
        Name: 'UnVzdA==',
        Developer: 'RmFjZXB1bmNoIFN0dWRpb3M=',
        Year: 2018,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEM='
    },
    {
        Id: 5112022,
        Name: 'RGF5Wg==',
        Developer: 'Qm9oZW1pYSBJbnRlcmFjdGl2ZQ==',
        Year: 2018,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEM='
    },
    {
        Id: 9092023,
        Name: 'S2VyYmFsIFNwYWNlIFByb2dyYW0=',
        Developer: 'U3F1YWQ=',
        Year: 2015,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 25122023,
        Name: 'R2FuZyBCZWFzdHM=',
        Developer: 'Qm9uZWxvYWY=',
        Year: 2017,
        Genre: 'UGFydHk=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNA=='
    },
    {
        Id: 26122022,
        Name: 'TG9zdCBBcms=',
        Developer: 'VHJpcG9kIFN0dWRpbw==',
        Year: 2019,
        Genre: 'TU1PUlBH',
        Platforms: 'UEM='
    },
    {
        Id: 28042023,
        Name: 'V2FyZnJhbWU=',
        Developer: 'RGlnaXRhbCBFeHRyZW1lcw==',
        Year: 2013,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 1022023,
        Name: 'VHVuaWM=',
        Developer: 'QW5kcmV3IFNob3VsZGljZQ==',
        Year: 2022,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsWGJveCBTZXJpZXMgWCxQbGF5U3RhdGlvbiA1'
    },
    {
        Id: 5122023,
        Name: 'Q3VwaGVhZA==',
        Developer: 'U3R1ZGlvIE1ESFI=',
        Year: 2017,
        Genre: 'U2hvb3Rlcg==',
        Platforms: 'UEMsWGJveCBPbmU='
    },
    {
        Id: 12122022,
        Name: 'U2xpbWUgUmFuY2hlcg==',
        Developer: 'TW9ub21pIFBhcms=',
        Year: 2017,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEMsWGJveCBPbmU='
    },
    {
        Id: 8122023,
        Name: 'RGVhZCBDZWxscw==',
        Developer: 'TW90aW9uIFR3aW4=',
        Year: 2018,
        Genre: 'Um91Z2xpa2U=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 27032023,
        Name: 'U25ha2UgUGFzcw==',
        Developer: 'U3VtbyBEaWdpdGFs',
        Year: 2017,
        Genre: 'UGxhdGZvcm1lcg==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZSxOaW50ZW5kbyBTd2l0Y2g='
    },
    {
        Id: 30082022,
        Name: 'VGhlIFVuZmluaXNoZWQgU3dhbg==',
        Developer: 'R2lhbnQgU3BhcnJvdw==',
        Year: 2012,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UGxheVN0YXRpb24gMw=='
    },
    {
        Id: 19092023,
        Name: 'Q2Fycmlvbg==',
        Developer: 'UGhvYmlhIEdhbWUgU3R1ZGk=',
        Year: 2020,
        Genre: 'SG9ycm9y',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNoLFhib3ggT25l'
    },
    {
        Id: 25092022,
        Name: 'QWZ0ZXJwYXJ0eQ==',
        Developer: 'TmlnaHQgU2Nob29sIFN0dWRpbw==',
        Year: 2019,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 29042023,
        Name: 'UmVzaWRlbnQgRXZpbCBWaWxsYWdl',
        Developer: 'Q2FwY29t',
        Year: 2021,
        Genre: 'SG9ycm9y',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxQbGF5U3RhdGlvbiA1LFhib3ggT25lLFhib3ggU2VyaWVzIFg='
    },
    {
        Id: 6112022,
        Name: 'SGFsbyBJbmZpbml0ZQ==',
        Developer: 'MzQzIEluZHVzdHJpZXM=',
        Year: 2021,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsWGJveCBPbmUsWGJveCBTZXJpZXMgWA=='
    },
    {
        Id: 20102022,
        Name: 'U3RyYXk=',
        Developer: 'Qmx1ZVR3ZWx2ZSBTdHVkaW8=',
        Year: 2022,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gNSxQbGF5U3RhdGlvbiA0'
    },
    {
        Id: 1082023,
        Name: 'VGhlIFF1YXJyeQ==',
        Developer: 'U3VwZXJtYXNzaXZlIEdhbWVz',
        Year: 2022,
        Genre: 'SG9ycm9y',
        Platforms: 'UEMsUGxheVN0YXRpb24gNSxQbGF5U3RhdGlvbiA0LFhib3ggU2VyaWVzIFgsWGJveCBPbmU='
    },
    {
        Id: 8092022,
        Name: 'SG9nd2FydHMgTGVnYWN5',
        Developer: 'QXZhbGFuY2hlIFNvZnR3YXJl',
        Year: 2022,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNSxYYm94IFNlcmllcyBY'
    },
    {
        Id: 18072023,
        Name: 'VmFsb3JhbnQ=',
        Developer: 'UmlvdCBHYW1lcw==',
        Year: 2020,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEM='
    },
    {
        Id: 27022023,
        Name: 'QXhpb20gVmVyZ2U=',
        Developer: 'VGhvbWFzIEhhcHAgR2FtZXM=',
        Year: 2015,
        Genre: 'TWV0cm9pZHZhbmlh',
        Platforms: 'UGxheVN0YXRpb24gNCxQQw=='
    },
    {
        Id: 27122023,
        Name: 'QmlvbXV0YW50',
        Developer: 'RXhwZXJpbWVudCAxMDE=',
        Year: 2021,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 23102023,
        Name: 'RWFzdHdhcmQ=',
        Developer: 'UGl4cGls',
        Year: 2021,
        Genre: 'UlBH',
        Platforms: 'UEMsTmludGVuZG8gU3dpdGNo'
    },
    {
        Id: 12112023,
        Name: 'UmV0dXJuYWw=',
        Developer: 'SG91c2VtYXJxdWU=',
        Year: 2021,
        Genre: 'VGhpcmQgUGVyc29uIFNob290ZXI=',
        Platforms: 'UGxheVN0YXRpb24gNQ=='
    },
    {
        Id: 22012023,
        Name: 'U3BsaXRnYXRl',
        Developer: 'MTA0NyBHYW1lcw==',
        Year: 2019,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNSxYYm94IFNlcmllcyBY'
    },
    {
        Id: 26102023,
        Name: 'Rm9yIHRoZSBLaW5n',
        Developer: 'SXJvbm9hayBHYW1lcw==',
        Year: 2017,
        Genre: 'Um91Z2VsaWtl',
        Platforms: 'UEM='
    },
    {
        Id: 12082023,
        Name: 'V29sZmVuc3RlaW4=',
        Developer: 'UmF2ZW4gU29mdHdhcmU=',
        Year: 2009,
        Genre: 'Rmlyc3QgUGVyc29uIFNob290ZXI=',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 3062023,
        Name: 'Q2FzdGxlIFdvbGZlbnN0ZWlu',
        Developer: 'TXVzZSBTb2Z0d2FyZQ==',
        Year: 1981,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'QXBwbGUgSUk='
    },
    {
        Id: 6092022,
        Name: 'QWRWZW50dXJlIENhcGl0YWxpc3Q=',
        Developer: 'SHlwZXIgSGlwcG8gUHJvZHVjdGlvbnM=',
        Year: 2014,
        Genre: 'SWRsZQ==',
        Platforms: 'aU9TLEFuZHJvaWQsUEM='
    },
    {
        Id: 15122022,
        Name: 'UHJvdG90eXBl',
        Developer: 'UmFkaWNhbCBFbnRlcnRhaW5tZW50',
        Year: 2009,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 13102023,
        Name: 'U3RhdGUgb2YgRGVjYXk=',
        Developer: 'VW5kZWFkIExhYnM=',
        Year: 2013,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEMsWGJveCAzNjA='
    },
    {
        Id: 5092022,
        Name: 'VGhvbWFzIFdhcyBBbG9uZQ==',
        Developer: 'TWlrZSBCaXRoZWxs',
        Year: 2012,
        Genre: 'UHV6emxl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiBWaXRh'
    },
    {
        Id: 22062023,
        Name: 'U3VibmF1dGljYQ==',
        Developer: 'VW5rbm93biBXb3JsZHMgRW50ZXJ0YWlubWVudA==',
        Year: 2018,
        Genre: 'QWN0aW9uLUFkdmVudHVyZQ==',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 7042023,
        Name: 'VGhpZWY=',
        Developer: 'RWlkb3M=',
        Year: 2014,
        Genre: 'U3RlYWx0aA==',
        Platforms: 'UGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25lLFBD'
    },
    {
        Id: 24122022,
        Name: 'RmFsbG91dCBTaGVsdGVy',
        Developer: 'QmV0aGVzZGEgR2FtZSBTdHVkaW9z',
        Year: 2015,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 2052023,
        Name: 'RmFsbG91dA==',
        Developer: 'SW50ZXJwbGF5IFByb2R1Y3Rpb25z',
        Year: 1997,
        Genre: 'UlBH',
        Platforms: 'UEM='
    },
    {
        Id: 15072023,
        Name: 'TWV0YWwgR2VhciBTdXJ2aXZl',
        Developer: 'S29uYW1p',
        Year: 2018,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEMsUGxheVN0YXRpb24gNCxYYm94IE9uZQ=='
    },
    {
        Id: 29112022,
        Name: 'RmFjdG9yaW8=',
        Developer: 'V3ViZSBTb2Z0d2FyZQ==',
        Year: 2020,
        Genre: 'U2ltdWxhdGlvbg==',
        Platforms: 'UEM='
    },
    {
        Id: 31122023,
        Name: 'UGF0aCBvZiBFeGlsZQ==',
        Developer: 'R3JpbmRpbmcgR2VhciBHYW1lcw==',
        Year: 2013,
        Genre: 'QWN0aW9uIFJQRw==',
        Platforms: 'UEM='
    },
    {
        Id: 2072023,
        Name: 'VmFsaGVpbQ==',
        Developer: 'SXJvbiBHYXRlIFN0dWRpbw==',
        Year: 2021,
        Genre: 'U3Vydml2YWw=',
        Platforms: 'UEM='
    },
    {
        Id: 27082022,
        Name: 'TGlmZSBpcyBTdHJhbmdl',
        Developer: 'RG9udG5vZCBFbnRlcnRhaW5tZW50',
        Year: 2015,
        Genre: 'QWR2ZW50dXJl',
        Platforms: 'UEMsUGxheVN0YXRpb24gMyxQbGF5U3RhdGlvbiA0LFhib3ggMzYwLFhib3ggT25l'
    },
    {
        Id: 4032023,
        Name: 'Q2hhbXBpb25zaGlwIE1hbmFnZXI=',
        Developer: 'SW50ZWxlaw==',
        Year: 1992,
        Genre: 'U3BvcnRz',
        Platforms: 'QW1pZ2EsQXRhcmkgU1Q='
    },
    {
        Id: 10092022,
        Name: 'UnVuZXNjYXBl',
        Developer: 'SmFnZXg=',
        Year: 2001,
        Genre: 'TU1PUlBH',
        Platforms: 'UEM='
    },
    {
        Id: 13122023,
        Name: 'TG9sbGlwb3AgQ2hhaW5zYXc=',
        Developer: 'R3Jhc3Nob3BwZXIgTWFudWZhY3R1cmU=',
        Year: 2012,
        Genre: 'SGFjayBhbmQgU2xhc2g=',
        Platforms: 'UGxheVN0YXRpb24gMyxYYm94IDM2MA=='
    },
    {
        Id: 24092022,
        Name: 'Q3Jvc3N5IFJvYWQ=',
        Developer: 'SGlwc3RlciBXaGFsZQ==',
        Year: 2014,
        Genre: 'QXJjYWRl',
        Platforms: 'aU9TLEFuZHJvaWQ='
    },
    {
        Id: 1112023,
        Name: 'TXVwcGV0IFJhY2VNYW5pYQ==',
        Developer: 'VHJhdmVsbGVyJ3MgVGFsZXM=',
        Year: 2000,
        Genre: 'UmFjaW5n',
        Platforms: 'UGxheVN0YXRpb24='
    },
          
]