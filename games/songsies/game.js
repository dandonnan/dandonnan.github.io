const storageKey = 'songsies';

function GetFirstHint(puzzle) {
    return `This song was released in ${puzzle.Year}`;
}

function GetSecondHint(puzzle) {
    return `It was sung by ${atob(puzzle.Artist)}`;
}

function GetThirdHint(puzzle) {
    return `It featured on the album ${atob(puzzle.Album)}`;
}

function GetFourthHint(puzzle) {
    return `Lyrics include: "${atob(puzzle.Lyrics)}"`;
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
        Name: 'Radio Regular',
        Description: 'Correctly guess 10 titles in a row.',
        Icon: 'images/badge2.png',
        Progress: 10
    },
    {
        Id: 'StreakThirty',
        Name: 'Musical Maestro',
        Description: 'Correctly guess 30 titles in a row.',
        Icon: 'images/badge3.png',
        Progress: 30
    },
    {
        Id: 'Five',
        Name: 'Familiar Beats',
        Description: 'Correctly guess 5 titles.',
        Icon: 'images/badge4.png',
        Progress: 5
    },
    {
        Id: 'Ten',
        Name: 'Singing Along',
        Description: 'Correctly guess 10 titles.',
        Icon: 'images/badge5.png',
        Progress: 10
    },
    {
        Id: 'TwentyFive',
        Name: 'Keen Listener',
        Description: 'Correctly guess 25 titles.',
        Icon: 'images/badge6.png',
        Progress: 25
    },
    {
        Id: 'Fifty',
        Name: 'Rock DJ',
        Description: 'Correctly guess 50 titles.',
        Icon: 'images/badge7.png',
        Progress: 50
    },
    {
        Id: 'OneHundred',
        Name: 'Greatest Hits',
        Description: 'Correctly guess 100 titles.',
        Icon: 'images/badge8.png',
        Progress: 100
    }
]

const puzzles = [
    {
        Id: 30092022,
        Name: 'VG94aWM=',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2003,
        Album: 'SW4gdGhlIFpvbmU=',
        Lyrics: 'V2l0aCBhIHRhc3RlIG9mIHlvdXIgbGlwcyBJJ20gb24gYSByaWRl'
    },
    {
        Id: 14122022,
        Name: 'Qm9ybiB0byBNYWtlIFlvdSBIYXBweQ==',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 1999,
        Album: 'Li4uQmFieSBPbmUgTW9yZSBUaW1l',
        Lyrics: 'SSBkb24ndCBrbm93IGhvdyB0byBsaXZlIHdpdGhvdXQgeW91ciBsb3Zl'
    },
    {
        Id: 8022023,
        Name: 'U3Ryb25nZXI=',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2000,
        Album: 'T29wcyEgSSBEaWQgSXQgQWdhaW4=',
        Lyrics: 'TXkgbG9uZWxpbmVzcyBhaW4ndCBraWxsaW5nIG1lIG5vIG1vcmU='
    },
    {
        Id: 16102023,
        Name: 'Q2FsbCBNZSBNYXliZQ==',
        Artist: 'Q2FybHkgUmFlIEplcHNlbg==',
        Year: 2012,
        Album: 'S2lzcw==',
        Lyrics: 'SGV5LCBJIGp1c3QgbWV0IHlvdSBhbmQgdGhpcyBpcyBjcmF6eQ=='
    },
    {
        Id: 2092022,
        Name: 'Q3JvY29kaWxlIFJvY2s=',
        Artist: 'RWx0b24gSm9obg==',
        Year: 1972,
        Album: 'RG9uJ3QgU2hvb3QgTWUgSSdtIE9ubHkgdGhlIFBpYW5vIFBsYXllcg==',
        Lyrics: 'SSByZW1lbWJlciB3aGVuIHJvY2sgd2FzIHlvdW5n'
    },
    {
        Id: 7092022,
        Name: 'Um9ja2V0IE1hbg==',
        Artist: 'RWx0b24gSm9obg==',
        Year: 1972,
        Album: 'SG9ua3kgQ2jidGVhdQ==',
        Lyrics: 'U2hlIHBhY2tlZCBteSBiYWdzIGxhc3QgbmlnaHQsIHByZS1mbGlnaHQ='
    },
    {
        Id: 5062023,
        Name: 'R2FuZ25hbSBTdHlsZQ==',
        Artist: 'UHN5',
        Year: 2012,
        Album: 'R2FuZ25hbSBTdHlsZQ==',
        Lyrics: 'RWgtIHNleHkgbGFkeQ=='
    },
    {
        Id: 21042023,
        Name: 'R3JlYXQgREo=',
        Artist: 'VGhlIFRpbmcgVGluZ3M=',
        Year: 2008,
        Album: 'V2UgU3RhcnRlZCBOb3RoaW5n',
        Lyrics: 'VGhlIGRydW1zLCB0aGUgZHJ1bXMsIHRoZSBkcnVtcw=='
    },
    {
        Id: 11112023,
        Name: 'RGVlcGVyIFNoYWRlIG9mIEJsdWU=',
        Artist: 'U3RlcHM=',
        Year: 2000,
        Album: 'U3RlcHRhY3VsYXI=',
        Lyrics: 'WW91J3JlIHNvIGZhciwgZmFyIGF3YXk='
    },
    {
        Id: 13122023,
        Name: 'U3VuZG93bg==',
        Artist: 'UyBDbHViIDg=',
        Year: 2003,
        Album: 'U3VuZG93bg==',
        Lyrics: 'QWlyIGdldHMgY29vbGVyIGJ1dCBteSBoZWFydCBwb3VuZHM='
    },
    {
        Id: 23082022,
        Name: 'UyBDbHViIFBhcnR5',
        Artist: 'UyBDbHViIDc=',
        Year: 1999,
        Album: 'UyBDbHVi',
        Lyrics: 'VGluYSdzIGRvaW5nIGhlciBkYW5jZSwgSm9uJ3MgbG9va2luZyBmb3Igcm9tYW5jZQ=='
    },
    {
        Id: 3042023,
        Name: 'QnJpbmcgaXQgQWxsIEJhY2s=',
        Artist: 'UyBDbHViIDc=',
        Year: 1999,
        Album: 'UyBDbHVi',
        Lyrics: 'SG9sZCB5b3VyIGhlYWQgaGlnaCBhbmQgcmVhY2ggdGhlIHRvcA=='
    },
    {
        Id: 2022023,
        Name: 'TG9zZSBZb3Vyc2VsZg==',
        Artist: 'RW1pbmVt',
        Year: 2002,
        Album: 'OCBNaWxl',
        Lyrics: 'SGlzIHBhbG1zIGFyZSBzd2VhdHksIGtuZWVzIHdlYWssIGFybXMgYXJlIGhlYXZ5'
    },
    {
        Id: 10072023,
        Name: 'V2l0aG91dCBNZQ==',
        Artist: 'RW1pbmVt',
        Year: 2002,
        Album: 'VGhlIEVtaW5lbSBTaG93',
        Lyrics: 'Tm93IHRoaXMgbG9va3MgbGlrZSBhIGpvYiBmb3IgbWU='
    },
    {
        Id: 9092023,
        Name: 'R2VuaWUgaW4gYSBCb3R0bGU=',
        Artist: 'Q2hyaXN0aW5hIEFndWlsZXJh',
        Year: 1999,
        Album: 'Q2hyaXN0aW5hIEFndWlsZXJh',
        Lyrics: 'SWYgeW91IHdhbm5hIGJlIHdpdGggbWUsIEkgY2FuIG1ha2UgeW91ciB3aXNoIGNvbWUgdHJ1ZQ=='
    },
    {
        Id: 24082023,
        Name: 'RGlycnR5',
        Artist: 'Q2hyaXN0aW5hIEFndWlsZXJh',
        Year: 2002,
        Album: 'U3RyaXBwZWQ=',
        Lyrics: 'R29ubmEgZ2V0IG15IGdpcmxzLCBnZXQgeW91ciBib3lzLCBnb25uYSBtYWtlIHNvbWUgbm9pc2U='
    },
    {
        Id: 7012023,
        Name: 'TnVtYg==',
        Artist: 'TGlua2luIFBhcms=',
        Year: 2003,
        Album: 'TWV0ZW9yYQ==',
        Lyrics: 'RmVlbGluZyBzbyBmYWl0aGxlc3MsIGxvc3QgdW5kZXIgdGhlIHN1cmZhY2U='
    },
    {
        Id: 29092022,
        Name: 'QWxsIFN0YXI=',
        Artist: 'U21hc2htb3V0aA==',
        Year: 1999,
        Album: 'QXN0cm8gTG91bmdl',
        Lyrics: 'U29tZWJvZHkgb25jZSB0b2xkIG1l'
    },
    {
        Id: 7122023,
        Name: 'VXB0b3duIEdpcmw=',
        Artist: 'QmlsbHkgSm9lbA==',
        Year: 1983,
        Album: 'QW4gSW5ub2NlbnQgTWFu',
        Lyrics: 'U2hlJ3MgYmVlbiBsaXZpbmcgaW4gaGVyIHdoaXRlIGJyZWFkIHdvcmxk'
    },
    {
        Id: 12112023,
        Name: 'SGVsbG8=',
        Artist: 'TGlvbmVsIFJpY2hpZQ==',
        Year: 1984,
        Album: 'Q2FuJ3QgU2xvdyBEb3du',
        Lyrics: 'SSBjYW4gc2VlIGl0IGluIHlvdXIgZXllcw=='
    },
    {
        Id: 31012023,
        Name: 'TGV0IGl0IEdv',
        Artist: 'SWRpbmEgTWVuemVs',
        Year: 2013,
        Album: 'RnJvemVu',
        Lyrics: 'VGhlIGNvbGQgbmV2ZXIgYm90aGVyZWQgbWUgYW55d2F5'
    },
    {
        Id: 16012023,
        Name: 'RGVmeWluZyBHcmF2aXR5',
        Artist: 'SWRpbmEgTWVuemVsICYgS3Jpc3RpbiBDaGVub3dldGg=',
        Year: 2003,
        Album: 'V2lja2Vk',
        Lyrics: 'U29tZW9uZSB0b2xkIG1lIGxhdGVseSBldmVyeW9uZSBkZXNlcnZlcyB0aGUgY2hhbmNlIHRvIGZseQ=='
    },
    {
        Id: 3072023,
        Name: 'V2luZ3M=',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2012,
        Album: 'RE5B',
        Lyrics: 'TWFtYSB0b2xkIG1lIG5vdCB0byB3YXN0ZSBteSBsaWZl'
    },
    {
        Id: 7112023,
        Name: 'QmxhY2sgTWFnaWM=',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2015,
        Album: 'R2V0IFdlaXJk',
        Lyrics: 'Q29tZSBhbmQgZ2V0IGl0IGF0IGEga25vY2stZG93biBwcmljZQ=='
    },
    {
        Id: 18062023,
        Name: 'Q29uZmV0dGk=',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2020,
        Album: 'Q29uZmV0dGk=',
        Lyrics: 'QWxsIGV5ZXMgb24gbWUsIHNvIFZJUCwgYWxsIG9mIG15IGRyZWFtcw=='
    },
    {
        Id: 17092023,
        Name: 'Q29uZmlkZW50',
        Artist: 'RGVtaSBMb3ZhdG8=',
        Year: 2015,
        Album: 'Q29uZmlkZW50',
        Lyrics: 'U28geW91IHNheSBJJ20gY29tcGxpY2F0ZSwgdGhhdCBJIG11c3QgYmUgb3V0dGEgbXkgbWluZA=='
    },
    {
        Id: 21072023,
        Name: 'QWZyaWNh',
        Artist: 'VG90bw==',
        Year: 1982,
        Album: 'VG90byBJVg==',
        Lyrics: 'SXQncyBnb25uYSB0YWtlIGEgbG90IHRvIGdldCBtZSBhd2F5IGZyb20geW91'
    },
    {
        Id: 15092022,
        Name: 'QmFkIFJvbWFuY2U=',
        Artist: 'TGFkeSBHYWdh',
        Year: 2009,
        Album: 'VGhlIEZhbWUgTW9uc3Rlcg==',
        Lyrics: 'SSB3YW50IHlvdXIgbG92ZSBhbmQgSSB3YW50IHlvdXIgcmV2ZW5nZQ=='
    },
    {
        Id: 10122023,
        Name: 'UG9rZXIgRmFjZQ==',
        Artist: 'TGFkeSBHYWdh',
        Year: 2008,
        Album: 'VGhlIEZhbWU=',
        Lyrics: 'SSdsbCBnZXQgaGltIGhvdCwgc2hvdyBoaW0gd2hhdCBJJ3ZlIGdvdA=='
    },
    {
        Id: 12072023,
        Name: 'Q3J5IE1lIE91dA==',
        Artist: 'UGl4aWUgTG90dA==',
        Year: 2009,
        Album: 'VHVybiBJdCBVcA==',
        Lyrics: 'VGhlIHRlYXJzIHRoYXQgd2lsbCBmYWxsIG1lYW4gbm90aGluZyBhdCBhbGw='
    },
    {
        Id: 6012023,
        Name: 'RWdv',
        Artist: 'VGhlIFNhdHVyZGF5cw==',
        Year: 2009,
        Album: 'V29yZHNoYWtlcg==',
        Lyrics: 'RG9uJ3QgdGVsbCBtZSB0aGF0IGl0J3MgdGltZSBmb3IgZ29pbmcgc29sbw=='
    },
    {
        Id: 24122023,
        Name: 'TG92ZSBNYWNoaW5l',
        Artist: 'R2lybHMgQWxvdWQ=',
        Year: 2004,
        Album: 'V2hhdCBXaWxsIHRoZSBOZWlnaGJvdXJzIFNheT8=',
        Lyrics: 'V2UncmUgZ2lmdC13cmFwcGVkIGtpdHR5IGNhdHM='
    },
    {
        Id: 20032023,
        Name: 'QW1lcmljYW4gSWRpb3Q=',
        Artist: 'R3JlZW4gRGF5',
        Year: 2004,
        Album: 'QW1lcmljYW4gSWRpb3Q=',
        Lyrics: 'VGVsZXZpc2lvbiBkcmVhbXMgb2YgdG9tb3Jyb3c='
    },
    {
        Id: 18092023,
        Name: 'TGVmdCBPdXRzaWRlIEFsb25l',
        Artist: 'QW5hc3RhY2lh',
        Year: 2004,
        Album: 'QW5hc3RhY2lh',
        Lyrics: 'QmVlbiBsaXZpbmcgaW4gYSBmYW50YXN5IHdpdGhvdXQgbWVhbmluZw=='
    },
    {
        Id: 8072023,
        Name: 'T24gYSBNaXNzaW9u',
        Artist: 'R2FicmllbGxhIENpbG1p',
        Year: 2010,
        Album: 'VGVu',
        Lyrics: 'Tm90aGluZyBjYW4gc3RvcCBtZSwgSSdtIHN0cm9uZ2VyIHRoYW4gZXZlcg=='
    },
    {
        Id: 16082023,
        Name: 'U3dlZXQgQWJvdXQgTWU=',
        Artist: 'R2FicmllbGxhIENpbG1p',
        Year: 2008,
        Album: 'TGVzc29ucyB0byBiZSBMZWFybmVk',
        Lyrics: 'SWYgdGhlcmUncyBsZXNzb25zIHRvIGJlIGxlYXJuZWQ='
    },
    {
        Id: 16122022,
        Name: 'T3Bwb3NpdGVzIEF0dHJhY3Q=',
        Artist: 'UGF1bGEgQWJkdWw=',
        Year: 1988,
        Album: 'Rm9yZXZlciBZb3VyIEdpcmw=',
        Lyrics: 'T3VyIGZyaWVuZHMgYXJlIHNheWluJyB3ZSBhaW4ndCBnb25uYSBsYXN0'
    },
    {
        Id: 18032023,
        Name: 'UHVyZSBhbmQgU2ltcGxl',
        Artist: 'SGVhcidTYXk=',
        Year: 2001,
        Album: 'UG9wc3RhcnM=',
        Lyrics: 'WW91J3ZlIGJlZW4gc2F5aW5nIHRoYXQgSSdtIGRyaXZpbmcgeW91IGNyYXp5'
    },
    {
        Id: 24062023,
        Name: 'V2hvbGUgQWdhaW4=',
        Artist: 'QXRvbWljIEtpdHRlbg==',
        Year: 2000,
        Album: 'UmlnaHQgTm93',
        Lyrics: 'TG9va2luZyBiYWNrIG9uIHdoZW4gd2UgZmlyc3QgbWV0'
    },
    {
        Id: 3112022,
        Name: 'VW1icmVsbGE=',
        Artist: 'UmloYW5uYQ==',
        Year: 2007,
        Album: 'R29vZCBHaXJsIEdvbmUgQmFk',
        Lyrics: 'Tm93IHRoYXQgaXQncyByYWluaW5nIG1vcmUgdGhhbiBldmVy'
    },
    {
        Id: 9102023,
        Name: 'QmFkIEd1eQ==',
        Artist: 'QmlsbGllIEVpbGlzaA==',
        Year: 2019,
        Album: 'V2hlbiBXZSBBbGwgRmFsbCBBc2xlZXAsIFdoZXJlIERvIFdlIEdvPw==',
        Lyrics: 'Q3JlZXBpbmcgYXJvdW5kIGxpa2Ugbm8gb25lIGtub3dz'
    },
    {
        Id: 22122022,
        Name: 'U3dlZXQgYnV0IFBzeWNobw==',
        Artist: 'QXZhIE1heA==',
        Year: 2018,
        Album: 'SGVhdmVuICYgSGVsbA==',
        Lyrics: 'WW91J2xsIGJlIGNvbWluZyBiYWNrLCBiYWNrIGZvciBzZWNvbmRz'
    },
    {
        Id: 19102022,
        Name: 'UnVubmluZyBVcCBUaGF0IEhpbGw=',
        Artist: 'S2F0ZSBCdXNo',
        Year: 1985,
        Album: 'SG91bmRzIG9mIExvdmU=',
        Lyrics: 'RG8geW91IHdhbnQgdG8gaGVhciBhYm91dCB0aGUgZGVhbCB0aGF0IEknbSBtYWtpbmc/'
    },
    {
        Id: 26112023,
        Name: 'RGFuY2luZyBRdWVlbg==',
        Artist: 'QWJiYQ==',
        Year: 1975,
        Album: 'QXJyaXZhbA==',
        Lyrics: 'RmVlbCB0aGUgYmVhdCBmcm9tIHRoZSB0YW1ib3VyaW5l'
    },
    {
        Id: 23082023,
        Name: 'V2F0ZXJsb28=',
        Artist: 'QWJiYQ==',
        Year: 1973,
        Album: 'V2F0ZXJsb28=',
        Lyrics: 'VGhlIGhpc3RvcnkgYm9vayBvbiB0aGUgc2hlbGYgaXMgYWx3YXlzIHJlcGVhdGluZyBpdHNlbGY='
    },
    {
        Id: 6122022,
        Name: 'WWVsbG93',
        Artist: 'Q29sZHBsYXk=',
        Year: 2000,
        Album: 'UGFyYWNodXRlcw==',
        Lyrics: 'TG9vayBob3cgdGhleSBzaGluZSBmb3IgeW91'
    },
    {
        Id: 30122022,
        Name: 'UGhvdG9ncmFwaA==',
        Artist: 'Tmlja2VsYmFjaw==',
        Year: 2005,
        Album: 'QWxsIHRoZSBSaWdodCBSZWFzb25z',
        Lyrics: 'V2hhdCB0aGUgaGVsbCBpcyBvbiBKb2V5J3MgaGVhZD8='
    },
    {
        Id: 24032023,
        Name: 'V2hlbmV2ZXIgV2hlcmV2ZXI=',
        Artist: 'U2hha2lyYQ==',
        Year: 2001,
        Album: 'TGF1bmRyeSBTZXJ2aWNl',
        Lyrics: 'QnV0IHRoYXQncyB0aGUgZGVhbCwgbXkgZGVhcg=='
    },
    {
        Id: 30082022,
        Name: 'Qm9oZW1pYW4gUmhhcHNvZHk=',
        Artist: 'UXVlZW4=',
        Year: 1981,
        Album: 'QSBOaWdodCBhdCB0aGUgT3BlcmE=',
        Lyrics: 'SWYgSSdtIG5vdCBiYWNrIGFnYWluIHRoaXMgdGltZSB0b21vcnJvdw=='
    },
    {
        Id: 15012023,
        Name: 'UmFkaW8gR2EgR2E=',
        Artist: 'UXVlZW4=',
        Year: 1984,
        Album: 'VGhlIFdvcmtz',
        Lyrics: 'WW91IGhhZCB5b3VyIHRpbWUsIHlvdSBoYWQgdGhlIHBvd2Vy'
    },
    {
        Id: 16052023,
        Name: 'SSBXYW50IHRvIEJyZWFrIEZyZWU=',
        Artist: 'UXVlZW4=',
        Year: 1983,
        Album: 'VGhlIFdvcmtz',
        Lyrics: 'WW91J3JlIHNvIHNlbGYtc2F0aXNmaWVk'
    },
    {
        Id: 11052023,
        Name: 'T25lIFZpc2lvbg==',
        Artist: 'UXVlZW4=',
        Year: 1985,
        Album: 'QSBLaW5kIG9mIE1hZ2lj',
        Lyrics: 'T25lIHJhY2UsIG9uZSBob3BlLCBvbmUgcmVhbCBkZWNpc2lvbg=='
    },
    {
        Id: 11122022,
        Name: 'QmVhdCBJdA==',
        Artist: 'TWljaGFlbCBKYWNrc29u',
        Year: 1982,
        Album: 'VGhyaWxsZXI=',
        Lyrics: 'WW91IGhhdmUgdG8gc2hvdyB0aGVtIHRoYXQgeW91J3JlIHJlYWxseSBub3Qgc2NhcmVk'
    },
    {
        Id: 24022023,
        Name: 'UHJpY2UgVGFn',
        Artist: 'SmVzc2llIEo=',
        Year: 2011,
        Album: 'V2hvIFlvdSBBcmU=',
        Lyrics: 'SSB3b25kZXIgaG93IHRoZXkgc2xlZXAgYXQgbmlnaHQ='
    },
    {
        Id: 4102023,
        Name: 'SW4gdGhlIEFpciBUb25pZ2h0',
        Artist: 'UGhpbCBDb2xsaW5z',
        Year: 1981,
        Album: 'RmFjZSBWYWx1ZQ==',
        Lyrics: 'SSd2ZSBzZWVuIHlvdXIgZmFjZSBiZWZvcmUgbXkgZnJpZW5k'
    },
    {
        Id: 15052023,
        Name: 'SG9sZGluZyBPdXQgZm9yIGEgSGVybw==',
        Artist: 'Qm9ubmllIFR5bGVy',
        Year: 1984,
        Album: 'U2VjcmV0IERyZWFtcyBhbmQgRm9yYmlkZGVuIEZpcmU=',
        Lyrics: 'SSBjYW4gZmVlbCBoaXMgYXBwcm9hY2ggbGlrZSBhIGZpcmUgaW4gbXkgYmxvb2Q='
    },
    {
        Id: 21122023,
        Name: 'VG90YWwgRWNsaXBzZSBvZiB0aGUgSGVhcnQ=',
        Artist: 'Qm9ubmllIFR5bGVy',
        Year: 1983,
        Album: 'RmFzdGVyIFRoYW4gdGhlIFNwZWVkIG9mIE5pZ2h0',
        Lyrics: 'WW91ciBsb3ZlIGlzIGxpa2UgYSBzaGFkb3cgb24gbWUgYWxsIG9mIHRoZSB0aW1l'
    },
    {
        Id: 11102023,
        Name: 'S2FybWEgQ2hhbWVsZW9u',
        Artist: 'Q3VsdHVyZSBDbHVi',
        Year: 1983,
        Album: 'Q29sb3VyIGJ5IE51bWJlcnM=',
        Lyrics: 'SSdtIGEgbWFuIHdpdGhvdXQgY29udmljdGlvbg=='
    },
    {
        Id: 21082023,
        Name: 'SSBHb3R0YSBGZWVsaW5n',
        Artist: 'VGhlIEJsYWNrIEV5ZWQgUGVhcw==',
        Year: 2009,
        Album: 'VGhlIEUuTi5ELg==',
        Lyrics: 'VG9uaWdodCdzIHRoZSBuaWdodCwgbGV0J3MgbGl2ZSBpdCB1cA=='
    },
    {
        Id: 24042023,
        Name: 'RG93biBVbmRlcg==',
        Artist: 'TWVuIEF0IFdvcms=',
        Year: 1980,
        Album: 'QnVzaW5lc3MgYXMgVXN1YWw=',
        Lyrics: 'QnV5aW5nIGJyZWFkIGZyb20gYSBtYW4gaW4gQnJ1c3NlbHM='
    },
    {
        Id: 31052023,
        Name: 'R2lybHMgSnVzdCBXYW50IHRvIEhhdmUgRnVu',
        Artist: 'Q3luZGkgTGF1cGVy',
        Year: 1983,
        Album: 'U2hlJ3MgU28gVW51c3VhbA==',
        Lyrics: 'SSB3YW5uYSBiZSB0aGUgb25lIHRvIHdhbGsgaW4gdGhlIHN1bg=='
    },
    {
        Id: 21052023,
        Name: 'S2lkcyBpbiBBbWVyaWNh',
        Artist: 'S2ltIFdpbGRl',
        Year: 1981,
        Album: 'S2ltIFdpbGRl',
        Lyrics: 'TG9va2luZyBvdXQgYSBkaXJ0eSBvbGQgd2luZG93'
    },
    {
        Id: 4122022,
        Name: 'UmVsYXg=',
        Artist: 'RnJhbmtpZSBHb2VzIHRvIEhvbGx5d29vZA==',
        Year: 1983,
        Album: 'V2VsY29tZSB0byB0aGUgUGxlYXN1cmVkb21l',
        Lyrics: 'V2hlbiB5b3Ugd2FudCB0byBnbyB0byBpdA=='
    },
    {
        Id: 10112023,
        Name: 'R2hvc3RidXN0ZXJz',
        Artist: 'UmF5IFBhcmtlciBKcg==',
        Year: 1984,
        Album: 'R2hvc3RidXN0ZXJzOiBPcmlnaW5hbCBTb3VuZHRyYWNrIEFsYnVt',
        Lyrics: 'QW4gaW52aXNpYmxlIG1hbiBzbGVlcGluJyBpbiB5b3VyIGJlZA=='
    },
    {
        Id: 28092023,
        Name: 'V2Fsa2luZyBvbiBTdW5zaGluZQ==',
        Artist: 'S2F0cmluYSAmIFRoZSBXYXZlcw==',
        Year: 1983,
        Album: 'V2Fsa2luZyBvbiBTdW5zaGluZQ==',
        Lyrics: 'SSB1c2VkIHRvIHRoaW5rIG1heWJlIHlvdSBsb3ZlZCBtZQ=='
    },
    {
        Id: 30072023,
        Name: 'U3Bpcml0IGluIHRoZSBTa3k=',
        Artist: 'RG9jdG9yICYgVGhlIE1lZGljcw==',
        Year: 1986,
        Album: 'TGF1Z2hpbmcgYXQgdGhlIFBpZWNlcw==',
        Lyrics: 'V2hlbiBJIGRpZSBhbmQgdGhleSBsYXkgbWUgdG8gcmVzdA=='
    },
    {
        Id: 12012023,
        Name: 'VGFrZSBvbiBNZQ==',
        Artist: 'QS1oYQ==',
        Year: 1984,
        Album: 'SHVudGluZyBIaWdoIGFuZCBMb3c=',
        Lyrics: 'U28gbmVlZGxlc3MgdG8gc2F5IEknbSBvZGRzIGFuZCBlbmRz'
    },
    {
        Id: 18022023,
        Name: 'RHJhZ29zdGVhIERpbiBUZWk=',
        Artist: 'Ty1ab25l',
        Year: 2004,
        Album: 'RGlzY08tWm9uZQ==',
        Lyrics: 'TWEtaS1hLWhpLCBtYS1pLWEgaHU='
    },
    {
        Id: 25102023,
        Name: 'SGVhdmVuIGlzIGEgUGxhY2Ugb24gRWFydGg=',
        Artist: 'QmVsaW5kYSBDYXJsaXNsZQ==',
        Year: 1987,
        Album: 'SGVhdmVuIG9uIEVhcnRo',
        Lyrics: 'VGhleSBzYXkgaW4gaGVhdmVuIGxvdmVzIGNvbWVzIGZpcnN0'
    },
    {
        Id: 20082023,
        Name: 'U3Bpbm5pbmcgQXJvdW5k',
        Artist: 'S3lsaWUgTWlub2d1ZQ==',
        Year: 2000,
        Album: 'TGlnaHQgWWVhcnM=',
        Lyrics: 'SSdtIGJyZWFraW4nIGl0IGRvd24sIEknbSBub3QgdGhlIHNhbWU='
    },
    {
        Id: 30112022,
        Name: 'VGVlbmFnZSBEaXJ0YmFn',
        Artist: 'V2hlYXR1cw==',
        Year: 2000,
        Album: 'V2hlYXR1cw==',
        Lyrics: 'SSd2ZSBnb3QgdHdvIHRpY2tldHMgdG8gSXJvbiBNYWlkZW4gYmFieQ=='
    },
    {
        Id: 31032023,
        Name: 'U2V4IEJvbWI=',
        Artist: 'VG9tIEpvbmVz',
        Year: 1999,
        Album: 'UmVsb2Fk',
        Lyrics: 'WW91IGNhbiBnaXZlIGl0IHRvIG1lIHdoZW4gSSBuZWVkIHRvIGNvbWUgYWxvbmc='
    },
    {
        Id: 19092022,
        Name: 'UG9pc29u',
        Artist: 'QWxpY2UgQ29vcGVy',
        Year: 1989,
        Album: 'VHJhc2g=',
        Lyrics: 'SSBoZWFyIHlvdSBjYWxsaW5nIGFuZCBpdCdzIG5lZWRsZXMgYW5kIHBpbnM='
    },
    {
        Id: 3122023,
        Name: 'V2FubmFiZQ==',
        Artist: 'U3BpY2UgR2lybHM=',
        Year: 1996,
        Album: 'U3BpY2U=',
        Lyrics: 'SWYgeW91IHdhbm5hIGdldCB3aXRoIG1lIGJldHRlciBtYWtlIGl0IGZhc3Q='
    },
    {
        Id: 1122022,
        Name: 'U3BpY2UgVXAgWW91ciBMaWZl',
        Artist: 'U3BpY2UgR2lybHM=',
        Year: 1997,
        Album: 'U3BpY2V3b3JsZA==',
        Lyrics: 'U2hha2UgaXQgdG8gdGhlIHJpZ2h0IGlmIHlvdSBrbm93IHRoYXQgeW91IGZlZWwgZmluZQ=='
    },
    {
        Id: 19082023,
        Name: 'TW1tYm9w',
        Artist: 'SGFuc29u',
        Year: 1997,
        Album: 'TWlkZGxlIG9mIE5vd2hlcmU=',
        Lyrics: 'QW5kIHdoZW4geW91IGdldCBvbGQgYW5kIHN0YXJ0IGxvc2luZyB5b3VyIGhhaXI='
    },
    {
        Id: 19042023,
        Name: 'Um9jayBESg==',
        Artist: 'Um9iYmllIFdpbGxpYW1z',
        Year: 2000,
        Album: 'U2luZyBXaGVuIFlvdSdyZSBXaW5uaW5n',
        Lyrics: 'SSd2ZSBnb3QgdGhlIGdpZnQsIGdvbm5hIHN0aWNrIGl0IGluIHRoZSBnb2Fs'
    },
    {
        Id: 13032023,
        Name: 'QW5nZWxz',
        Artist: 'Um9iYmllIFdpbGxpYW1z',
        Year: 2002,
        Album: 'VGhlIEVnbyBIYXMgTGFuZGVk',
        Lyrics: 'U2hlIG9mZmVycyBtZSBwcm90ZWN0aW9u'
    },
    {
        Id: 24092023,
        Name: 'SSBXYW50IGl0IHRoYXQgV2F5',
        Artist: 'QmFja3N0cmVldCBCb3lz',
        Year: 1999,
        Album: 'TWlsbGVubml1bQ==',
        Lyrics: 'QmVsaWV2ZSB3aGVuIEkgc2F5'
    },
    {
        Id: 8052023,
        Name: 'QnllIEJ5ZSBCeWU=',
        Artist: 'TipTeW5j',
        Year: 2000,
        Album: 'Tm8gU3RyaW5ncyBBdHRhY2hlZA==',
        Lyrics: 'U28gbm93IGl0J3MgdGltZSB0byBsZWF2ZSBhbmQgbWFrZSBpdCBhbG9uZQ=='
    },
    {
        Id: 13102022,
        Name: 'TXlzdGVyaW91cyBHaXJs',
        Artist: 'UGV0ZXIgQW5kcmU=',
        Year: 1996,
        Album: 'TmF0dXJhbA==',
        Lyrics: 'SSB3YW5uYSBnZXQgY2xvc2UgdG8geW91'
    },
    {
        Id: 17042023,
        Name: 'TWFuIEkgRmVlbCBMaWtlIGEgV29tYW4=',
        Artist: 'U2hhbmlhIFR3YWlu',
        Year: 1999,
        Album: 'Q29tZSBPbiBPdmVy',
        Lyrics: 'R28gdG90YWxseSBjcmF6eSwgZm9yZ2V0IEknbSBhIGxhZHk='
    },
    {
        Id: 2062023,
        Name: 'QmFyYmllIEdpcmw=',
        Artist: 'QXF1YQ==',
        Year: 1997,
        Album: 'QXF1YXJpdW0=',
        Lyrics: 'SW1hZ2luYXRpb24sIGxpZmUgaXMgeW91ciBjcmVhdGlvbg=='
    },
    {
        Id: 25092022,
        Name: 'RG9jdG9yIEpvbmVz',
        Artist: 'QXF1YQ==',
        Year: 1997,
        Album: 'QXF1YXJpdW0=',
        Lyrics: 'UGxlYXNlLCBwbGVhc2UsIGN1cmUgbWU='
    },
    {
        Id: 5072023,
        Name: 'S3VuZyBGdSBGaWdodGluZw==',
        Artist: 'Q2FybCBEb3VnbGFz',
        Year: 1984,
        Album: 'S3VuZyBGdSBGaWdodGluZyBhbmQgT3RoZXIgR3JlYXQgTG92ZSBTb25ncw==',
        Lyrics: 'SXQncyBhbiBhbmNpZW50IENoaW5lc2UgYXJ0'
    },
    {
        Id: 15122022,
        Name: 'TG92ZSBZb3UgTGlrZSBhIExvdmUgU29uZw==',
        Artist: 'U2VsZW5hIEdvbWV6ICYgdGhlIFNjZW5l',
        Year: 2011,
        Album: 'V2hlbiB0aGUgU3VuIEdvZXMgRG93bg==',
        Lyrics: 'U28geW91ciBtZWxvZHkgd2lsbCBwbGF5IG9uIGFuZCBvbg=='
    },
    {
        Id: 11032023,
        Name: 'SGFuZHMgdG8gTXlzZWxm',
        Artist: 'U2VsZW5hIEdvbWV6',
        Year: 2016,
        Album: 'UmV2aXZhbA==',
        Lyrics: 'SSBtZWFuIEkgY291bGQgYnV0IHdoeSB3b3VsZCBJIHdhbnQgdG8='
    },
    {
        Id: 30092023,
        Name: 'QWxsIHRoZSBTbWFsbCBUaGluZ3M=',
        Artist: 'QmxpbmstMTgy',
        Year: 2000,
        Album: 'RW5lbWEgb2YgdGhlIFN0YXRl',
        Lyrics: 'VHVybiB0aGUgbGlnaHRzIG9mZiwgY2FycnkgbWUgaG9tZQ=='
    },
    {
        Id: 20052023,
        Name: 'RGF5IGFuZCBOaWdodA==',
        Artist: 'QmlsbGllIFBpcGVy',
        Year: 2000,
        Album: 'V2FsayBvZiBMaWZl',
        Lyrics: 'QWxsIG9mIHRoZSBkYXksIGFsbCBvZiB0aGUgbmlnaHQ='
    },
    {
        Id: 10092023,
        Name: 'TGlmZSBpcyBhIFJvbGxlcmNvYXN0ZXI=',
        Artist: 'Um9uYW4gS2VhdGluZw==',
        Year: 2000,
        Album: 'Um9uYW4=',
        Lyrics: 'SSBuZWVkIHlvdSwgc28gc3RvcCBoaWRpbmc='
    },
    {
        Id: 27112023,
        Name: 'UHVyZSBTaG9yZXM=',
        Artist: 'QWxsIFNhaW50cw==',
        Year: 2000,
        Album: 'U2FpbnRzICYgU2lubmVycw==',
        Lyrics: 'SXQncyBjYWxsaW5nIHlvdSBteSBkZWFy'
    },
    {
        Id: 13112022,
        Name: 'V2hvIExldCB0aGUgRG9ncyBPdXQ=',
        Artist: 'QmFoYSBNZW4=',
        Year: 2000,
        Album: 'V2hvIExldCB0aGUgRG9ncyBPdXQ=',
        Lyrics: 'VGhlIHBhcnR5IHdhcyBuaWNlLCB0aGUgcGFydHkgd2FzIHB1bXBpbic='
    },
    {
        Id: 18052023,
        Name: 'QWxsIFJpc2U=',
        Artist: 'Qmx1ZQ==',
        Year: 2001,
        Album: 'QWxsIFJpc2U=',
        Lyrics: 'T25lIGZvciB0aGUgbW9uZXkgYW5kIHRoZSBmcmVlIHJpZGVz'
    },
    {
        Id: 22102022,
        Name: 'U3Vydml2b3I=',
        Artist: 'RGVzdGlueSdzIENoaWxk',
        Year: 2001,
        Album: 'U3Vydml2b3I=',
        Lyrics: 'WW91IHRob3VnaHQgdGhhdCBJJ2QgYmUgd2VhayB3aXRob3V0IHlvdSwgYnV0IEknbSBzdHJvbmdlcg=='
    },
    {
        Id: 3022023,
        Name: 'TXVyZGVyIG9uIHRoZSBEYW5jZWZsb29y',
        Artist: 'U29waGllIEVsbGlzLUJleHRvcg==',
        Year: 2001,
        Album: 'UmVhZCBNeSBMaXBz',
        Lyrics: 'R29ubmEgYnVybiB0aGlzIGdvZGRhbW4gaG91c2UgcmlnaHQgZG93bg=='
    },
    {
        Id: 11082023,
        Name: 'UHVycGxlIFJhaW4=',
        Artist: 'UHJpbmNlIGFuZCB0aGUgUmV2b2x1dGlvbg==',
        Year: 1984,
        Album: 'UHVycGxlIFJhaW4=',
        Lyrics: 'SSBuZXZlciB3YW50ZWQgdG8gYmUgeW91ciB3ZWVrZW5kIGxvdmVy'
    },
    {
        Id: 5022023,
        Name: 'RXZhY3VhdGUgdGhlIERhbmNlZmxvb3I=',
        Artist: 'Q2FzY2FkYQ==',
        Year: 2009,
        Album: 'RXZhY3VhdGUgdGhlIERhbmNlZmxvb3I=',
        Lyrics: 'U3RlYWwgdGhlIG5pZ2h0LCBraWxsIHRoZSBsaWdodHMsIGZlZWwgaXQgdW5kZXIgeW91ciBza2lu'
    },
    {
        Id: 8112022,
        Name: 'SGFsbw==',
        Artist: 'QmV5b25j6Q==',
        Year: 2008,
        Album: 'SSBBbS4uLiBTYXNoYSBGaWVyY2U=',
        Lyrics: 'WW91IGtub3cgeW91J3JlIG15IHNhdmluJyBncmFjZQ=='
    },
    {
        Id: 27042023,
        Name: 'SSBLaXNzZWQgYSBHaXJs',
        Artist: 'S2F0eSBQZXJyeQ==',
        Year: 2008,
        Album: 'T25lIG9mIHRoZSBCb3lz',
        Lyrics: 'WW91J3JlIG15IGV4cGVyaW1lbnRhbCBnYW1l'
    },
    {
        Id: 1072023,
        Name: 'Um9hcg==',
        Artist: 'S2F0eSBQZXJyeQ==',
        Year: 2013,
        Album: 'UHJpc20=',
        Lyrics: 'SSBnb3QgdGhlIGV5ZSBvZiB0aGUgdGlnZXI='
    },
    {
        Id: 10112022,
        Name: 'VGlLIFRvSw==',
        Artist: 'S2UkaGE=',
        Year: 2010,
        Album: 'QW5pbWFs',
        Lyrics: 'RG9uJ3Qgc3RvcCwgbWFrZSBpdCBwb3A='
    },
    {
        Id: 31122022,
        Name: 'V3JlY2tpbmcgQmFsbA==',
        Artist: 'TWlsZXkgQ3lydXM=',
        Year: 2013,
        Album: 'QmFuZ2Vyeg==',
        Lyrics: 'QWxsIHlvdSBldmVyIGRpZCB3YXMgd3JlY2sgbWU='
    },
    {
        Id: 17102022,
        Name: 'VGhlIENsaW1i',
        Artist: 'TWlsZXkgQ3lydXM=',
        Year: 2009,
        Album: 'VGhlIFRpbWUgT2YgT3VyIExpdmVz',
        Lyrics: 'VGhlcmUncyBhbHdheXMgZ29ubmEgYmUgYW5vdGhlciBtb3VudGFpbg=='
    },
    {
        Id: 29062023,
        Name: 'TG92ZSBNZSBsaWtlIFlvdSBEbw==',
        Artist: 'RWxsaWUgR291bGRpbmc=',
        Year: 2015,
        Album: 'RmlmdHkgU2hhZGVzIG9mIEdyZXk6IE9yaWdpbmFsIE1vdGlvbiBQaWN0dXJlIFNvdW5kdHJhY2s=',
        Lyrics: 'WW91J3JlIHRoZSBvbmx5IHRoaW5nIEkgd2FubmEgdG91Y2g='
    },
    {
        Id: 18082023,
        Name: 'QWxsIEFib3V0IFRoYXQgQmFzcw==',
        Artist: 'TWVnaGFuIFRyYWlub3I=',
        Year: 2014,
        Album: 'VGl0bGU=',
        Lyrics: 'SSBzZWUgdGhlIG1hZ2F6aW5lIHdvcmtpbicgdGhhdCBQaG90b3Nob3A='
    },
    {
        Id: 10092022,
        Name: 'RGVhciBGdXR1cmUgSHVzYmFuZA==',
        Artist: 'TWVnaGFuIFRyYWlub3I=',
        Year: 2015,
        Album: 'VGl0bGU=',
        Lyrics: 'WW91J3ZlIGdvdHRhIGtub3cgaG93IHRvIHRyZWF0IG1lIGxpa2UgYSBsYWR5'
    },
    {
        Id: 28102022,
        Name: 'SG9sZCBJdCBBZ2FpbnN0IE1l',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2011,
        Album: 'RmVtbWUgRmF0YWxl',
        Lyrics: 'SWYgd2UgY291bGQgZXNjYXBlIHRoZSBjcm93ZCBzb21laG93'
    },
    {
        Id: 23122022,
        Name: 'V29tYW5pemVy',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2008,
        Album: 'Q2lyY3Vz',
        Lyrics: 'WW91IGdvdCBhbGwgdGhlIHB1cHBldHMgd2l0aCB0aGVpciBzdHJpbmdzIHVw'
    },
    {
        Id: 14072023,
        Name: 'THVja3k=',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2000,
        Album: 'T29wcyEgSSBEaWQgSXQgQWdhaW4=',
        Lyrics: 'RWFybHkgbW9ybmluZywgc2hlIHdha2VzIHVw'
    },
    {
        Id: 25042023,
        Name: 'SG9saWRheQ==',
        Artist: 'R3JlZW4gRGF5',
        Year: 2004,
        Album: 'QW1lcmljYW4gSWRpb3Q=',
        Lyrics: 'Q29taW5nIGRvd24gbGlrZSBhbiBBcm1hZ2VkZG9uIGZsYW1l'
    },
    {
        Id: 15102022,
        Name: 'U2t5c2NyYXBlcg==',
        Artist: 'RGVtaSBMb3ZhdG8=',
        Year: 2011,
        Album: 'VW5icm9rZW4=',
        Lyrics: 'SSBhbSBjbG9zZXIgdG8gdGhlIGNsb3VkcyB1cCBoZXJl'
    },
    {
        Id: 23062023,
        Name: 'U29ycnkgTm90IFNvcnJ5',
        Artist: 'RGVtaSBMb3ZhdG8=',
        Year: 2017,
        Album: 'VGVsbCBNZSBZb3UgTG92ZSBNZQ==',
        Lyrics: 'QnJpZ2h0IGFzIFRlY2huaWNvbG9yLCBJIGNhbiB0ZWxsIHRoYXQgeW91IGNhbiBzZWU='
    },
    {
        Id: 26102022,
        Name: 'U3Rhbg==',
        Artist: 'RW1pbmVt',
        Year: 2000,
        Album: 'VGhlIE1hcnNoYWxsIE1hdGhlcnMgTFA=',
        Lyrics: 'VGhlcmUgcHJvYmFibHkgd2FzIGEgcHJvYmxlbSBhdCB0aGUgcG9zdCBvZmZpY2Ugb3Igc29tZXRoaW4n'
    },
    {
        Id: 6032023,
        Name: 'TW9ja2luZ2JpcmQ=',
        Artist: 'RW1pbmVt',
        Year: 2005,
        Album: 'RW5jb3Jl',
        Lyrics: 'SHVzaCBsaXR0bGUgYmFieSwgZG9uJ3QgeW91IGNyeQ=='
    },
    {
        Id: 22082023,
        Name: 'RE5B',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2012,
        Album: 'RE5B',
        Lyrics: 'SXQncyB0aGUgYmx1ZSBpbiBoaXMgZXllcyB0aGF0IGhlbHBzIG1lIHNlZSB0aGUgZnV0dXJl'
    },
    {
        Id: 26092022,
        Name: 'VG91Y2g=',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2016,
        Album: 'R2xvcnkgRGF5cw==',
        Lyrics: 'TWFzdGVyIG9mIGFudGljaXBhdGlvbiwgZG9uJ3QgeW91IGtlZXAgaXQgYWxsIHRvIHlvdXJzZWxm'
    },
    {
        Id: 8042023,
        Name: 'U2hvdXQgT3V0IHRvIE15IEV4',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2016,
        Album: 'R2xvcnkgRGF5cw==',
        Lyrics: 'VG9vayBmb3VyIGxvbmcgeWVhcnMgdG8gY2FsbCBpdCBxdWl0cw=='
    },
    {
        Id: 26082022,
        Name: 'TWlzZXJ5IEJ1c2luZXNz',
        Artist: 'UGFyYW1vcmU=',
        Year: 2007,
        Album: 'UmlvdCE=',
        Lyrics: 'VGhlcmUncyBhIG1pbGxpb24gb3RoZXIgZ2lybHMgd2hvIGRvIGl0IGp1c3QgbGlrZSB5b3U='
    },
    {
        Id: 22042023,
        Name: 'TW9yZSBUaGFuIGEgRmVlbGluZw==',
        Artist: 'Qm9zdG9u',
        Year: 1976,
        Album: 'Qm9zdG9u',
        Lyrics: 'V2hlbiBJIGhlYXIgdGhhdCBvbGQgc29uZyB0aGV5IHVzZWQgdG8gcGxheQ=='
    },
    {
        Id: 16092023,
        Name: 'U21va2Ugb24gdGhlIFdhdGVy',
        Artist: 'RGVlcCBQdXJwbGU=',
        Year: 1972,
        Album: 'TWFjaGluZSBIZWFk',
        Lyrics: 'VGhleSBidXJuZWQgZG93biB0aGUgZ2FtYmxpbmcgaG91c2U='
    },
    {
        Id: 9012023,
        Name: 'VGFrZSBNZSBPdXQ=',
        Artist: 'RnJhbnogRmVyZGluYW5k',
        Year: 2004,
        Album: 'RnJhbnogRmVyZGluYW5k',
        Lyrics: 'SSBrbm93IEkgd29uJ3QgYmUgbGVhdmluZyBoZXJl'
    },
    {
        Id: 12102023,
        Name: 'Q2FycnkgT24gV2F5d2FyZCBTb24=',
        Artist: 'S2Fuc2Fz',
        Year: 1977,
        Album: 'TGVmdG92ZXJ0dXJl',
        Lyrics: 'SSBoZWFyIHRoZSB2b2ljZXMgd2hlbiBJJ20gZHJlYW1pbmc='
    },
    {
        Id: 4042023,
        Name: 'QW55IFdheSBZb3UgV2FudCBJdA==',
        Artist: 'Sm91cm5leQ==',
        Year: 1980,
        Album: 'RGVwYXJ0dXJl',
        Lyrics: 'SSBuZXZlciBrbmV3IHdoYXQgZ29vZCBsb3ZlIGNvdWxkIGRv'
    },
    {
        Id: 14082023,
        Name: 'RXllIG9mIHRoZSBUaWdlcg==',
        Artist: 'U3Vydml2b3I=',
        Year: 1982,
        Album: 'RXllIG9mIHRoZSBUaWdlcg==',
        Lyrics: 'WW91IHRyYWRlIHlvdXIgcGFzc2lvbiBmb3IgZ2xvcnk='
    },
    {
        Id: 1092022,
        Name: 'SG90ZWwgQ2FsaWZvcm5pYQ==',
        Artist: 'RWFnbGVz',
        Year: 1977,
        Album: 'SG90ZWwgQ2FsaWZvcm5pYQ==',
        Lyrics: 'VGhpcyBjb3VsZCBiZSBIZWF2ZW4gb3IgdGhpcyBjb3VsZCBiZSBIZWxs'
    },
    {
        Id: 17012023,
        Name: 'T25lIFdheSBvciBBbm90aGVy',
        Artist: 'QmxvbmRpZQ==',
        Year: 1978,
        Album: 'UGFyYWxsZWwgTGluZXM=',
        Lyrics: 'T25lIGRheSwgbWF5YmUgbmV4dCB3ZWVrLCBJJ20gZ29ubmEgbWVldCB5b3U='
    },
    {
        Id: 24102022,
        Name: 'Qm9ybiB0byBSdW4=',
        Artist: 'QnJ1Y2UgU3ByaW5nc3RlZW4=',
        Year: 1975,
        Album: 'Qm9ybiB0byBSdW4=',
        Lyrics: 'V2lsbCB5b3Ugd2FsayB3aXRoIG1lIG91dCBvbiB0aGUgd2lyZT8='
    },
    {
        Id: 28072023,
        Name: 'SW4gdGhlIFNoYWRvd3M=',
        Artist: 'VGhlIFJhc211cw==',
        Year: 2003,
        Album: 'RGVhZCBMZXR0ZXJz',
        Lyrics: 'SSd2ZSBiZWVuIHdhdGNoaW4nLCBJJ3ZlIGJlZW4gd2FpdGluJw=='
    },
    {
        Id: 23092023,
        Name: 'U28gV2hhdA==',
        Artist: 'UGluaw==',
        Year: 2008,
        Album: 'RnVuaG91c2U=',
        Lyrics: 'SSB3YW5uYSBnZXQgaW4gdHJvdWJsZSwgSSB3YW5uYSBzdGFydCBhIGZpZ2h0'
    },
    {
        Id: 15082023,
        Name: 'VGhlIFRvdWNo',
        Artist: 'U3RhbiBCdXNo',
        Year: 1986,
        Album: 'VGhlIFRyYW5zZm9ybWVyczogVGhlIE1vdmllOiBPcmlnaW5hbCBNb3Rpb24gUGljdHVyZSBTb3VuZHRyYWNr',
        Lyrics: 'WW91J3JlIGF0IHlvdXIgYmVzdCB3aGVuIHRoZSBnb2luZyBnZXRzIHJvdWdo'
    },
    {
        Id: 25022023,
        Name: 'U21lbGxzIExpa2UgVGVlbiBTcGlyaXQ=',
        Artist: 'TmlydmFuYQ==',
        Year: 1992,
        Album: 'TmV2ZXJtaW5k',
        Lyrics: 'SSBmZWVsIHN0dXBpZCBhbmQgY29udGFnaW91cw=='
    },
    {
        Id: 6022023,
        Name: 'QmlsbGllIEplYW4=',
        Artist: 'TWljaGFlbCBKYWNrc29u',
        Year: 1983,
        Album: 'VGhyaWxsZXI=',
        Lyrics: 'QnV0IHRoZSBraWQgaXMgbm90IG15IHNvbg=='
    },
    {
        Id: 23012023,
        Name: 'SSBXaWxsIFN1cnZpdmU=',
        Artist: 'R2xvcmlhIEdheW5vcg==',
        Year: 1978,
        Album: 'TG92ZSBUcmFja3M=',
        Lyrics: 'SSBzaG91bGQgaGF2ZSBjaGFuZ2VkIHRoYXQgc3R1cGlkIGxvY2s='
    },
    {
        Id: 1042023,
        Name: 'U3RhaXJ3YXkgdG8gSGVhdmVu',
        Artist: 'TGVkIFplcHBlbGlu',
        Year: 1971,
        Album: 'TGVkIFplcHBlbGluIElW',
        Lyrics: 'SXQgbWFrZXMgbWUgd29uZGVy'
    },
    {
        Id: 6052023,
        Name: 'U2VwdGVtYmVy',
        Artist: 'RWFydGgsIFdpbmQgJiBGaXJl',
        Year: 1978,
        Album: 'VGhlIEJlc3Qgb2YgRWFydGgsIFdpbmQgJiBGaXJlLCBWb2wuIDE=',
        Lyrics: 'V2hpbGUgY2hhc2luJyB0aGUgY2xvdWRzIGF3YXk='
    },
    {
        Id: 19102023,
        Name: 'V2VsY29tZSB0byB0aGUgSnVuZ2xl',
        Artist: 'R3VucyBOJyBSb3Nlcw==',
        Year: 1987,
        Album: 'QXBwZXRpdGUgZm9yIERlc3RydWN0aW9u',
        Lyrics: 'V2UgZ290IGZ1biBhbmQgZ2FtZXM='
    },
    {
        Id: 17032023,
        Name: 'RGVzcGFjaXRv',
        Artist: 'THVpcyBGb25zaSAmIERhZGR5IFlhbmtlZQ==',
        Year: 2017,
        Album: 'VmlkYQ==',
        Lyrics: 'RGVqYSBxdWUgdGUgZGlnYSBjb3NhcyBhbCBv7WRv'
    },
    {
        Id: 18112023,
        Name: 'QW1lcmljYW4gUGll',
        Artist: 'RG9uIE1jTGVhbg==',
        Year: 1971,
        Album: 'QW1lcmljYW4gUGll',
        Lyrics: 'VGhpcydsbCBiZSB0aGUgZGF5IHRoYXQgSSBkaWU='
    },
    {
        Id: 15022023,
        Name: 'U21vb3RoIENyaW1pbmFs',
        Artist: 'TWljaGFlbCBKYWNrc29u',
        Year: 1988,
        Album: 'QmFk',
        Lyrics: 'SGUgbGVmdCB0aGUgYmxvb2RzdGFpbnMgb24gdGhlIGNhcnBldA=='
    },
    {
        Id: 18092022,
        Name: 'UmluZyBvZiBGaXJl',
        Artist: 'Sm9obm55IENhc2g=',
        Year: 1963,
        Album: 'UmluZyBvZiBGaXJlOiBUaGUgQmVzdCBvZiBKb2hubnkgQ2FzaA==',
        Lyrics: 'QW5kIHRoZSBmbGFtZXMgd2VudCBoaWdoZXI='
    },
    {
        Id: 4092022,
        Name: 'Q2FyZWxlc3MgV2hpc3Blcg==',
        Artist: 'R2VvcmdlIE1pY2hhZWw=',
        Year: 1984,
        Album: 'TWFrZSBJdCBCaWc=',
        Lyrics: 'SSdtIG5ldmVyIGdvbm5hIGRhbmNlIGFnYWlu'
    },
    {
        Id: 7032023,
        Name: 'U2hha2UgaXQgT2Zm',
        Artist: 'VGF5bG9yIFN3aWZ0',
        Year: 2014,
        Album: 'MTk4OQ==',
        Lyrics: 'QnV0IEkga2VlcCBjcnVpc2luJw=='
    },
    {
        Id: 9052023,
        Name: 'Um9sbGluZyBpbiB0aGUgRGVlcA==',
        Artist: 'QWRlbGU=',
        Year: 2010,
        Album: 'MjE=',
        Lyrics: 'V2UgY291bGQndmUgaGFkIGl0IGFsbA=='
    },
    {
        Id: 9082023,
        Name: 'RmlyZXdvcms=',
        Artist: 'S2F0eSBQZXJyeQ==',
        Year: 2010,
        Album: 'VGVlbmFnZSBEcmVhbQ==',
        Lyrics: 'RG8geW91IGV2ZXIgZmVlbCBsaWtlIGEgcGxhc3RpYyBiYWc='
    },
    {
        Id: 29122023,
        Name: 'UmVoYWI=',
        Artist: 'QW15IFdpbmVob3VzZQ==',
        Year: 2006,
        Album: 'QmFjayB0byBCbGFjaw==',
        Lyrics: 'WWVzLCBJJ3ZlIGJlZW4gYmxhY2ssIGJ1dCB3aGVuIEkgY29tZSBiYWNr'
    },
    {
        Id: 23072023,
        Name: 'VXB0b3duIEZ1bms=',
        Artist: 'TWFyayBSb25zb24gJiBCcnVubyBNYXJz',
        Year: 2014,
        Album: 'VXB0b3duIFNwZWNpYWw=',
        Lyrics: 'VGhpcyBvbmUgZm9yIHRoZW0gaG9vZCBnaXJscw=='
    },
    {
        Id: 26082023,
        Name: 'SG9sbGFiYWNrIEdpcmw=',
        Artist: 'R3dlbiBTdGVmYW5p',
        Year: 2005,
        Album: 'TG92ZS4gQW5nZWwuIE11c2ljLiBCYWJ5',
        Lyrics: 'QSBmZXcgdGltZXMgSSd2ZSBiZWVuIGFyb3VuZCB0aGF0IHRyYWNr'
    },
    {
        Id: 15062023,
        Name: 'Um95YWxz',
        Artist: 'TG9yZGU=',
        Year: 2013,
        Album: 'UHVyZSBIZXJvaW5l',
        Lyrics: 'V2UgY3JhdmUgYSBkaWZmZXJlbnQga2luZCBvZiBidXp6'
    },
    {
        Id: 18042023,
        Name: 'R29vZCBhcyBIZWxs',
        Artist: 'TGl6em8=',
        Year: 2016,
        Album: 'Q3V6IEkgTG92ZSBZb3U=',
        Lyrics: 'SnVzdCB3YWxrIHlvdXIgZmluZSBhc3Mgb3V0IHRoZSBkb29y'
    },
    {
        Id: 18012023,
        Name: 'ZHJpdmVycyBsaWNlbnNl',
        Artist: 'T2xpdmlhIFJvZHJpZ28=',
        Year: 2021,
        Album: 'U291cg==',
        Lyrics: 'U2hlJ3MgZXZlcnl0aGluZyBJJ20gaW5zZWN1cmUgYWJvdXQ='
    },
    {
        Id: 12122023,
        Name: 'SGFwcHk=',
        Artist: 'UGhhcnJlbGwgV2lsbGlhbXM=',
        Year: 2013,
        Album: 'R2lybA==',
        Lyrics: 'SXQgbWlnaHQgc2VlbSBjcmF6eSB3aGF0IEknbSAnYm91dCB0byBzYXk='
    },
    {
        Id: 6122023,
        Name: 'TWlsa3NoYWtl',
        Artist: 'S2VsaXM=',
        Year: 2003,
        Album: 'VGFzdHk=',
        Lyrics: 'SSBjYW4gdGVhY2ggeW91LCBidXQgSSBoYXZlIHRvIGNoYXJnZQ=='
    },
    {
        Id: 7112022,
        Name: 'U2luY2UgVSBCZWVuIEdvbmU=',
        Artist: 'S2VsbHkgQ2xhcmtzb24=',
        Year: 2004,
        Album: 'QnJlYWthd2F5',
        Lyrics: 'WW91IGhhZCB5b3VyIGNoYW5jZSwgeW91IGJsZXcgaXQ='
    },
    {
        Id: 14062023,
        Name: 'U3VzcGljaW91cyBNaW5kcw==',
        Artist: 'RWx2aXMgUHJlc2xleQ==',
        Year: 1969,
        Album: 'RnJvbSBFbHZpcyBpbiBNZW1waGlz',
        Lyrics: 'QmVjYXVzZSBJIGxvdmUgeW91IHRvbyBtdWNoIGJhYnk='
    },
    {
        Id: 5122023,
        Name: 'T25lIE1vcmUgVGltZQ==',
        Artist: 'RGFmdCBQdW5r',
        Year: 2000,
        Album: 'RGlzY292ZXJ5',
        Lyrics: 'V2UncmUgZ29ubmEgY2VsZWJyYXRl'
    },
    {
        Id: 24072023,
        Name: 'V29uZGVyd2FsbA==',
        Artist: 'T2FzaXM=',
        Year: 1995,
        Album: 'KFdoYXQncyB0aGUgU3RvcnkpIE1vcm5pbmcgR2xvcnk/',
        Lyrics: 'QW5kIGFmdGVyIGFsbA=='
    },
    {
        Id: 21122022,
        Name: 'V2FsayBUaGlzIFdheQ==',
        Artist: 'UnVuLUQuTS5DLiAmIEFlcm9zbWl0aA==',
        Year: 1975,
        Album: 'VG95cyBpbiB0aGUgQXR0aWM=',
        Lyrics: 'QW5kIHRoZXkgc3dpbmdpbmcgbGlrZSBpdCBqdXN0IGRvbid0IGNhcmU='
    },
    {
        Id: 4072023,
        Name: 'Wm9tYmll',
        Artist: 'VGhlIENyYW5iZXJyaWVz',
        Year: 1994,
        Album: 'Tm8gTmVlZCB0byBBcmd1ZQ==',
        Lyrics: 'QW5vdGhlciBoZWFkIGhhbmdzIGxvd2x5'
    },
    {
        Id: 13022023,
        Name: 'Q2FsaWZvcm5pY2F0aW9u',
        Artist: 'UmVkIEhvdCBDaGlsaSBQZXBwZXJz',
        Year: 2000,
        Album: 'Q2FsaWZvcm5pY2F0aW9u',
        Lyrics: 'UGF5IHlvdXIgc3VyZ2VvbiB2ZXJ5IHdlbGwgdG8gYnJlYWsgdGhlIHNwZWxsIG9mIGFnaW5n'
    },
    {
        Id: 28082023,
        Name: 'TG9zaW5nIE15IFJlbGlnaW9u',
        Artist: 'Ui5FLk0u',
        Year: 1991,
        Album: 'T3V0IG9mIFRpbWU=',
        Lyrics: 'SSB0aG91Z2h0IHRoYXQgSSBoZWFyZCB5b3UgbGF1Z2hpbmc='
    },
    {
        Id: 16032023,
        Name: 'QWx3YXlz',
        Artist: 'Qm9uIEpvdmk=',
        Year: 1994,
        Album: 'Q3Jvc3MgUm9hZA==',
        Lyrics: 'SSdsbCBiZSB0aGVyZSB0aWxsIHRoZSBzdGFycyBkb24ndCBzaGluZQ=='
    },
    {
        Id: 24052023,
        Name: 'Qml0dGVyIFN3ZWV0IFN5bXBob255',
        Artist: 'VGhlIFZlcnZl',
        Year: 1997,
        Album: 'VXJiYW4gSHltbnM=',
        Lyrics: 'QnV0IEknbSBoZXJlIGluIG15IG1vdWxk'
    },
    {
        Id: 23102023,
        Name: 'Q3Jhenk=',
        Artist: 'QWVyb3NtaXRo',
        Year: 1994,
        Album: 'R2V0IGEgR3JpcA==',
        Lyrics: 'VGhhdCBraW5kYSBsb3ZpbmcgdHVybnMgYSBtYW4gdG8gYSBzbGF2ZQ=='
    },
    {
        Id: 19022023,
        Name: 'TWF0ZXJpYWwgR2lybA==',
        Artist: 'TWFkb25uYQ==',
        Year: 1984,
        Album: 'TGlrZSBhIFZpcmdpbg==',
        Lyrics: 'U29tZSBib3lzIHJvbWFuY2UsIHNvbWUgYm95cyBzbG93IGRhbmNl'
    },
    {
        Id: 11112022,
        Name: 'UGFyYWRpc2UgQ2l0eQ==',
        Artist: 'R3VucyBOJyBSb3Nlcw==',
        Year: 1989,
        Album: 'QXBwZXRpdGUgZm9yIERlc3RydWN0aW9u',
        Lyrics: 'SnVzdCBhbiB1cmNoaW4gbGl2aW5nIHVuZGVyIHRoZSBzdHJlZXQ='
    },
    {
        Id: 24082022,
        Name: 'SSBMaWtlIEl0',
        Artist: 'RW5yaXF1ZSBJZ2xlc2lhcw==',
        Year: 2010,
        Album: 'RXVwaG9yaWE=',
        Lyrics: 'Q29tZSBvbiBhbmQgZ2l2ZSBtZSBzb21lIG1vcmU='
    },
    {
        Id: 21012023,
        Name: 'RXZlcnkgQnJlYXRoIFlvdSBUYWtl',
        Artist: 'VGhlIFBvbGljZQ==',
        Year: 1983,
        Album: 'U3luY2hyb25pY2l0eQ==',
        Lyrics: 'U2luY2UgeW91J3ZlIGdvbmUsIEkndmUgYmVlbiBsb3N0IHdpdGhvdXQgYSB0cmFjZQ=='
    },
    {
        Id: 24012023,
        Name: 'V2hhdCBJcyBMb3Zl',
        Artist: 'SGFkZGF3YXk=',
        Year: 1993,
        Album: 'VGhlIEFsYnVt',
        Lyrics: 'RG9uJ3QgaHVydCBtZSwgbm8gbW9yZQ=='
    },
    {
        Id: 6112023,
        Name: 'WW91ciBTb25n',
        Artist: 'RWx0b24gSm9obg==',
        Year: 1970,
        Album: 'RWx0b24gSm9obg==',
        Lyrics: 'SXQncyBhIGxpdHRsZSBiaXQgZnVubnk='
    },
    {
        Id: 12042023,
        Name: 'TmV3IFJ1bGVz',
        Artist: 'RHVhIExpcGE=',
        Year: 2017,
        Album: 'RHVhIExpcGE=',
        Lyrics: 'WW91J2xsIGhhdmUgdG8ga2ljayBoaW0gb3V0IGFnYWlu'
    },
    {
        Id: 28032023,
        Name: 'SURHQUY=',
        Artist: 'RHVhIExpcGE=',
        Year: 2018,
        Album: 'RHVhIExpcGE=',
        Lyrics: 'U28gc2F2ZSBpdCwgZ2V0IGdvbmUsIHNodXQgdXA='
    },
    {
        Id: 2102023,
        Name: 'SSBEcm92ZSBBbGwgTmlnaHQ=',
        Artist: 'Um95IE9yYmlzb24=',
        Year: 1992,
        Album: 'S2luZyBvZiBIZWFydHM=',
        Lyrics: 'VGhpcyBmZXZlciBmb3IgeW91IGlzIGp1c3QgYnVybmluZyBtZSB1cCBpbnNpZGU='
    },
    {
        Id: 1012023,
        Name: 'U29tZW9uZSBMaWtlIFlvdQ==',
        Artist: 'QWRlbGU=',
        Year: 2011,
        Album: 'MjE=',
        Lyrics: 'SSBoZWFyZCB0aGF0IHlvdXIgZHJlYW1zIGNhbWUgdHJ1ZQ=='
    },
    {
        Id: 22092023,
        Name: 'V2FrZSBNZSBVcA==',
        Artist: 'QXZpY2lp',
        Year: 2013,
        Album: 'VHJ1ZQ==',
        Lyrics: 'QWxsIHRoaXMgdGltZSBJIHdhcyBmaW5kaW5nIG15c2VsZg=='
    },
    {
        Id: 27102022,
        Name: 'QmxpbmRpbmcgTGlnaHRz',
        Artist: 'VGhlIFdlZWtuZA==',
        Year: 2020,
        Album: 'QWZ0ZXIgSG91cnM=',
        Lyrics: 'SSdtIGdvaW5nIHRocm91Z2ggd2l0aGRyYXdhbHM='
    },
    {
        Id: 2072023,
        Name: 'UG9tcGVpaQ==',
        Artist: 'QmFzdGlsbGU=',
        Year: 2013,
        Album: 'QmFkIEJsb29k',
        Lyrics: 'RG9lcyBpdCBhbG1vc3QgZmVlbCBsaWtlIG5vdGhpbmcgY2hhbmdlZCBhdCBhbGw/'
    },
    {
        Id: 25112023,
        Name: 'Q2hhbmRlbGllcg==',
        Artist: 'U2lh',
        Year: 2014,
        Album: 'MTAwMCBGb3JtcyBvZiBGZWFy',
        Lyrics: 'S2VlcCBteSBnbGFzcyBmdWxsIHVudGlsIG1vcm5pbmcgbGlnaHQ='
    },
    {
        Id: 1102023,
        Name: 'Q2hlYXAgVGhyaWxscw==',
        Artist: 'U2lh',
        Year: 2015,
        Album: 'VGhpcyBJcyBBY3Rpbmc=',
        Lyrics: 'SSBkb24ndCBuZWVkIGRvbGxhciBiaWxscyB0byBoYXZlIGZ1biB0b25pZ2h0'
    },
    {
        Id: 31122023,
        Name: 'RmFpcnl0YWxlIG9mIE5ldyBZb3Jr',
        Artist: 'VGhlIFBvZ3VlcyBmZWF0LiBLaXJzdHkgTWFjQ29sbA==',
        Year: 1987,
        Album: 'SWYgSSBTaG91bGQgRmFsbCBmcm9tIEdyYWNlIHdpdGggR29k',
        Lyrics: 'WW91IHByb21pc2VkIG1lIEJyb2Fkd2F5IHdhcyB3YWl0aW5nIGZvciBtZQ=='
    },
    {
        Id: 17102023,
        Name: 'U2V4IG9uIEZpcmU=',
        Artist: 'S2luZ3Mgb2YgTGVvbg==',
        Year: 2008,
        Album: 'T25seSBieSB0aGUgTmlnaHQ=',
        Lyrics: 'TGF5IHdoZXJlIHlvdSdyZSBsYXlpbic='
    },
    {
        Id: 15122023,
        Name: 'Q2hhc2luZyBDYXJz',
        Artist: 'U25vdyBQYXRybw==',
        Year: 2006,
        Album: 'RXllcyBPcGVu',
        Lyrics: 'V291bGQgeW91IGxpZSB3aXRoIG1lIGFuZCBqdXN0IGZvcmdldCB0aGUgd29ybGQ/'
    },
    {
        Id: 4012023,
        Name: 'Q2xvc2Vy',
        Artist: 'VGhlIENoYWluc21va2VycyBmdC4gSGFsc2V5',
        Year: 2016,
        Album: 'Q2xvc2Vy',
        Lyrics: 'Qml0ZSB0aGF0IHRhdHRvbyBvbiB5b3VyIHNob3VsZGVy'
    },
    {
        Id: 14092022,
        Name: 'U2h1dCBVcCBhbmQgRGFuY2U=',
        Artist: 'V2FsayB0aGUgTW9vbg==',
        Year: 2014,
        Album: 'VGFsa2luZyBJcyBIYXJk',
        Lyrics: 'TXkgZGlzY290aOhxdWUgSnVsaWV0LCB0ZWVuYWdlIGRyZWFt'
    },
    {
        Id: 17052023,
        Name: 'SGF2YW5h',
        Artist: 'Q2FtaWxhIENhYmVsbG8gZnQuIFlvdW5nIFRodWc=',
        Year: 2017,
        Album: 'Q2FtaWxh',
        Lyrics: 'SGUgdG9vayBtZSBiYWNrIHRvIEVhc3QgQXRsYW50YQ=='
    },
    {
        Id: 10102022,
        Name: 'QmVsaWV2ZQ==',
        Artist: 'Q2hlcg==',
        Year: 1998,
        Album: 'QmVsaWV2ZQ==',
        Lyrics: 'SXQncyBzbyBzYWQgdGhhdCB5b3UncmUgbGVhdmluZw=='
    },
    {
        Id: 13092023,
        Name: 'Q291bnRpbmcgU3RhcnM=',
        Artist: 'T25lUmVwdWJsaWM=',
        Year: 2013,
        Album: 'TmF0aXZl',
        Lyrics: 'T2xkLCBidXQgSSdtIG5vdCB0aGF0IG9sZA=='
    },
    {
        Id: 4112023,
        Name: 'TGFzdCBDaHJpc3RtYXM=',
        Artist: 'V2hhbSE=',
        Year: 1984,
        Album: 'TXVzaWMgZnJvbSB0aGUgRWRnZSBvZiBIZWF2ZW4=',
        Lyrics: 'Tm93IEkga25vdyB3aGF0IGEgZm9vbCBJJ3ZlIGJlZW4='
    },
    {
        Id: 10122022,
        Name: 'SHVtYW4=',
        Artist: 'UmFnJ24nQm9uZSBNYW4=',
        Year: 2016,
        Album: 'SHVtYW4=',
        Lyrics: 'RG9uJ3QgcHV0IHlvdXIgYmxhbWUgb24gbWU='
    },
    {
        Id: 9062023,
        Name: 'SnVzdCB0aGUgV2F5IFlvdSBBcmU=',
        Artist: 'QnJ1bm8gTWFycw==',
        Year: 2010,
        Album: 'RG9vLVdvcHMgJiBIb29saWdhbnM=',
        Lyrics: 'U2hlJ3Mgc28gYmVhdXRpZnVsLCBhbmQgSSB0ZWxsIGhlciBldmVyeSBkYXk='
    },
    {
        Id: 26012023,
        Name: 'V2UgRm91bmQgTG92ZQ==',
        Artist: 'UmloYW5uYSBmdC4gQ2FsdmluIEhhcnJpcw==',
        Year: 2011,
        Album: 'VGFsayBUaGF0IFRhbGs=',
        Lyrics: 'U2hpbmUgYSBsaWdodCB0aHJvdWdoIGFuIG9wZW4gZG9vcg=='
    },
    {
        Id: 7102022,
        Name: 'TXkgSGVhcnQgV2lsbCBHbyBPbg==',
        Artist: 'Q2VsaW5lIERpb24=',
        Year: 1997,
        Album: 'TGV0J3MgVGFsayBBYm91dCBMb3Zl',
        Lyrics: 'T25jZSBtb3JlIHlvdSBvcGVuIHRoZSBkb29y'
    },
    {
        Id: 5082023,
        Name: 'TW92ZXMgTGlrZSBKYWdnZXI=',
        Artist: 'TWFyb29uIDUgZnQuIENocmlzdGluYSBBZ3VpbGVyYQ==',
        Year: 2010,
        Album: 'SGFuZHMgQWxsIE92ZXI=',
        Lyrics: 'SnVzdCBzaG9vdCBmb3IgdGhlIHN0YXJz'
    },
    {
        Id: 26062023,
        Name: 'Vml2YSBsYSBWaWRh',
        Artist: 'Q29sZHBsYXk=',
        Year: 2008,
        Album: 'Vml2YSBsYSBWaWRhIG9yIERlYXRoIGFuZCBBbGwgSGlzIEZyaWVuZHM=',
        Lyrics: 'SSB1c2VkIHRvIHJ1bGUgdGhlIHdvcmxk'
    },
    {
        Id: 13092022,
        Name: 'Rml4IFlvdQ==',
        Artist: 'Q29sZHBsYXk=',
        Year: 2005,
        Album: 'WCZZ',
        Lyrics: 'TGlnaHRzIHdpbGwgZ3VpZGUgeW91IGhvbWU='
    },
    {
        Id: 28022023,
        Name: 'Vm9zc2kgQm9w',
        Artist: 'U3Rvcm16eQ==',
        Year: 2019,
        Album: 'SGVhdnkgSXMgdGhlIEhlYWQ=',
        Lyrics: 'SSBwdXQgaW4gdGhlIHdvcmsgYW5kIHRha2UgdGhlIHByb2ZpdA=='
    },
    {
        Id: 15092023,
        Name: 'QmFjayBmb3IgR29vZA==',
        Artist: 'VGFrZSBUaGF0',
        Year: 1995,
        Album: 'Tm9ib2R5IEVsc2U=',
        Lyrics: 'R290IGEgZmlzdCBvZiBwdXJlIGVtb3Rpb24='
    },
    {
        Id: 19052023,
        Name: 'VW5jaGFpbmVkIE1lbG9keQ==',
        Artist: 'VGhlIFJpZ2h0ZW91cyBCcm90aGVycw==',
        Year: 1965,
        Album: 'SnVzdCBPbmNlIGluIE15IExpZmU=',
        Lyrics: 'QW5kIHRpbWUgZ29lcyBieSBzbyBzbG93bHk='
    },
    {
        Id: 12102022,
        Name: 'VG9ybg==',
        Artist: 'TmF0YWxpZSBJbWJydWdsaWE=',
        Year: 1997,
        Album: 'TGVmdCBvZiB0aGUgTWlkZGxl',
        Lyrics: 'SSdtIGFsbCBvdXQgb2YgZmFpdGg='
    },
    {
        Id: 22062023,
        Name: 'Tm8gU2NydWJz',
        Artist: 'VExD',
        Year: 1999,
        Album: 'RmFuTWFpbA==',
        Lyrics: 'SSBkb24ndCB3YW5uYSBtZWV0IHlvdSBub3doZXJl'
    },
    {
        Id: 27092023,
        Name: 'RGFuY2luZyBJbiB0aGUgTW9vbmxpZ2h0',
        Artist: 'VG9wbG9hZGVy',
        Year: 2000,
        Album: 'T25rYSdzIEJpZyBNb2th',
        Lyrics: 'SXQncyBhIHN1cGVybmF0dXJhbCBkZWxpZ2h0'
    },
    {
        Id: 10032023,
        Name: 'SGVybw==',
        Artist: 'RW5yaXF1ZSBJZ2xlc2lhcw==',
        Year: 2001,
        Album: 'RXNjYXBl',
        Lyrics: 'V291bGQgeW91IHNhdmUgbXkgc291bCB0b25pZ2h0Pw=='
    },
    {
        Id: 23052023,
        Name: 'RXNjYXBl',
        Artist: 'RW5yaXF1ZSBJZ2xlc2lhcw==',
        Year: 2001,
        Album: 'RXNjYXBl',
        Lyrics: 'SSdtIG5vdCBnb25uYSBiZWcgeW91IHRvIHN0YXk='
    },
    {
        Id: 5012023,
        Name: 'Q3JhenkgaW4gTG92ZQ==',
        Artist: 'QmV5b25j6Q==',
        Year: 2003,
        Album: 'RGFuZ2Vyb3VzbHkgaW4gTG92ZQ==',
        Lyrics: 'U3VjaCBhIGZ1bm55IHRoaW5nIGZvciBtZSB0byB0cnkgdG8gZXhwbGFpbg=='
    },
    {
        Id: 6092022,
        Name: 'SG93IHRvIFNhdmUgYSBMaWZl',
        Artist: 'VGhlIEZyYXk=',
        Year: 2006,
        Album: 'SG93IHRvIFNhdmUgYSBMaWZl',
        Lyrics: 'WW91IGJlZ2luIHRvIHdvbmRlciB3aHkgeW91IGNhbWU='
    },
    {
        Id: 7062023,
        Name: 'QmxlZWRpbmcgTG92ZQ==',
        Artist: 'TGVvbmEgTGV3aXM=',
        Year: 2007,
        Album: 'U3Bpcml0',
        Lyrics: 'VGhleSB0cnkgdG8gcHVsbCBtZSBhd2F5'
    },
    {
        Id: 27072023,
        Name: 'Um9ja3N0YXI=',
        Artist: 'Tmlja2VsYmFjaw==',
        Year: 2006,
        Album: 'QWxsIHRoZSBSaWdodCBSZWFzb25z',
        Lyrics: 'SSB3YW50IGEgbmV3IHRvdXIgYnVzIGZ1bGwgb2Ygb2xkIGd1aXRhcnM='
    },
    {
        Id: 6082023,
        Name: 'QW1lcmljYW4gQm95',
        Artist: 'RXN0ZWxsZSBmdC4gS2FueWUgV2VzdA==',
        Year: 2008,
        Album: 'U2hpbmU=',
        Lyrics: 'SnVzdCB0b3VjaGVkIGRvd24gaW4gTG9uZG9uIHRvd24='
    },
    {
        Id: 12092022,
        Name: 'VXNlIFNvbWVib2R5',
        Artist: 'S2luZ3Mgb2YgTGVvbg==',
        Year: 2008,
        Album: 'T25seSBCeSB0aGUgTmlnaHQ=',
        Lyrics: 'Q291bnRsZXNzIGxvdmVycyB1bmRlciBjb3ZlciBvZiB0aGUgc3RyZWV0'
    },
    {
        Id: 5102022,
        Name: 'SnVzdCBEYW5jZQ==',
        Artist: 'TGFkeSBHYWdh',
        Year: 2010,
        Album: 'VGhlIEZhbWU=',
        Lyrics: 'V2hhdCdzIGdvaW5nIG9uIG9uIHRoZSBmbG9vcj8='
    },
    {
        Id: 7042023,
        Name: 'RmlyZWZsaWVz',
        Artist: 'T3dsIENpdHk=',
        Year: 2009,
        Album: 'T2NlYW4gRXllcw==',
        Lyrics: 'Q2F1c2UgdGhleSdkIGZpbGwgdGhlIG9wZW4gYWly'
    },
    {
        Id: 5092022,
        Name: 'R3JlbmFkZQ==',
        Artist: 'QnJ1bm8gTWFycw==',
        Year: 2010,
        Album: 'RG9vLVdvcHMgJiBIb29saWdhbnM=',
        Lyrics: 'WW91IGtub3cgSSdkIGRvIGFueXRoaW5nIGZvciB5YQ=='
    },
    {
        Id: 26122022,
        Name: 'Rm9yZ2V0IFlvdQ==',
        Artist: 'Q2VlIExvIEdyZWVu',
        Year: 2010,
        Album: 'VGhlIExhZHkgS2lsbGVy',
        Lyrics: 'SSBndWVzcyBoZSdzIGFuIFhib3ggYW5kIEknbSBtb3JlIEF0YXJp'
    },
    {
        Id: 30122023,
        Name: 'bm8gdGVhcnMgbGVmdCB0byBjcnk=',
        Artist: 'QXJpYW5hIEdyYW5kZQ==',
        Year: 2018,
        Album: 'U3dlZXRlbmVy',
        Lyrics: 'RG9uJ3QgbWF0dGVyIGhvdywgd2hhdCwgd2hlcmUsIHdobyB0cmllcyBpdA=='
    },
    {
        Id: 23022023,
        Name: 'TWFycnkgWW91',
        Artist: 'QnJ1bm8gTWFycw==',
        Year: 2010,
        Album: 'RG9vLVdvcHMgJiBIb29saWdhbnM=',
        Lyrics: 'V2UncmUgbG9va2luZyBmb3Igc29tZXRoaW5nIGR1bWIgdG8gZG8='
    },
    {
        Id: 14102023,
        Name: 'U3dlZXQgSG9tZSBBbGFiYW1h',
        Artist: 'THlueXJkIFNreW55cmQ=',
        Year: 1974,
        Album: 'U2Vjb25kIEhlbHBpbmc=',
        Lyrics: 'V2hlcmUgdGhlIHNraWVzIGFyZSBzbyBibHVl'
    },
    {
        Id: 30012023,
        Name: 'Rm9vdGxvb3Nl',
        Artist: 'S2VubnkgTG9nZ2lucw==',
        Year: 1984,
        Album: 'Rm9vdGxvb3NlOiBPcmlnaW5hbCBTb3VuZHRyYWNr',
        Lyrics: 'S2ljayBvZmYgdGhlIFN1bmRheSBzaG9lcw=='
    },
    {
        Id: 10062023,
        Name: 'RGFuZ2VyIFpvbmU=',
        Artist: 'S2VubnkgTG9nZ2lucw==',
        Year: 1986,
        Album: 'VG9wIEd1bg==',
        Lyrics: 'VGhlIGZ1cnRoZXIgb24gdGhlIGVkZ2UsIHRoZSBob3R0ZXIgdGhlIGludGVuc2l0eQ=='
    },
    {
        Id: 8062023,
        Name: 'S2lzcyBmcm9tIGEgUm9zZQ==',
        Artist: 'U2VhbA==',
        Year: 1994,
        Album: 'U2VhbA==',
        Lyrics: 'QnV0IGRpZCB5b3Uga25vdyB0aGF0IHdoZW4gaXQgc25vd3M='
    },
    {
        Id: 16122023,
        Name: 'Tm8gRGlnZ2l0eQ==',
        Artist: 'QmxhY2tzdHJlZXQgZnQuIERyLiBEcmUgYW5kIFF1ZWVuIFBlbg==',
        Year: 1996,
        Album: 'QW5vdGhlciBMZXZlbA==',
        Lyrics: 'R2l2aW5nICdlbSBlYXJnYXNtcyB3aXRoIG15IG1lbGxvdyBhY2NlbnQ='
    },
    {
        Id: 23042023,
        Name: 'U3RvcA==',
        Artist: 'U3BpY2UgR2lybHM=',
        Year: 1998,
        Album: 'U3BpY2V3b3JsZA==',
        Lyrics: 'SSBuZWVkIHNvbWVib2R5IHdpdGggYSBodW1hbiB0b3VjaA=='
    },
    {
        Id: 4022023,
        Name: 'Rmx5aW5nIFdpdGhvdXQgV2luZ3M=',
        Artist: 'V2VzdGxpZmU=',
        Year: 1999,
        Album: 'V2VzdGxpZmU=',
        Lyrics: 'V2hlbiB5b3UndmUgZm91bmQgdGhhdCBzcGVjaWFsIHRoaW5n'
    },
    {
        Id: 21112022,
        Name: 'SGV5IEJhYnk=',
        Artist: 'REog1nR6aQ==',
        Year: 2000,
        Album: 'TG92ZSwgUGVhY2UgJiBWb2xsZ2Fz',
        Lyrics: 'SSB3YW5uYSBrbm93IGlmIHlvdSdsbCBiZSBteSBnaXJs'
    },
    {
        Id: 30112023,
        Name: 'SGVhdmVu',
        Artist: 'REogU2FtbXk=',
        Year: 2001,
        Album: 'SGVhdmVu',
        Lyrics: 'V2hlbiB5b3UncmUgbHlpbmcgaGVyZSBpbiBteSBhcm1z'
    },
    {
        Id: 22052023,
        Name: 'QnJpbmcgTWUgdG8gTGlmZQ==',
        Artist: 'RXZhbmVzY2VuY2U=',
        Year: 2003,
        Album: 'RmFsbGVu',
        Lyrics: 'R290IHRvIG9wZW4gbXkgZXllcyB0byBldmVyeXRoaW5n'
    },
    {
        Id: 3082023,
        Name: 'SG93IFlvdSBSZW1pbmQgTWU=',
        Artist: 'Tmlja2VsYmFjaw==',
        Year: 2001,
        Album: 'U2lsdmVyIFNpZGUgVXA=',
        Lyrics: 'QmVlbiB0byB0aGUgYm90dG9tIG9mIGV2ZXJ5IGJvdHRsZQ=='
    },
    {
        Id: 8012023,
        Name: 'UGF0aWVuY2U=',
        Artist: 'VGFrZSBUaGF0',
        Year: 2006,
        Album: 'QmVhdXRpZnVsIFdvcmxk',
        Lyrics: 'TXkgaGVhcnQgaXMgbnVtYiwgaGFzIG5vIGZlZWxpbmc='
    },
    {
        Id: 18112022,
        Name: 'QSBNb21lbnQgTGlrZSBUaGlz',
        Artist: 'TGVvbmEgTGV3aXM=',
        Year: 2006,
        Album: 'U3Bpcml0',
        Lyrics: 'U29tZSBwZW9wbGUgd2FpdCBhIGxpZmV0aW1l'
    },
    {
        Id: 7122022,
        Name: 'R3JhY2UgS2VsbHk=',
        Artist: 'TWlrYQ==',
        Year: 2006,
        Album: 'TGlmZSBpbiBDYXJ0b29uIE1vdGlvbg==',
        Lyrics: 'QW0gSSB0b28gZGlydHk/IEFtIEkgdG9vIGZsaXJ0eT8='
    },
    {
        Id: 29112023,
        Name: 'TWVyY3k=',
        Artist: 'RHVmZnk=',
        Year: 2008,
        Album: 'Um9ja2ZlcnJ5',
        Lyrics: 'V2h5IHdvbid0IHlvdSByZWxlYXNlIG1lPw=='
    },
    {
        Id: 12122022,
        Name: 'TG92ZSBTdG9yeQ==',
        Artist: 'VGF5bG9yIFN3aWZ0',
        Year: 2008,
        Album: 'RmVhcmxlc3M=',
        Lyrics: 'V2hlbiBJIG1ldCB5b3Ugb24gdGhlIG91dHNraXJ0cyBvZiB0b3du'
    },
    {
        Id: 5112022,
        Name: 'RW1waXJlIFN0YXRlIG9mIE1pbmQ=',
        Artist: 'SmF5LVogZnQuIEFsaWNpYSBLZXlz',
        Year: 2009,
        Album: 'VGhlIEJsdWVwcmludCAz',
        Lyrics: 'QmlnIGxpZ2h0cyB3aWxsIGluc3BpcmUgeW91'
    },
    {
        Id: 31102022,
        Name: 'Qm9vbSBCb29tIFBvdw==',
        Artist: 'QmxhY2sgRXllZCBQZWFz',
        Year: 2009,
        Album: 'VGhlIEUuTi5ELg==',
        Lyrics: 'VGhlbSBjaGlja2VucyBqYWNraW4nIG15IHN0eWxl'
    },
    {
        Id: 19072023,
        Name: 'TWVldCBNZSBIYWxmd2F5',
        Artist: 'QmxhY2sgRXllZCBQZWFz',
        Year: 2009,
        Album: 'VGhlIEUuTi5ELg==',
        Lyrics: 'VG9vayBteSBoZWFydCB0byB0aGUgbGltaXQ='
    },
    {
        Id: 3052023,
        Name: 'UmVhY2g=',
        Artist: 'UyBDbHViIDc=',
        Year: 2000,
        Album: 'Nw==',
        Lyrics: 'R29vZCBmcmllbmRzIGFyZSB0aGVyZSBmb3IgZWFjaCBvdGhlcg=='
    },
    {
        Id: 9122023,
        Name: 'QmVhdXRpZnVsIERheQ==',
        Artist: 'VTI=',
        Year: 2000,
        Album: 'QWxsIFRoYXQgWW91IENhbid0IExlYXZlIEJlaGluZA==',
        Lyrics: 'U2VlIHRoZSBjYW55b25zIGJyb2tlbiBieSBjbG91ZA=='
    },
    {
        Id: 8102022,
        Name: 'SW5kZXBlbmRlbnQgV29tZW4gUGFydCBJ',
        Artist: 'RGVzdGlueSdzIENoaWxk',
        Year: 2000,
        Album: 'U3Vydml2b3I=',
        Lyrics: 'UXVlc3Rpb24sIHRlbGwgbWUgd2hhdCB5b3UgdGhpbmsgYWJvdXQgbWU='
    },
    {
        Id: 23112022,
        Name: 'Q2xpbnQgRWFzdHdvb2Q=',
        Artist: 'R29yaWxsYXo=',
        Year: 2001,
        Album: 'R29yaWxsYXo=',
        Lyrics: 'SSBnb3Qgc3Vuc2hpbmUgaW4gYSBiYWc='
    },
    {
        Id: 23122023,
        Name: 'TGFkeSBNYXJtYWxhZGU=',
        Artist: 'Q2hyaXN0aW5hIEFndWlsZXJhLCBMaWwnIEtpbSwgTf1hIGFuZCBQaW5r',
        Year: 2001,
        Album: 'TW91bGluIFJvdWdlIQ==',
        Lyrics: 'Vm91bGV6LXZvdXMgY291Y2hlciBhdmVjIG1vaQ=='
    },
    {
        Id: 17082023,
        Name: 'V2hlcmV2ZXIgWW91IFdpbGwgR28=',
        Artist: 'VGhlIENhbGxpbmc=',
        Year: 2001,
        Album: 'Q2FtaW5vIFBhbG1lcm8=',
        Lyrics: 'V2F5IHVwIGhpZ2ggb3IgZG93biBsb3c='
    },
    {
        Id: 11122023,
        Name: 'R290dGEgR2V0IFRocnUgVGhpcw==',
        Artist: 'RGFuaWVsIEJlZGRpbmdmaWVsZA==',
        Year: 2001,
        Album: 'R290dGEgR2V0IFRocnUgVGhpcw==',
        Lyrics: 'V2hlbiB3aWxsIEkgZ2V0IHRoZSBjaGFuY2UgdG8gc2F5IEkgbG92ZSB5b3U='
    },
    {
        Id: 13102023,
        Name: 'VGhlc2UgV29yZHM=',
        Artist: 'TmF0YXNoYSBCZWRkaW5nZmllbGQ=',
        Year: 2004,
        Album: 'VW53cml0dGVu',
        Lyrics: 'Q2xldmVyIHJoeW1lcywgc2VlIHlhIGxhdGVy'
    },
    {
        Id: 16112022,
        Name: 'VW53cml0dGVu',
        Artist: 'TmF0YXNoYSBCZWRkaW5nZmllbGQ=',
        Year: 2004,
        Album: 'VW53cml0dGVu',
        Lyrics: 'TGl2ZSB5b3VyIGxpZmUgd2l0aCBhcm1zIHdpZGUgb3Blbg=='
    },
    {
        Id: 1112023,
        Name: 'QSBUaG91c2FuZCBNaWxlcw==',
        Artist: 'VmFuZXNzYSBDYXJsdG9u',
        Year: 2002,
        Album: 'QmUgTm90IE5vYm9keQ==',
        Lyrics: 'TWFraW4nIG15IHdheSBkb3dudG93bg=='
    },
    {
        Id: 14122023,
        Name: 'V29ybGQgb2YgT3VyIE93bg==',
        Artist: 'V2VzdGxpZmU=',
        Year: 2002,
        Album: 'V29ybGQgb2YgT3VyIE93bg==',
        Lyrics: 'SSBsZXQgeW91IGluIHdoZXJlIG5vIG9uZSBlbHNlIGdvZXM='
    },
    {
        Id: 21062023,
        Name: 'Q29tcGxpY2F0ZWQ=',
        Artist: 'QXZyaWwgTGF2aWduZQ==',
        Year: 2002,
        Album: 'TGV0IEdv',
        Lyrics: 'VGFrZSBvZmYgYWxsIHlvdXIgcHJlcHB5IGNsb3RoZXM='
    },
    {
        Id: 5092023,
        Name: 'R2lybGZyaWVuZA==',
        Artist: 'QXZyaWwgTGF2aWduZQ==',
        Year: 2007,
        Album: 'VGhlIEJlc3QgRGFtbiBUaGluZw==',
        Lyrics: 'U2hlJ3MgbGlrZSBzbyB3aGF0ZXZlcg=='
    },
    {
        Id: 29042023,
        Name: 'SW4gZGEgQ2x1Yg==',
        Artist: 'NTAgQ2VudA==',
        Year: 2003,
        Album: 'R2V0IFJpY2ggb3IgRGllIFRyeWluJw==',
        Lyrics: 'R28gc2hvcnR5LCBpdCdzIHlvdXIgYmlydGhkYXk='
    },
    {
        Id: 8122022,
        Name: 'V2hpdGUgRmxhZw==',
        Artist: 'RGlkbw==',
        Year: 2003,
        Album: 'TGlmZSBmb3IgUmVudA==',
        Lyrics: 'SSB3aWxsIGdvIGRvd24gd2l0aCB0aGlzIHNoaXA='
    },
    {
        Id: 22122023,
        Name: 'QnJlYXRoZQ==',
        Artist: 'Qmx1IENhbnRyZWxsIGZ0LiBTZWFuIFBhdWw=',
        Year: 2003,
        Album: 'Qml0dGVyc3dlZXQ=',
        Lyrics: 'QWxsIHdlIGRvIGlzIG1ha2UgdXAsIHRoZW4gYnJlYWsgdXA='
    },
    {
        Id: 25122023,
        Name: 'RmFzY2luYXRpbw==',
        Artist: 'QWxwaGFiZWF0',
        Year: 2006,
        Album: 'VGhpcyBJcyBBbHBoYWJlYXQ=',
        Lyrics: 'S2lsbGVkIHRoZSB5b3VuZyBkdWRlcyBpbiB0aGUgaGlnaCBib290cw=='
    },
    {
        Id: 20122023,
        Name: 'SSBQcmVkaWN0IGEgUmlvdA==',
        Artist: 'S2Fpc2VyIENoaWVmcw==',
        Year: 2004,
        Album: 'RW1wbG95bWVudA==',
        Lyrics: 'QSBmcmllbmQgb2YgYSBmcmllbmQgaGUgZ290IGJlYXRlbg=='
    },
    {
        Id: 12052023,
        Name: 'R2hldHRvIEdvc3BlbA==',
        Artist: 'MlBhYyBmdC4gRWx0b24gSm9obg==',
        Year: 2004,
        Album: 'TG95YWwgdG8gdGhlIEdhbWU=',
        Lyrics: 'SSBob3BlIHdlIHNlZSB0aGUgbGlnaHQgYmVmb3JlIGl0J3MgcnVpbmVk'
    },
    {
        Id: 15112023,
        Name: 'WW91IFJhaXNlIE1lIFVw',
        Artist: 'V2VzdGxpZmU=',
        Year: 2005,
        Album: 'RmFjZSB0byBGYWNl',
        Lyrics: 'SSBhbSBzdHJvbmcgd2hlbiBJIGFtIG9uIHlvdXIgc2hvdWxkZXJz'
    },
    {
        Id: 27052023,
        Name: 'QmVjYXVzZSBvZiBZb3U=',
        Artist: 'S2VsbHkgQ2xhcmtzb24=',
        Year: 2005,
        Album: 'QnJlYWthd2F5',
        Lyrics: 'SSBuZXZlciBzdGF5IHRvbyBmYXIgZnJvbSB0aGUgc2lkZXdhbGs='
    },
    {
        Id: 4122023,
        Name: 'U2V4eUJhY2s=',
        Artist: 'SnVzdGluIFRpbWJlcmxha2UgZnQuIFRpbWJhbGFuZA==',
        Year: 2006,
        Album: 'RnV0dXJlU2V4L0xvdmVTb3VuZHM=',
        Lyrics: 'TGV0IG1lIHNlZSB3aGF0IHlvdSdyZSB0d2Vya2luZyB3aXRo'
    },
    {
        Id: 19112022,
        Name: 'Um9jayBZb3VyIEJvZHk=',
        Artist: 'SnVzdGluIFRpbWJlcmxha2U=',
        Year: 2003,
        Album: 'SnVzdGlmaWVk',
        Lyrics: 'RG9uJ3QgYmUgc28gcXVpY2sgdG8gd2FsayBhd2F5'
    },
    {
        Id: 24092022,
        Name: 'Q3J5IE1lIGEgUml2ZXI=',
        Artist: 'SnVzdGluIFRpbWJlcmxha2U=',
        Year: 2002,
        Album: 'SnVzdGlmaWVk',
        Lyrics: 'R2lybCwgSSByZWZ1c2UsIHlvdSBtdXN0IGhhdmUgbWUgY29uZnVzZWQ='
    },
    {
        Id: 11102022,
        Name: 'QWJvdXQgWW91IE5vdw==',
        Artist: 'U3VnYWJhYmVz',
        Year: 2007,
        Album: 'Q2hhbmdl',
        Lyrics: 'Q2FuIHdlIGJyaW5nIHllc3RlcmRheSBiYWNrIGFyb3VuZD8='
    },
    {
        Id: 11072023,
        Name: 'UGFwZXIgUGxhbmVz',
        Artist: 'TS5JLkEu',
        Year: 2008,
        Album: 'S2FsYQ==',
        Lyrics: 'Qm9uYSBmaWRlIGh1c3RsZXIgbWFraW5nIG15IG5hbWU='
    },
    {
        Id: 4102022,
        Name: 'UGFwYXJhenpp',
        Artist: 'TGFkeSBHYWdh',
        Year: 2009,
        Album: 'VGhlIEZhbWU=',
        Lyrics: 'SSdsbCBmb2xsb3cgeW91IHVudGlsIHlvdSBsb3ZlIG1l'
    },
    {
        Id: 28112023,
        Name: 'RGlzdHVyYmlh',
        Artist: 'UmloYW5uYQ==',
        Year: 2008,
        Album: 'R29vZCBHaXJsIEdvbmUgQmFkOiBSZWxvYWRlZA==',
        Lyrics: 'SXQncyBhIHRoaWVmIGluIHRoZSBuaWdodCB0byBjb21lIGFuZCBncmFiIHlvdQ=='
    },
    {
        Id: 29102023,
        Name: 'UG93ZXI=',
        Artist: 'S2FueWUgV2VzdA==',
        Year: 2010,
        Album: 'TXkgQmVhdXRpZnVsIERhcmsgVHdpc3RlZCBGYW50YXN5',
        Lyrics: 'VGhlIGNsb2NrJ3MgdGlja2luZywgSSBqdXN0IGNvdW50IHRoZSBob3Vycw=='
    },
    {
        Id: 13062023,
        Name: 'U3VtbWVyIE5pZ2h0cw==',
        Artist: 'T2xpdmlhIE5ld3Rvbi1Kb2huICYgSm9obiBUcmF2b2x0YQ==',
        Year: 1978,
        Album: 'R3JlYXNlOiBUaGUgT3JpZ2luYWwgU291bmR0cmFjaw==',
        Lyrics: 'VGVsbCBtZSBtb3JlLCB0ZWxsIG1lIG1vcmU='
    },
    {
        Id: 27012023,
        Name: 'Q29tZSBvbiBFaWxlZW4=',
        Artist: 'RGV4eXMgTWlkbmlnaHQgUnVubmVycw==',
        Year: 1982,
        Album: 'VG9vLVJ5ZS1BeQ==',
        Lyrics: 'QXQgdGhpcyBtb21lbnQgeW91IG1lYW4gZXZlcnl0aGluZw=='
    },
    {
        Id: 29082022,
        Name: 'VHdvIFRyaWJlcw==',
        Artist: 'RnJhbmtpZSBHb2VzIHRvIEhvbGx5d29vZA==',
        Year: 1984,
        Album: 'V2VsY29tZSB0byB0aGUgUGxlYXN1cmVkb21l',
        Lyrics: 'QSBwb2ludCBpcyBhbGwgdGhhdCB5b3UgY2FuIHNjb3Jl'
    },
    {
        Id: 3092022,
        Name: 'SSBXaWxsIEFsd2F5cyBMb3ZlIFlvdQ==',
        Artist: 'V2hpdG5leSBIb3VzdG9u',
        Year: 1992,
        Album: 'VGhlIEJvZHlndWFyZDogT3JpZ2luYWwgU291bmR0cmFjayBBbGJ1bQ==',
        Lyrics: 'SSdsbCB0aGluayBvZiB5b3UgZXZlcnkgc3RlcCBvZiB0aGUgd2F5'
    },
    {
        Id: 1112022,
        Name: 'SWNlIEljZSBCYWJ5',
        Artist: 'VmFuaWxsYSBJY2U=',
        Year: 1990,
        Album: 'VG8gdGhlIEV4dHJlbWU=',
        Lyrics: 'SWNlIGlzIGJhY2sgd2l0aCB0aGUgYnJhbmQgbmV3IGludmVudGlvbg=='
    },
    {
        Id: 23032023,
        Name: 'U2F0dXJkYXkgTmlnaHQ=',
        Artist: 'V2hpZ2ZpZWxk',
        Year: 1992,
        Album: 'V2hpZ2ZpZWxk',
        Lyrics: 'SXQncyBwYXJ0eSB0aW1lIGFuZCBub3Qgb25lIG1pbnV0ZSB3ZSBjYW4gbG9zZQ=='
    },
    {
        Id: 1122023,
        Name: 'U3RheSBBbm90aGVyIERheQ==',
        Artist: 'RWFzdCAxNw==',
        Year: 1994,
        Album: 'U3RlYW0=',
        Lyrics: 'RG9uJ3QgeW91IHNheSBpdCdzIHRoZSBmaW5hbCBraXNz'
    },
    {
        Id: 30042023,
        Name: 'Q290dG9uIEV5ZSBKb2U=',
        Artist: 'UmVkbmV4',
        Year: 1994,
        Album: 'U2V4ICYgVmlvbGlucw==',
        Lyrics: 'V2hlcmUgZGlkIHlvdSBjb21lIGZyb20/IFdoZXJlIGRpZCB5b3UgZ28/'
    },
    {
        Id: 9102022,
        Name: 'TmV2ZXIgRXZlcg==',
        Artist: 'QWxsIFNhaW50cw==',
        Year: 1997,
        Album: 'QWxsIFNhaW50cw==',
        Lyrics: 'V2hlbiB5b3UgZ29ubmEgdGFrZSBtZSBvdXQgb2YgdGhpcyBibGFjayBob2xlPw=='
    },
    {
        Id: 18072023,
        Name: 'VHJ1bHkgTWFkbHkgRGVlcGx5',
        Artist: 'U2F2YWdlIEdhcmRlbg==',
        Year: 1997,
        Album: 'U2F2YWdlIEdhcmRlbg==',
        Lyrics: 'SSB3YW5uYSBzdGFuZCB3aXRoIHlvdSBvbiBhIG1vdW50YWlu'
    },
    {
        Id: 27022023,
        Name: 'TXkgV2F5',
        Artist: 'RnJhbmsgU2luYXRyYQ==',
        Year: 1969,
        Album: 'TXkgV2F5',
        Lyrics: 'TXkgZnJpZW5kLCBJJ2xsIHNheSBpdCBjbGVhcg=='
    },
    {
        Id: 12112022,
        Name: 'VGFpbnRlZCBMb3Zl',
        Artist: 'U29mdCBDZWxs',
        Year: 1981,
        Album: 'Tm9uLVN0b3AgRXJvdGljIENhYmFyZXQ=',
        Lyrics: 'Tm93IEkga25vdyBJJ3ZlIGdvdCB0byBydW4gYXdheQ=='
    },
    {
        Id: 29032023,
        Name: 'VGhlIExpb24gU2xlZXBzIFRvbmlnaHQ=',
        Artist: 'VGlnaHQgRml0',
        Year: 1982,
        Album: 'VGlnaHQgRml0',
        Lyrics: 'SW4gdGhlIGp1bmdsZQ=='
    },
    {
        Id: 5052023,
        Name: 'RmFtZQ==',
        Artist: 'SXJlbmUgQ2FyYQ==',
        Year: 1980,
        Album: 'RmFtZQ==',
        Lyrics: 'WW91IGFpbid0IHNlZW4gdGhlIGJlc3Qgb2YgbWUgeWV0'
    },
    {
        Id: 10082023,
        Name: 'TmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXA=',
        Artist: 'UmljayBBc3RsZXk=',
        Year: 1986,
        Album: 'V2hlbmV2ZXIgWW91IE5lZWQgU29tZWJvZHk=',
        Lyrics: 'RG9uJ3QgdGVsbCBtZSB5b3UncmUgdG9vIGJsaW5kIHRvIHNlZQ=='
    },
    {
        Id: 13072023,
        Name: 'VG9nZXRoZXIgRm9yZXZlcg==',
        Artist: 'UmljayBBc3RsZXk=',
        Year: 1988,
        Album: 'V2hlbmV2ZXIgWW91IE5lZWQgU29tZWJvZHk=',
        Lyrics: 'SWYgdGhlcmUncyBhbnl0aGluZyB5b3UgbmVlZA=='
    },
    {
        Id: 11012023,
        Name: 'U2V4eSBhbmQgSSBLbm93IEl0',
        Artist: 'TE1GQU8=',
        Year: 2011,
        Album: 'U29ycnkgZm9yIFBhcnR5IFJvY2tpbmc=',
        Lyrics: 'Tm8gc2hvZXMsIG5vIHNoaXJ0IGFuZCBJIHN0aWxsIGdldCBzZXJ2aWNl'
    },
    {
        Id: 8112023,
        Name: 'U2hlIFdpbGwgQmUgTG92ZWQ=',
        Artist: 'TWFyb29uIDU=',
        Year: 2004,
        Album: 'U29uZ3MgQWJvdXQgSmFuZQ==',
        Lyrics: 'QXNrIGhlciBpZiBzaGUgd2FudHMgdG8gc3RheSBhIHdoaWxl'
    },
    {
        Id: 13112023,
        Name: 'QWlycGxhbmVz',
        Artist: 'Qi5vLkIgZmVhdC4gSGF5bGV5IFdpbGxpYW1z',
        Year: 2010,
        Album: 'Qi5vLkIgUHJlc2VudHM6IFRoZSBBZHZlbnR1cmVzIG9mIEJvYmJ5IFJheQ==',
        Lyrics: 'SSBjb3VsZCByZWFsbHkgdXNlIGEgd2lzaCByaWdodCBub3c='
    },
    {
        Id: 27112022,
        Name: 'R2xhZCBZb3UgQ2FtZQ==',
        Artist: 'VGhlIFdhbnRlZA==',
        Year: 2011,
        Album: 'QmF0dGxlZ3JvdW5k',
        Lyrics: 'TXkgdW5pdmVyc2Ugd2lsbCBuZXZlciBiZSB0aGUgc2FtZQ=='
    },
    {
        Id: 11042023,
        Name: 'U3dhZ2dlciBKYWdnZXI=',
        Artist: 'Q2hlciBMbG95ZA==',
        Year: 2011,
        Album: 'U3RpY2tzIGFuZCBTdG9uZXM=',
        Lyrics: 'WW91IGNhbid0IHN0b3AgbG9va2luZyBhdCBtZSwgc3RhcmluZyBhdCBtZQ=='
    },
    {
        Id: 30062023,
        Name: 'QWxsIEFib3V0IFRvbmlnaHQ=',
        Artist: 'UGl4aWUgTG90dA==',
        Year: 2011,
        Album: 'WW91bmcgRm9vbGlzaCBIYXBweQ==',
        Lyrics: 'R3JhYiBzb21lb25lIGlmIHlvdSdyZSBzaW5nbGUsIGdyYWIgc29tZW9uZSBpZiB5b3UncmUgbm90'
    },
    {
        Id: 23092022,
        Name: 'SSBMb3ZlIEl0',
        Artist: 'SWNvbmEgUG9wIGZlYXQuIENoYXJsaSBYQ1g=',
        Year: 2012,
        Album: 'SWNvbmEgUG9w',
        Lyrics: 'SSBjcmFzaGVkIG15IGNhciBpbnRvIHRoZSBicmlkZ2U='
    },
    {
        Id: 4062023,
        Name: 'S2lzcyBLaXNz',
        Artist: 'SG9sbHkgVmFsYW5jZQ==',
        Year: 2002,
        Album: 'Rm9vdHByaW50cw==',
        Lyrics: 'VHJ5aW4nIG1vdmVzIGluIHRoZSBiYWNrIG9mIHlvdXIgY2Fy'
    },
    {
        Id: 12022023,
        Name: 'SnVzdCBhIExpdHRsZQ==',
        Artist: 'TGliZXJ0eSBY',
        Year: 2002,
        Album: 'VGhpbmtpbmcgSXQgT3Zlcg==',
        Lyrics: 'U2V4eSwgZXZlcnl0aGluZyBhYm91dCB5b3Ugc28gc2V4eQ=='
    },
    {
        Id: 15072023,
        Name: 'SWYgVG9tb3Jyb3cgTmV2ZXIgQ29tZXM=',
        Artist: 'Um9uYW4gS2VhdGluZw==',
        Year: 2002,
        Album: 'RGVzdGluYXRpb24=',
        Lyrics: 'V2lsbCBzaGUga25vdyBob3cgbXVjaCBJIGxvdmVkIGhlcg=='
    },
    {
        Id: 13082023,
        Name: 'Q3Jvc3Nyb2Fkcw==',
        Artist: 'QmxhemluJyBTcXVhZA==',
        Year: 2002,
        Album: 'SW4gdGhlIEJlZ2lubmluZw==',
        Lyrics: 'V2hlbiBqdWRnZW1lbnQgY29tZXMgZm9yIHlvdQ=='
    },
    {
        Id: 9092022,
        Name: 'SnVzdCBMaWtlIGEgUGlsbA==',
        Artist: 'UCFuaw==',
        Year: 2002,
        Album: 'TWlzc3VuZGF6dG9vZA==',
        Lyrics: 'VGhlcmUncyBhIHNob3J0YWdlIGluIHRoZSBzd2l0Y2g='
    },
    {
        Id: 29092023,
        Name: 'WW91IFNhaWQgTm8=',
        Artist: 'QnVzdGVk',
        Year: 2003,
        Album: 'QnVzdGVk',
        Lyrics: 'WW91J3JlIHNvIGZpdCBhbmQgeW91IGtub3cgaXQ='
    },
    {
        Id: 25082022,
        Name: 'T2J2aW91c2x5',
        Artist: 'TWNGbHk=',
        Year: 2004,
        Album: 'Um9vbSBvbiB0aGUgM3JkIEZsb29y',
        Lyrics: 'SSBuZXZlciB3aWxsIGJlIGdvb2QgZW5vdWdoIGZvciBoZXI='
    },
    {
        Id: 3092023,
        Name: 'TWFuZWF0ZXI=',
        Artist: 'TmVsbHkgRnVydGFkbw==',
        Year: 2006,
        Album: 'TG9vc2U=',
        Lyrics: 'TWFrZSB5b3Ugd29yayBoYXJkLCBtYWtlIHlvdSBzcGVuZCBoYXJk'
    },
    {
        Id: 30032023,
        Name: 'U21pbGU=',
        Artist: 'TGlseSBBbGxlbg==',
        Year: 2006,
        Album: 'QWxyaWdodCwgU3RpbGw=',
        Lyrics: 'U28geW91IGNhbiBoYXZlIGEgbGl0dGxlIHdoaW5lIGFuZCBhIG1vYW4='
    },
    {
        Id: 1022023,
        Name: 'U21hY2sgVGhhdA==',
        Artist: 'QWtvbiBmZWF0LiBFbWluZW0=',
        Year: 2006,
        Album: 'S29udmljdGVk',
        Lyrics: 'VXBmcm9udCBzdHlsZSwgcmVhZHkgdG8gYXR0YWNrIG5vdw=='
    },
    {
        Id: 25082023,
        Name: 'UnVieQ==',
        Artist: 'S2Fpc2VyIENoaWVmcw==',
        Year: 2007,
        Album: 'WW91cnMgVHJ1bHksIEFuZ3J5IE1vYg==',
        Lyrics: 'RHVlIHRvIGEgbGFjayBvZiBpbnRlcmVzdCwgdG9tb3Jyb3cgaXMgY2FuY2VsZWQ='
    },
    {
        Id: 28062023,
        Name: 'Qm9ua2Vycw==',
        Artist: 'RGl6emVlIFJhc2NhbA==',
        Year: 2009,
        Album: 'VG9uZ3VlIG4nIENoZWVr',
        Lyrics: 'VGhlcmUncyBub3RoaW4nIGNyYXp5IGFib3V0IG1l'
    },
    {
        Id: 18102023,
        Name: 'QnJlYWsgWW91ciBIZWFydA==',
        Artist: 'VGFpbyBDcnV6',
        Year: 2009,
        Album: 'Um9rc3RhcnI=',
        Lyrics: 'SWYgeW91IGZhbGwgZm9yIG1lLCBJJ20gbm90IGVhc3kgdG8gcGxlYXNl'
    },
    {
        Id: 22032023,
        Name: 'VGhlIE9uZSBhbmQgT25seQ==',
        Artist: 'Q2hlc25leSBIYXdrZXM=',
        Year: 1991,
        Album: 'QnVkZHkncyBTb25n',
        Lyrics: 'TXkgc291bCBlbWJyYWNlcyBvbmUgbW9yZSBpbiBhIG1pbGxpb24gZmFjZXM='
    },
    {
        Id: 22092022,
        Name: 'QWxsIFRoYXQgU2hlIFdhbnRz',
        Artist: 'QWNlIG9mIEJhc2U=',
        Year: 1992,
        Album: 'SGFwcHkgTmF0aW9u',
        Lyrics: 'SXQncyBhIGRheSBmb3IgY2F0Y2hpbmcgdGFu'
    },
    {
        Id: 26042023,
        Name: 'UmVsaWdodCBNeSBGaXJl',
        Artist: 'VGFrZSBUaGF0IGZlYXQuIEx1bHU=',
        Year: 1993,
        Album: 'RXZlcnl0aGluZyBDaGFuZ2Vz',
        Lyrics: 'WW91ciBsb3ZlIGlzIG15IG9ubHkgZGVzaXJl'
    },
    {
        Id: 28082022,
        Name: 'UmV0dXJuIG9mIHRoZSBNYWNr',
        Artist: 'TWFyayBNb3JyaXNvbg==',
        Year: 1996,
        Album: 'UmV0dXJuIG9mIHRoZSBNYWNr',
        Lyrics: 'WW91IGxpZWQgdG8gbWU='
    },
    {
        Id: 25072023,
        Name: 'TWlsbGVubml1bQ==',
        Artist: 'Um9iYmllIFdpbGxpYW1z',
        Year: 1998,
        Album: 'SSd2ZSBCZWVuIEV4cGVjdGluZyBZb3U=',
        Lyrics: 'V2UndmUgZ290IHN0YXJzIGRpcmVjdGluZyBvdXIgZmF0ZQ=='
    },
    {
        Id: 2012023,
        Name: 'Q2FsbCBNZQ==',
        Artist: 'QmxvbmRpZQ==',
        Year: 1980,
        Album: 'QW1lcmljYW4gR2lnb2xv',
        Lyrics: 'Q29sb3VyIG1lIHlvdXIgY29sb3Vy'
    },
    {
        Id: 21022023,
        Name: 'WGFuYWR1',
        Artist: 'T2xpdmlhIE5ld3RvbiBKb2huICYgRWxlY3RyaWMgTGlnaHQgT3JjaGVzdHJh',
        Year: 1980,
        Album: 'WGFuYWR1',
        Lyrics: 'QSBtaWxsaW9uIGxpZ2h0cyBhcmUgZGFuY2luZw=='
    },
    {
        Id: 2122023,
        Name: 'QXNoZXMgdG8gQXNoZXM=',
        Artist: 'RGF2aWQgQm93aWU=',
        Year: 1980,
        Album: 'U2NhcnkgTW9uc3RlcnM=',
        Lyrics: 'VGhleSBnb3QgYSBtZXNzYWdlIGZyb20gdGhlIEFjdGlvbiBNYW4='
    },
    {
        Id: 5112023,
        Name: 'VGhlIFRpZGUgSXMgSGlnaA==',
        Artist: 'QmxvbmRpZQ==',
        Year: 1980,
        Album: 'QXV0b2FtZXJpY2Fu',
        Lyrics: 'SSdtIG5vdCB0aGUga2luZC1hIGdpcmwgd2hvIGdpdmVzIHVwIGp1c3QgbGlrZSB0aGF0'
    },
    {
        Id: 20062023,
        Name: 'TWFraW5nIFlvdXIgTWluZCBVcA==',
        Artist: 'QnVja3MgRml6eg==',
        Year: 1981,
        Album: 'QnVja3MgRml6eg==',
        Lyrics: 'VHJ1c3QgeW91ciBpbm5lciB2aXNpb24='
    },
    {
        Id: 20102023,
        Name: 'SSBHb3QgWW91IEJhYmU=',
        Artist: 'VUI0MCBhbmQgQ2hyaXNzaWUgSHluZGU=',
        Year: 1985,
        Album: 'QmFnZ2FyaWRkaW0=',
        Lyrics: 'VGhleSBzYXkgb3VyIGxvdmUgd29uJ3QgcGF5IHRoZSByZW50'
    },
    {
        Id: 9072023,
        Name: 'V2VzdCBFbmQgR2lybHM=',
        Artist: 'UGV0IFNob3AgQm95cw==',
        Year: 1984,
        Album: 'UGxlYXNl',
        Lyrics: 'SW4gYSByZXN0YXVyYW50IGluIGEgV2VzdCBFbmQgdG93bg=='
    },
    {
        Id: 2122022,
        Name: 'Q2hhaW4gUmVhY3Rpb24=',
        Artist: 'RGlhbmEgUm9zcw==',
        Year: 1985,
        Album: 'RWF0ZW4gQWxpdmU=',
        Lyrics: 'WW91IGdpdmUgbWUgYWxsIHRoZSBhZnRlciBtaWRuaWdodCBhY3Rpb24='
    },
    {
        Id: 9122022,
        Name: 'Um9jayBNZSBBbWFkZXVz',
        Artist: 'RmFsY28=',
        Year: 1985,
        Album: 'RmFsY28gMw==',
        Lyrics: 'QW1hZGV1cywgQW1hZGV1cywgQW1hZGV1cw=='
    },
    {
        Id: 6102023,
        Name: 'VGhlIEZpbmFsIENvdW50ZG93bg==',
        Artist: 'RXVyb3Bl',
        Year: 1986,
        Album: 'VGhlIEZpbmFsIENvdW50ZG93bg==',
        Lyrics: 'V2UncmUgaGVhZGluZyBmb3IgVmVudXM='
    },
    {
        Id: 6102022,
        Name: 'VGFrZSBNeSBCcmVhdGggQXdheQ==',
        Artist: 'QmVybGlu',
        Year: 1986,
        Album: 'Q291bnQgVGhyZWUgJiBQcmF5',
        Lyrics: 'V2F0Y2hpbmcgaW4gc2xvdyBtb3Rpb24gYXMgeW91IHR1cm4gYXJvdW5kIGFuZCBzYXk='
    },
    {
        Id: 7082023,
        Name: 'SSBTaG91bGQgQmUgU28gTHVja3k=',
        Artist: 'S3lsaWUgTWlub2d1ZQ==',
        Year: 1987,
        Album: 'S3lsaWU=',
        Lyrics: 'TXkgaGVhcnQgaXMgY2xvc2UgdG8gYnJlYWtpbmc='
    },
    {
        Id: 24122022,
        Name: 'T25lIE1vbWVudCBpbiBUaW1l',
        Artist: 'V2hpdG5leSBIb3VzdG9u',
        Year: 1988,
        Album: 'MTk4OCBTdW1tZXIgT2x5bXBpY3MgQWxidW0=',
        Lyrics: 'V2hlbiBhbGwgb2YgbXkgZHJlYW1zIGFyZSBhIGhlYXJ0YmVhdCBhd2F5'
    },
    {
        Id: 1082023,
        Name: 'TWlzdGxldG9lIGFuZCBXaW5l',
        Artist: 'Q2xpZmYgUmljaGFyZA==',
        Year: 1988,
        Album: 'UHJpdmF0ZSBDb2xsZWN0aW9uOiAxOTc5LTE5ODg=',
        Lyrics: 'V2l0aCBsb2dzIG9uIHRoZSBmaXJlIGFuZCBnaWZ0cyBvbiB0aGUgdHJlZQ=='
    },
    {
        Id: 30102022,
        Name: 'RXRlcm5hbCBGbGFtZQ==',
        Artist: 'VGhlIEJhbmdsZXM=',
        Year: 1989,
        Album: 'RXZlcnl0aGluZw==',
        Lyrics: 'U2F5IG15IG5hbWUsIHN1biBzaGluZXMgdGhyb3VnaCB0aGUgcmFpbg=='
    },
    {
        Id: 27122023,
        Name: 'TG92ZSBJcyB0aGUgTmFtZQ==',
        Artist: 'U29maWEgQ2Fyc29u',
        Year: 2016,
        Album: 'U29maWEgQ2Fyc29u',
        Lyrics: 'Rm9yZ2V0IHllc3RlcmRheSwgdGhpcyBsaWZlIGlzIGEgZ2FtZQ=='
    },
    {
        Id: 19062023,
        Name: 'T3V0IG9mIFRvdWNo',
        Artist: 'SGFsbCAmIE9hdGVz',
        Year: 1984,
        Album: 'QmlnIEJhbSBCb29t',
        Lyrics: 'TWFuaWMgbW92ZXMgYW5kIGRyb3dzeSBkcmVhbXM='
    },
    {
        Id: 9042023,
        Name: 'Rm91ciBMaXR0bGUgRGlhbW9uZHM=',
        Artist: 'RWxlY3RyaWMgTGlnaHQgT3JjaGVzdHJh',
        Year: 1983,
        Album: 'U2VjcmV0IE1lc3NhZ2Vz',
        Lyrics: 'U2hlIG11c3QgYmUgc29tZXdoZXJlIG9uIHRoZSBvcGVuIHJvYWQ='
    },
    {
        Id: 28122022,
        Name: 'U2NhbmRhbG91cw==',
        Artist: 'TWlzLVRlZXE=',
        Year: 2003,
        Album: 'RXllIENhbmR5',
        Lyrics: 'QSBvbmUgbmlnaHQgc3RhbmQganVzdCBhaW4ndCBlbm91Z2g='
    },
    {
        Id: 31082022,
        Name: 'U29tZXRoaW5nIEdvdCBNZSBTdGFydGVk',
        Artist: 'U2ltcGx5IFJlZA==',
        Year: 1991,
        Album: 'U3RhcnM=',
        Lyrics: 'SSdkIGdpdmUgaXQgYWxsIHVwIGZvciB5b3U='
    },
    {
        Id: 17062023,
        Name: 'VGVubmlzIENvdXJ0',
        Artist: 'TG9yZGU=',
        Year: 2013,
        Album: 'UHVyZSBIZXJvaW5l',
        Lyrics: 'QmFieSBiZSB0aGUgY2xhc3MgY2xvd24='
    },
    {
        Id: 11092023,
        Name: 'QmFkIEdpcmxz',
        Artist: 'TS5JLkEu',
        Year: 2012,
        Album: 'TWF0YW5naQ==',
        Lyrics: 'TXkgY2hhaW4gaGl0cyBteSBjaGVzdCB3aGVuIEknbSBiYW5naW5nIG9uIHRoZSByYWRpbw=='
    },
    {
        Id: 8122023,
        Name: 'RXZlcnl0aGluZyBTaGUgV2FudHM=',
        Artist: 'V2hhbSE=',
        Year: 1984,
        Album: 'TWFrZSBJdCBCaWc=',
        Lyrics: 'U29tZSBwZW9wbGUgd29yayBmb3IgYSBsaXZpbmc='
    },
    {
        Id: 28092022,
        Name: 'TGl2aW5nIGluIGEgQm94',
        Artist: 'TGl2aW5nIGluIGEgQm94',
        Year: 1987,
        Album: 'TGl2aW5nIGluIGEgQm94',
        Lyrics: 'QW0gSSBsaXZpbmcgaW4gYSBib3g/'
    },
    {
        Id: 19122023,
        Name: 'VGhlIFJoeXRobSBvZiB0aGUgTmlnaHQ=',
        Artist: 'Q29yb25h',
        Year: 1993,
        Album: 'VGhlIFJoeXRobSBvZiB0aGUgTmlnaHQ=',
        Lyrics: 'VGhpcyBpcyB0aGUgcmh5dGhtIG9mIG15IGxpZmU='
    },
    {
        Id: 7102023,
        Name: 'R2xhbW9yb3Vz',
        Artist: 'RmVyZ2llIGZlYXQuIEx1ZGFjcmlz',
        Year: 2007,
        Album: 'VGhlIER1dGNoZXNz',
        Lyrics: 'TGl2aW4nIG15IGxpZmUgaW4gdGhlIGZhc3QgbGFuZQ=='
    },
    {
        Id: 28052023,
        Name: 'VG8gdGhlIFRvcA==',
        Artist: 'VHdpbiBTaGFkb3c=',
        Year: 2015,
        Album: 'RWNsaXBzZQ==',
        Lyrics: 'SSBrbm93IGl0J3Mgbm90IHRoZSByaWdodCB0aW1lIHRvbmlnaHQ='
    },
    {
        Id: 27032023,
        Name: 'U3Ryb25nIEFnYWlu',
        Artist: 'Ti1EdWJ6',
        Year: 2009,
        Album: 'VW5jbGUgQg==',
        Lyrics: 'QS1saXN0LCBwbGF5bGlzdCwgZXZlbiBteSBtdW0ncyBmYW1vdXM='
    },
    {
        Id: 25102022,
        Name: 'U2hvdyBZb3Vyc2VsZg==',
        Artist: 'SWRpbmEgTWVuemVsICYgRXZhbiBSYWNoZWwgV29vZA==',
        Year: 2019,
        Album: 'RnJvemVuIElJ',
        Lyrics: 'WW91IGFyZSB0aGUgYW5zd2VyIEkndmUgd2FpdGVkIGZvciBhbGwgb2YgbXkgbGlmZQ=='
    },
    {
        Id: 29122022,
        Name: 'Tm8gR29vZCBBZHZpY2U=',
        Artist: 'R2lybHMgQWxvdWQ=',
        Year: 2003,
        Album: 'U291bmQgb2YgdGhlIFVuZGVyZ3JvdW5k',
        Lyrics: 'SGVyZSBJIGFtLCBkaXJ0eSBoYW5kcywgSSBkb24ndCBnaXZlIGEgZGFtbg=='
    },
    {
        Id: 14092023,
        Name: 'VGh1bmRlcmJpcmRzIEFyZSBHbw==',
        Artist: 'QnVzdGVk',
        Year: 2003,
        Album: 'QSBQcmVzZW50IGZvciBFdmVyeW9uZQ==',
        Lyrics: 'RG9uJ3QgYmUgbWFkIHBsZWFzZSwgc3RvcCB0aGUgaGF0aW5n'
    },
    {
        Id: 3122022,
        Name: 'VGhlIFJlZmxleA==',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1984,
        Album: 'U2V2ZW4gYW5kIHRoZSBSYWdnZWQgVGlnZXI=',
        Lyrics: 'U28sIHdoeSBkb24ndCB5b3UgdXNlIGl0PyBUcnkgbm90IHRvIGJydWlzZSBpdA=='
    },
    {
        Id: 15032023,
        Name: 'U2lzdGVyIENocmlzdGlhbg==',
        Artist: 'TmlnaHQgUmFuZ2Vy',
        Year: 1984,
        Album: 'TWlkbmlnaHQgTWFkbmVzcw==',
        Lyrics: 'V2hhdCdzIHlvdXIgcHJpY2UgZm9yIGZsaWdodD8='
    },
    {
        Id: 25032023,
        Name: 'SSBXYW5uYSBSb2Nr',
        Artist: 'VHdpc3RlZCBTaXN0ZXI=',
        Year: 1984,
        Album: 'U3RheSBIdW5ncnk=',
        Lyrics: 'U28gaWYgeW91IGFzayBtZSB3aHkgSSBsaWtlIHRoZSB3YXkgSSBwbGF5IGl0'
    },
    {
        Id: 30052023,
        Name: 'Uml2ZXJzIG9mIEJhYnlsb24=',
        Artist: 'Qm9uZXkgTS4=',
        Year: 1978,
        Album: 'TmlnaHRmbGlnaHQgdG8gVmVudXM=',
        Lyrics: 'V2hlbiB3ZSByZW1lbWJlcmVkIFppb24='
    },
    {
        Id: 13052023,
        Name: 'SG9va2VkIG9uIGEgRmVlbGluZw==',
        Artist: 'Qmx1ZSBTd2VkZQ==',
        Year: 1974,
        Album: 'SG9va2VkIG9uIGEgRmVlbGluZw==',
        Lyrics: 'TGlwcyBhcyBzd2VldCBhcyBjYW5keQ=='
    },
    {
        Id: 28012023,
        Name: 'V2FudGVkIERlYWQgb3IgQWxpdmU=',
        Artist: 'Qm9uIEpvdmk=',
        Year: 1987,
        Album: 'U2xpcHBlcnkgV2hlbiBXZXQ=',
        Lyrics: 'SSdtIGEgY293Ym95IG9uIGEgc3RlZWwgaG9yc2UgSSByaWRl'
    },
    {
        Id: 20102022,
        Name: 'QmxhY2sgVmVsdmV0',
        Artist: 'QWxhbm5haCBNeWxlcw==',
        Year: 1989,
        Album: 'QWxhbm5haCBNeWxlcw==',
        Lyrics: 'V2l0aCB0aGF0IHNsb3cgc291dGhlcm4gc3R5bGU='
    },
    {
        Id: 2042023,
        Name: 'V2luZCBvZiBDaGFuZ2U=',
        Artist: 'U2NvcnBpb25z',
        Year: 1991,
        Album: 'Q3JhenkgV29ybGQ=',
        Lyrics: 'VGFrZSBtZSB0byB0aGUgbWFnaWMgb2YgdGhlIG1vbWVudA=='
    },
    {
        Id: 3112023,
        Name: 'SGVhcnQgb2YgU3RvbmU=',
        Artist: 'Q2hlcg==',
        Year: 1990,
        Album: 'SGVhcnQgb2YgU3RvbmU=',
        Lyrics: 'RG8geW91IGxvc2UgYW5kIHdpbiBvciB3aW4gYW5kIGxvc2U/'
    },
    {
        Id: 20092023,
        Name: 'SXQgTXVzdCBIYXZlIEJlZW4gTG92ZQ==',
        Artist: 'Um94ZXR0ZQ==',
        Year: 1987,
        Album: 'UGVhcmxzIG9mIFBhc3Npb24=',
        Lyrics: 'TGlrZSBhIHRlYXJkcm9wIGluIHlvdXIgcGFsbQ=='
    },
    {
        Id: 22082022,
        Name: 'R29vZCBWaWJyYXRpb25z',
        Artist: 'VGhlIEJlYWNoIEJveXM=',
        Year: 1967,
        Album: 'U21pbGV5IFNtaWxl',
        Lyrics: 'U2hlJ3MgZ2l2aW5nIG1lIGV4Y2l0YXRpb25z'
    },
    {
        Id: 28112022,
        Name: 'SGVhcnQgb2YgR2xhc3M=',
        Artist: 'QmxvbmRpZQ==',
        Year: 1979,
        Album: 'UGFyYWxsZWwgTGluZXM=',
        Lyrics: 'T25jZSBJIGhhZCBhIGxvdmUgYW5kIGl0IHdhcyBkaXZpbmU='
    },
    {
        Id: 6072023,
        Name: 'V3V0aGVyaW5nIEhlaWdodHM=',
        Artist: 'S2F0ZSBCdXNo',
        Year: 1978,
        Album: 'VGhlIEtpY2sgSW5zaWRl',
        Lyrics: 'VGhleSB0b2xkIG1lIEkgd2FzIGdvaW5nIHRvIGxvc2UgdGhlIGZpZ2h0'
    },
    {
        Id: 13012023,
        Name: 'QmFjayB0byBCbGFjaw==',
        Artist: 'QW15IFdpbmVob3VzZQ==',
        Year: 2007,
        Album: 'QmFjayB0byBCbGFjaw==',
        Lyrics: 'V2Ugb25seSBzYWlkIGdvb2RieWUgd2l0aCB3b3Jkcw=='
    },
    {
        Id: 12082023,
        Name: 'V2FsayBPbiBCeQ==',
        Artist: 'RGlvbm5lIFdhcndpY2s=',
        Year: 1964,
        Album: 'TWFrZSBXYXkgZm9yIERpb25uZSBXYXJ3aWNr',
        Lyrics: 'Rm9vbGlzaCBwcmlkZSwgdGhhdCdzIGFsbCB0aGF0IEkgaGF2ZSBsZWZ0'
    },
    {
        Id: 17022023,
        Name: 'U3RhbmQgYnkgTWU=',
        Artist: 'QmVuIEUuIEtpbmc=',
        Year: 1961,
        Album: 'RG9uJ3QgUGxheSBUaGF0IFNvbmch',
        Lyrics: 'T3IgdGhlIG1vdW50YWlucyBzaG91bGQgY3J1bWJsZSB0byB0aGUgc2Vh'
    },
    {
        Id: 25052023,
        Name: 'R29sZA==',
        Artist: 'U3BhbmRhdSBCYWxsZXQ=',
        Year: 1983,
        Album: 'VHJ1ZQ==',
        Lyrics: 'QW5kIHlvdSBjb3VsZCBsZWF2ZSBtZSBzdGFuZGluZyBzbyB0YWxs'
    },
    {
        Id: 26022023,
        Name: 'VHJ1ZQ==',
        Artist: 'U3BhbmRhdSBCYWxsZXQ=',
        Year: 1983,
        Album: 'VHJ1ZQ==',
        Lyrics: 'SSBib3VnaHQgYSB0aWNrZXQgdG8gdGhlIHdvcmxk'
    },
    {
        Id: 17072023,
        Name: 'T3JkaW5hcnkgV29ybGQ=',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1992,
        Album: 'RHVyYW4gRHVyYW4=',
        Lyrics: 'Q2FtZSBpbiBmcm9tIGEgcmFpbnkgVGh1cnNkYXk='
    },
    {
        Id: 5122022,
        Name: 'QmFuZCBvbiB0aGUgUnVu',
        Artist: 'UGF1bCBNY0NhcnRuZXkgYW5kIFdpbmdz',
        Year: 1974,
        Album: 'QmFuZCBvbiB0aGUgUnVu',
        Lyrics: 'QWxsIEkgbmVlZCBpcyBhIHBpbnQgYSBkYXkgaWYgSSBldmVyIGdldCBvdXQgb2YgaGVyZQ=='
    },
    {
        Id: 29072023,
        Name: 'Sm9sZW5l',
        Artist: 'RG9sbHkgUGFydG9u',
        Year: 1973,
        Album: 'Sm9sZW5l',
        Lyrics: 'SSdtIGJlZ2dpbmcgb2YgeW91LCBwbGVhc2UgZG9uJ3QgdGFrZSBteSBtYW4='
    },
    {
        Id: 11092022,
        Name: 'Q3J1ZWwgU3VtbWVy',
        Artist: 'QmFuYW5hcmFtYQ==',
        Year: 1983,
        Album: 'QmFuYW5hcmFtYQ==',
        Lyrics: 'VHJ5aW5nIHRvIHNtaWxlLCBidXQgdGhlIGFpciBpcyBzbyBoZWF2eSBhbmQgZHJ5'
    },
    {
        Id: 18102022,
        Name: 'RWRnZSBvZiBTZXZlbnRlZW4=',
        Artist: 'U3RldmllIE5pY2tz',
        Year: 1982,
        Album: 'QmVsbGEgRG9ubmE=',
        Lyrics: 'U2luZ3MgYSBzb25nLCBzb3VuZHMgbGlrZSBzaGUncyBzaW5naW4n'
    },
    {
        Id: 3062023,
        Name: 'QnVybg==',
        Artist: 'RWxsaWUgR291bGRpbmc=',
        Year: 2013,
        Album: 'SGFsY3lvbiBEYXlz',
        Lyrics: 'Q2F1c2Ugd2UgZ290IHRoZSBmaXJlLCBmaXJlLCBmaXJl'
    },
    {
        Id: 26112022,
        Name: 'V29yayBmcm9tIEhvbWU=',
        Artist: 'RmlmdGggSGFybW9ueSBmZWF0LiBUeSBEb2xsYSAkaWdu',
        Year: 2016,
        Album: 'Ny8yNw==',
        Lyrics: 'WW91IGRvbid0IGdvdHRhIGdvIHRvIHdvcmssIHdvcmssIHdvcmssIHdvcms='
    },
    {
        Id: 3032023,
        Name: 'Qm9vbSBDbGFw',
        Artist: 'Q2hhcmxpIFhDWA==',
        Year: 2014,
        Album: 'U3Vja2Vy',
        Lyrics: 'WW91J3JlIHRoZSBnbGl0dGVyIGluIHRoZSBkYXJrbmVzcyBvZiBteSB3b3JsZA=='
    },
    {
        Id: 20122022,
        Name: 'VmVudXM=',
        Artist: 'QmFuYW5hcmFtYQ==',
        Year: 1986,
        Album: 'VHJ1ZSBDb25mZXNzaW9ucw==',
        Lyrics: 'U2hlJ3MgZ290IGl0LCB5ZWFoIGJhYnkgc2hlJ3MgZ290IGl0'
    },
    {
        Id: 24102023,
        Name: 'RnVua3l0b3du',
        Artist: 'TGlwcHMgSW5jLg==',
        Year: 1980,
        Album: 'TW91dGggdG8gTW91dGg=',
        Lyrics: 'R290dGEgbWFrZSBhIG1vdmUgdG8gYSB0b3duIHRoYXQncyByaWdodCBmb3IgbWU='
    },
    {
        Id: 14042023,
        Name: 'VGVsbCBJdCB0byBNeSBIZWFydA==',
        Artist: 'VGF5bG9yIERheW5l',
        Year: 1987,
        Album: 'VGVsbCBJdCB0byBNeSBIZWFydA==',
        Lyrics: 'SXMgdGhpcyByZWFsbHkgbG92ZSBvciBqdXN0IGEgZ2FtZQ=='
    },
    {
        Id: 25092023,
        Name: 'SmFpbGhvdXNlIFJvY2s=',
        Artist: 'RWx2aXMgUHJlc2xleQ==',
        Year: 1957,
        Album: 'SmFpbGhvdXNlIFJvY2s=',
        Lyrics: 'RXZlcnlib2R5IGluIHRoZSB3aG9sZSBjZWxsIGJsb2Nr'
    },
    {
        Id: 14112023,
        Name: 'UHVtcCBVcCB0aGUgSmFt',
        Artist: 'VGVjaG5vdHJvbmlj',
        Year: 1989,
        Album: 'UHVtcCBVcCB0aGUgSmFtOiBUaGUgQWxidW0=',
        Lyrics: 'R2V0IHlvdXIgYm9vdHkgb24gdGhlIGZsb29yIHRvbmlnaHQ='
    },
    {
        Id: 7052023,
        Name: 'TW92aW5nIE9uIFVw',
        Artist: 'TSBQZW9wbGU=',
        Year: 1993,
        Album: 'RWxlZ2FudCBTbHVtbWluZw==',
        Lyrics: 'Tm90aGluZyBjYW4gc3RvcCBtZQ=='
    },
    {
        Id: 10052023,
        Name: 'WW91IEdldCBXaGF0IFlvdSBHaXZl',
        Artist: 'TmV3IFJhZGljYWxz',
        Year: 1998,
        Album: 'TWF5YmUgWW91J3ZlIEJlZW4gQnJhaW53YXNoZWQgVG9v',
        Lyrics: 'WW91J3ZlIGdvdCB0aGUgbXVzaWMgaW4geW91'
    },
    {
        Id: 2082023,
        Name: 'TG9uZWx5',
        Artist: 'QWtvbg==',
        Year: 2005,
        Album: 'VHJvdWJsZQ==',
        Lyrics: 'SSBoYXZlIG5vYm9keSBmb3IgbXkgb3du'
    },
    {
        Id: 3102022,
        Name: 'VGFrZSBNZSB0byBDaHVyY2g=',
        Artist: 'SG96aWVy',
        Year: 2013,
        Album: 'SG96aWVy',
        Lyrics: 'T2ZmZXIgbWUgdGhhdCBkZWF0aGxlc3MgZGVhdGg='
    },
    {
        Id: 14022023,
        Name: 'QmF0IE91dCBvZiBIZWw=',
        Artist: 'TWVhdCBMb2Fm',
        Year: 1977,
        Album: 'QmF0IE91dCBvZiBIZWxs',
        Lyrics: 'SSdsbCBiZSBnb25lIHdoZW4gdGhlIG1vcm5pbmcgY29tZXM='
    },
    {
        Id: 22112023,
        Name: 'QWNlIG9mIFNwYWRlcw==',
        Artist: 'TW909nJoZWFk',
        Year: 1980,
        Album: 'QWNlIG9mIFNwYWRlcw==',
        Lyrics: 'U2V2ZW4gb3IgRWxldmVuLCBzbmFrZSBleWVzIHdhdGNoaW5nIHlvdQ=='
    },
    {
        Id: 16112023,
        Name: 'QWxsIFJpZ2h0IE5vdw==',
        Artist: 'RnJlZQ==',
        Year: 1970,
        Album: 'RmlyZSBhbmQgV2F0ZXI=',
        Lyrics: 'U21pbGluZyBmcm9tIGhlciBoZWFkIHRvIGhlciBmZWV0'
    },
    {
        Id: 13122022,
        Name: 'SW4gVG9vIERlZXA=',
        Artist: 'U3VtIDQx',
        Year: 2001,
        Album: 'QWxsIEtpbGxlciBObyBGaWxsZXI=',
        Lyrics: 'SW5zdGVhZCBvZiBnb2luZyB1bmRlcg=='
    },
    {
        Id: 29082023,
        Name: 'QnJlYWtpbmcgRnJlZQ==',
        Artist: 'WmFjIEVmcm9uLCBWYW5lc3NhIEh1ZGdlbnMgYW5kIERyZXcgU2VlbGV5',
        Year: 2006,
        Album: 'SGlnaCBTY2hvb2wgTXVzaWNhbA==',
        Lyrics: 'TGlrZSBhIHdhdmUgdGhlIG9jZWFuIGp1c3QgY2FuJ3QgY29udHJvbA=='
    },
    {
        Id: 27102023,
        Name: 'U2F4',
        Artist: 'RmxldXIgRWFzdA==',
        Year: 2015,
        Album: 'TG92ZSwgU2F4IGFuZCBGbGFzaGJhY2tz',
        Lyrics: 'VGhlIHR5cGUgb2YgcmVkIGhvdCBsb3ZlIHRoYXQgZ290IG1lIGZyZWV6aW4nIGNvbGQ='
    },
    {
        Id: 4052023,
        Name: 'VmFsZXJpZQ==',
        Artist: 'TWFyayBSb25zb24gZmVhdC4gQW15IFdpbmVob3VzZQ==',
        Year: 2007,
        Album: 'VmVyc2lvbg==',
        Lyrics: 'U3RvcCBtYWtpbicgYSBmb29sIG91dCBvZiBtZQ=='
    },
    {
        Id: 26092023,
        Name: 'TWFtYSBEbyB0aGUgSHVtcA==',
        Artist: 'Uml6emxlIEtpY2tz',
        Year: 2011,
        Album: 'U3RlcmVvIFR5cGljYWw=',
        Lyrics: 'Q29taW5nIGluIHdpdGggYSBzb3VuZCBmcmVzaGVyIHRoYW4gY3V0IGdyYXNz'
    },
    {
        Id: 8102023,
        Name: 'VGFrZSBZb3VyIE1hbWE=',
        Artist: 'U2Npc3NvciBTaXN0ZXJz',
        Year: 2004,
        Album: 'U2Npc3NvciBTaXN0ZXJz',
        Lyrics: 'V2UnbGwgbGV0IHRoZSBnb29kIHRpbWVzIGFsbCByb2xsIG91dA=='
    },
    {
        Id: 8092022,
        Name: 'VHJhZ2VkeQ==',
        Artist: 'U3RlcHM=',
        Year: 1998,
        Album: 'U3RlcCBPbmU=',
        Lyrics: 'SSByZWFsbHkgc2hvdWxkIGJlIGhvbGRpbmcgeW91'
    },
    {
        Id: 8032023,
        Name: 'U3VkZGVubHkgSSBTZWU=',
        Artist: 'S1QgVHVuc3RhbGw=',
        Year: 2005,
        Album: 'RXllIHRvIHRoZSBUZWxlc2NvcGU=',
        Lyrics: 'V2h5IHRoZSBoZWxsIGl0IG1lYW5zIHNvIG11Y2ggdG8gbWU='
    },
    {
        Id: 11022023,
        Name: 'VGhlIEZlYXI=',
        Artist: 'TGlseSBBbGxlbg==',
        Year: 2008,
        Album: 'SXQncyBOb3QgTWUsIEl0J3MgWW91',
        Lyrics: 'SSdsbCB0YWtlIG15IGNsb3RoZXMgb2ZmIGFuZCBpdCB3aWxsIGJlIHNoYW1lbGVzcw=='
    },
    {
        Id: 27122022,
        Name: 'REFSRQ==',
        Artist: 'R29yaWxsYXogZmVhdC4gU2hhdW4gUnlkZXI=',
        Year: 2005,
        Album: 'RGVtb24gRGF5cw==',
        Lyrics: 'SXQncyBjb21pbmcgdXA='
    },
    {
        Id: 20112022,
        Name: 'Qm9vbWJhc3RpYw==',
        Artist: 'U2hhZ2d5',
        Year: 1995,
        Album: 'Qm9vbWJhc3RpYw==',
        Lyrics: 'U2hlIHNheXMgSSdtIE1yLiBSbw=='
    },
    {
        Id: 26032023,
        Name: 'RmFzdCBGb29kIFNvbmc=',
        Artist: 'RmFzdCBGb29kIFJvY2tlcnM=',
        Year: 2003,
        Album: 'SXQncyBOZXZlciBFYXN5IEJlaW5nIENoZWVzeQ==',
        Lyrics: 'WW91J3ZlIGdvdCB0aGUgdGFzdGUgSSBjYW4ndCByZXNpc3Q='
    },
    {
        Id: 7072023,
        Name: 'V2hhdCBhIFdvbmRlcmZ1bCBXb3JsZA==',
        Artist: 'TG91aXMgQXJtc3Ryb25n',
        Year: 1967,
        Album: 'V2hhdCBhIFdvbmRlcmZ1bCBXb3JsZA==',
        Lyrics: 'SSBzZWUgc2tpZXMgb2YgYmx1ZSBhbmQgY2xvdWRzIG9mIHdoaXRl'
    },
    {
        Id: 4112022,
        Name: 'TG92ZSBhbmQgTWFycmlhZ2U=',
        Artist: 'RnJhbmsgU2luYXRyYQ==',
        Year: 1955,
        Album: 'VGhpcyBpcyBTaW5hdHJhIQ==',
        Lyrics: 'WW91IGNhbid0IGhhdmUgb25lIHdpdGhvdXQgdGhlIG90aGVy'
    },
    {
        Id: 1032023,
        Name: 'RnJvbSBUaGlzIE1vbWVudCBPbg==',
        Artist: 'U2hhbmlhIFR3YWlu',
        Year: 1998,
        Album: 'Q29tZSBPbiBPdmVy',
        Lyrics: 'TXkgZHJlYW1zIGNhbWUgdHJ1ZSBiZWNhdXNlIG9mIHlvdQ=='
    },
    {
        Id: 14032023,
        Name: 'QnJvd24gRXllZCBHaXJs',
        Artist: 'VmFuIE1vcnJpc29u',
        Year: 1967,
        Album: 'Qmxvd2luJyBZb3VyIE1pbmQh',
        Lyrics: 'RG8geW91IHJlbWVtYmVyIHdoZW4gd2UgdXNlZCB0byBzaW5n'
    },
    {
        Id: 30082023,
        Name: 'V2UgQXJl',
        Artist: 'QW5hIEpvaG5zc29u',
        Year: 2004,
        Album: 'VGhlIFdheSBJIEFt',
        Lyrics: 'WW91IHNheSB3ZSdyZSBub3QgcmVzcG9uc2libGU='
    },
    {
        Id: 10042023,
        Name: 'QWdhZG9v',
        Artist: 'QmxhY2sgTGFjZQ==',
        Year: 1984,
        Album: 'UGFydHkgUGFydHk=',
        Lyrics: 'UHVzaCBwaW5lYXBwbGUsIHNoYWtlIHRoZSB0cmVl'
    },
    {
        Id: 28042023,
        Name: 'U28gTWFjaA==',
        Artist: 'U2luaXR0YQ==',
        Year: 1985,
        Album: 'U2luaXR0YSE=',
        Lyrics: 'SGUncyBnb3QgdG8gYmUgYmlnIGFuZCBzdHJvbmc='
    },
    {
        Id: 31082023,
        Name: 'U2Vhc29ucyBpbiB0aGUgU3Vu',
        Artist: 'VGVycnkgSmFja3M=',
        Year: 1973,
        Album: 'U2Vhc29ucyBpbiB0aGUgU3Vu',
        Lyrics: 'V2UgaGFkIGpveSwgd2UgaGFkIGZ1bg=='
    },
    {
        Id: 10012023,
        Name: 'VGltZSBBZnRlciBUaW1l',
        Artist: 'Q3luZGkgTGF1cGVy',
        Year: 1984,
        Album: 'U2hlJ3MgU28gVW51c3VhbA==',
        Lyrics: 'SWYgeW91IGZhbGwsIEkgd2lsbCBjYXRjaCB5b3UsIEknbGwgYmUgd2FpdGluZw=='
    },
    {
        Id: 1052023,
        Name: 'RXllcyBXaXRob3V0IGEgRmFjZQ==',
        Artist: 'QmlsbHkgSWRvbA==',
        Year: 1984,
        Album: 'UmViZWwgWWVsbA==',
        Lyrics: 'R290IG5vIGh1bWFuIGdyYWNl'
    },
    {
        Id: 14112022,
        Name: 'VGh1bmRlcnN0cnVjaw==',
        Artist: 'QUMvREM=',
        Year: 1990,
        Album: 'VGhlIFJhem9ycyBFZGdl',
        Lyrics: 'QnJva2UgYWxsIHRoZSBydWxlcywgcGxheWVkIGFsbCB0aGUgZm9vbHM='
    },
    {
        Id: 26122023,
        Name: 'TWFzdGVyIG9mIFB1cHBldHM=',
        Artist: 'TWV0YWxsaWNh',
        Year: 1986,
        Album: 'TWFzdGVyIG9mIFB1cHBldHM=',
        Lyrics: 'SnVzdCBjYWxsIG15IG5hbWUgJ2NhdXNlIEknbGwgaGVhciB5b3Ugc2NyZWFt'
    },
    {
        Id: 31102023,
        Name: 'QW5vdGhlciBCcmljayBpbiB0aGUgV2FsbA==',
        Artist: 'UGluayBGbG95ZA==',
        Year: 1979,
        Album: 'VGhlIFdhbA==',
        Lyrics: 'V2UgZG9uJ3QgbmVlZCBubyBlZHVjYXRpb24='
    },
    {
        Id: 22072023,
        Name: 'UmlnaHQgSGVyZSBXYWl0aW5n',
        Artist: 'UmljaGFyZCBNYXJ4',
        Year: 1989,
        Album: 'UmVwZWF0IE9mZmVuZGVy',
        Lyrics: 'V2hhdGV2ZXIgaXQgdGFrZXMgb3IgaG93IG15IGhlYXJ0IGJyZWFrcw=='
    },
    {
        Id: 24112022,
        Name: 'QWxvbmU=',
        Artist: 'SGVhcnQ=',
        Year: 1987,
        Album: 'QmFkIEFuaW1hbHM=',
        Lyrics: 'Tm93IGl0IGNoaWxscyBtZSB0byB0aGUgYm9uZQ=='
    },
    {
        Id: 1102022,
        Name: 'SXMgVGhpcyBMb3Zl',
        Artist: 'V2hpdGVzbmFrZQ==',
        Year: 1987,
        Album: 'V2hpdGVzbmFrZQ==',
        Lyrics: 'SSBzaG91bGQgaGF2ZSBrbm93biBiZXR0ZXIgdGhhbiB0byBsZXQgeW91IGdvIGFsb25l'
    },
    {
        Id: 25112022,
        Name: 'SGVsbHMgQmVsbHM=',
        Artist: 'QUMvREM=',
        Year: 1980,
        Album: 'QmFjayBpbiBCbGFjaw==',
        Lyrics: 'SSdtIGNvbWluZyBvbiBsaWtlIGEgaHVycmljYW5l'
    },
    {
        Id: 7022023,
        Name: 'Vm9ndWU=',
        Artist: 'TWFkb25uYQ==',
        Year: 1990,
        Album: 'SSdtIEJyZWF0aGxlc3M=',
        Lyrics: 'WW91IHRyeSBldmVyeXRoaW5nIHlvdSBjYW4gdG8gZXNjYXBl'
    },
    {
        Id: 2092023,
        Name: 'TGlrZSBhIFZpcmdpbg==',
        Artist: 'TWFkb25uYQ==',
        Year: 1984,
        Album: 'TGlrZSBhIFZpcmdpbg==',
        Lyrics: 'VG91Y2hlZCBmb3IgdGhlIHZlcnkgZmlyc3QgdGltZQ=='
    },
    {
        Id: 27082023,
        Name: 'VG95IFNvbGRpZXJz',
        Artist: 'TWFydGlrYQ==',
        Year: 1989,
        Album: 'TWFydGlrYQ==',
        Lyrics: 'U3RlcCBieSBzdGVwLCBoZWFydCB0byBoZWFydA=='
    },
    {
        Id: 19032023,
        Name: 'QWxsIE5pZ2h0IExvbmc=',
        Artist: 'TGlvbmVsIFJpY2hpZQ==',
        Year: 1983,
        Album: 'Q2FuJ3QgU2xvdyBEb3du',
        Lyrics: 'VGhyb3cgYXdheSB0aGUgd29yayB0byBiZSBkb25l'
    },
    {
        Id: 16042023,
        Name: 'V2UgQmVsb25n',
        Artist: 'UGF0IEJlbmF0YXI=',
        Year: 1984,
        Album: 'VHJvcGljbw==',
        Lyrics: 'V2hhdGV2ZXIgd2UgZGVueSBvciBlbWJyYWNl'
    },
    {
        Id: 16072023,
        Name: 'SGVhcnQgYW5kIFNvdWw=',
        Artist: 'VCdQYXU=',
        Year: 1987,
        Album: 'QnJpZGdlIG9mIFNwaWVz',
        Lyrics: 'R2l2ZSBhIGxpdHRsZSBiaXQgb2YgbG92ZSB0byBncm93'
    },
    {
        Id: 25012023,
        Name: 'RGVzZXJ0IFJvc2U=',
        Artist: 'U3RpbmcgZmVhdC4gQ2hlYiBNYW1p',
        Year: 1999,
        Album: 'QnJhbmQgTmV3IERheQ==',
        Lyrics: 'SSBkcmVhbSBvZiBnYXJkZW5zIGluIHRoZSBkZXNlcnQgc2FuZA=='
    },
    {
        Id: 6062023,
        Name: 'QWNoeSBCcmVha3kgSGVhcnQ=',
        Artist: 'QmlsbHkgUmF5IEN5cnVz',
        Year: 1992,
        Album: 'U29tZSBHYXZlIEFsbA==',
        Lyrics: 'WW91IGNhbiB0ZWxsIG15IGZlZXQgdG8gaGl0IHRoZSBmbG9vcg=='
    },
    {
        Id: 22112022,
        Name: 'VGhlIEJhZCBUb3VjaA==',
        Artist: 'Qmxvb2Rob3VuZCBHYW5n',
        Year: 1999,
        Album: 'SG9vcmF5IGZvciBCb29iaWVz',
        Lyrics: 'WW91IGFuZCBtZSBiYWJ5IGFpbid0IG5vdGhpbmcgYnV0IG1hbW1hbHM='
    },
    {
        Id: 18122022,
        Name: 'QnV0dG9ucw==',
        Artist: 'VGhlIFB1c3N5Y2F0IERvbGxzIGZlYXQuIFNub29wIERvZ2c=',
        Year: 2006,
        Album: 'UENE',
        Lyrics: 'U2F5aW4nIHdoYXQgeW91IGdvbicgZG8gdG8gbWU='
    },
    {
        Id: 21092022,
        Name: 'SmVubnkgZnJvbSB0aGUgQmxvY2s=',
        Artist: 'SmVubmlmZXIgTG9wZXogZmVhdC4gSmFkYWtpc3MgYW5kIFN0eWxlcyBQ',
        Year: 2002,
        Album: 'VGhpcyBJcyBNZS4uLiBUaGVu',
        Lyrics: 'VXNlZCB0byBoYXZlIGEgbGl0dGxlLCBub3QgSSBoYXZlIGEgbG90'
    },
    {
        Id: 22022023,
        Name: 'QmFkIERheQ==',
        Artist: 'RGFuaWVsIFBvd3Rlcg==',
        Year: 2005,
        Album: 'RGFuaWVsIFBvd3Rlcg==',
        Lyrics: 'WW91IHNpbmcgYSBzYWQgc29uZyBqdXN0IHRvIHR1cm4gaXQgYXJvdW5k'
    },
    {
        Id: 2112023,
        Name: 'VGhua3MgZnIgdGhlIE1tcnM=',
        Artist: 'RmFsbCBPdXQgQm95',
        Year: 2007,
        Album: 'SW5maW5pdHkgb24gSGlnaA==',
        Lyrics: 'T25lIG5pZ2h0IGFuZCBvbmUgbW9yZSB0aW1l'
    },
    {
        Id: 29012023,
        Name: 'U2V2ZW4gTmF0aW9uIEFybXk=',
        Artist: 'VGhlIFdoaXRlIFN0cmlwZXM=',
        Year: 2002,
        Album: 'RWxlcGhhbnQ=',
        Lyrics: 'SSdtIGdvbm5hIGZpZ2h0ICdlbSBvZmY='
    },
    {
        Id: 3012023,
        Name: 'U3RhcnM=',
        Artist: 'U2ltcGx5IFJlZA==',
        Year: 1991,
        Album: 'U3RhcnM=',
        Lyrics: 'SSBob3BlIHlvdSBjb21wcmVoZW5k'
    },
    {
        Id: 18122023,
        Name: 'RmFpcmdyb3VuZA==',
        Artist: 'U2ltcGx5IFJlZA==',
        Year: 1995,
        Album: 'TGlmZQ==',
        Lyrics: 'SSBsb3ZlIHRoZSB0aG91Z2h0IG9mIGNvbWluZyBob21lIHRvIHlvdQ=='
    },
    {
        Id: 13042023,
        Name: 'TWFtYQ==',
        Artist: 'R2VuZXNpcw==',
        Year: 1983,
        Album: 'R2VuZXNpcw==',
        Lyrics: 'Q2FuJ3QgeW91IGZlZWwgbXkgaGVhcnQ='
    },
    {
        Id: 17122022,
        Name: 'U3VidXJiaWE=',
        Artist: 'UGV0IFNob3AgQm95cw==',
        Year: 1986,
        Album: 'UGxlYXNl',
        Lyrics: 'TGV0J3MgdGFrZSBhIHJpZGUgYW5kIHJ1biB3aXRoIHRoZSBkb2dzIHRvbmlnaHQ='
    },
    {
        Id: 26072023,
        Name: 'QWx3YXlzIG9uIE15IE1pbmQ=',
        Artist: 'UGV0IFNob3AgQm95cw==',
        Year: 1987,
        Album: 'SXQgQ291bGRuJ3QgSGFwcGVuIEhlcmU=',
        Lyrics: 'TGl0dGxlIHRoaW5ncyBJIHNob3VsZCBoYXZlIHNhaWQgYW5kIGRvbmU='
    },
    {
        Id: 21092023,
        Name: 'SGVhcnQ=',
        Artist: 'UGV0IFNob3AgQm95cw==',
        Year: 1988,
        Album: 'QWN0dWFsbHk=',
        Lyrics: 'TXkgaGVhcnQgc3RhcnRzIG1pc3NpbmcgYSBiZWF0'
    },
    {
        Id: 10022023,
        Name: 'R28gV2VzdA==',
        Artist: 'VmlsbGFnZSBQZW9wbGU=',
        Year: 1979,
        Album: 'R28gV2VzdA==',
        Lyrics: 'TGlmZSBpcyBwZWFjZWZ1bCB0aGVyZQ=='
    },
    {
        Id: 29102022,
        Name: 'R2lybHMgb24gRmlsbQ==',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1981,
        Album: 'RHVyYW4gRHVyYW4=',
        Lyrics: 'TGlwc3RpY2sgY2hlcnJ5IGFsbCBvdmVyIHRoZSBsZW5zIGFzIHNoZSdzIGZhbGxpbmc='
    },
    {
        Id: 16022023,
        Name: 'SHVuZ3J5IExpa2UgdGhlIFdvbGY=',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1982,
        Album: 'Umlv',
        Lyrics: 'U3RyYWRkbGUgdGhlIGxpbmUsIGluIGRpc2NvcmQgYW5kIHJoeW1l'
    },
    {
        Id: 6042023,
        Name: 'U2F2ZSBhIFByYXllcg==',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1982,
        Album: 'Umlv',
        Lyrics: 'U2F2ZSBpdCAndGlsIHRoZSBtb3JuaW5nIGFmdGVy'
    },
    {
        Id: 14102022,
        Name: 'Q2lyY2xlIGluIHRoZSBTYW5k',
        Artist: 'QmVsaW5kYSBDYXJsaXNsZQ==',
        Year: 1988,
        Album: 'SGVhdmVuIG9uIEVhcnRo',
        Lyrics: 'TmV2ZXIgZW5kaW5nIGxvdmUgaXMgd2hhdCB3ZSd2ZSBmb3VuZA=='
    },
    {
        Id: 9022023,
        Name: 'UnVuIHRvIHRoZSBIaWxscw==',
        Artist: 'SXJvbiBNYWlkZW4=',
        Year: 1982,
        Album: 'VGhlIE51bWJlciBvZiB0aGUgQmVhc3Q=',
        Lyrics: 'UmlkaW5nIHRocm91Z2ggZHVzdCBjbG91ZHMgYW5kIGJhcnJlbiB3YXN0ZXM='
    },
    {
        Id: 19092023,
        Name: 'QmUgUXVpY2sgb3IgQmUgRGVhZA==',
        Artist: 'SXJvbiBNYWlkZW4=',
        Year: 1992,
        Album: 'RmVhciBvZiB0aGUgRGFyaw==',
        Lyrics: 'U25ha2UgZXllcyBpbiBoZWF2ZW4sIHRoZSB0aGllZiBpbiB5b3VyIGhhbmQ='
    },
    {
        Id: 6112022,
        Name: 'VGhlIE51bWJlciBvZiB0aGUgQmVhc3Q=',
        Artist: 'SXJvbiBNYWlkZW4=',
        Year: 1982,
        Album: 'VGhlIE51bWJlciBvZiB0aGUgQmVhc3Q=',
        Lyrics: 'SGVsbCBhbmQgZmlyZSB3YXMgc3Bhd25lZCB0byBiZSByZWxlYXNlZA=='
    },
    {
        Id: 25062023,
        Name: 'U2VlIFlvdQ==',
        Artist: 'RGVwZWNoZSBNb2Rl',
        Year: 1982,
        Album: 'QSBCcm9rZW4gRnJhbWU=',
        Lyrics: 'SSBqdXN0IHdhbnQgdG8gc2VlIHlvdXIgc3dlZXQgc21pbGU='
    },
    {
        Id: 29052023,
        Name: 'UGVvcGxlIGFyZSBQZW9wbGU=',
        Artist: 'RGVwZWNoZSBNb2Rl',
        Year: 1984,
        Album: 'U29tZSBHcmVhdCBSZXdhcmQ=',
        Lyrics: 'U28gd2h5IHNob3VsZCBpdCBiZSwgeW91IGFuZCBJIHNob3VsZCBnZXQgYWxvbmcgc28gYXdmdWxseQ=='
    },
    {
        Id: 9032023,
        Name: 'RGllIEFub3RoZXIgRGF5',
        Artist: 'TWFkb25uYQ==',
        Year: 2002,
        Album: 'RGllIEFub3RoZXIgRGF5',
        Lyrics: 'SSdtIGdvbm5hIGNsb3NlIG15IGJvZHkgbm93'
    },
    {
        Id: 2032023,
        Name: 'VGhlIExpdmluZyBEYXlsaWdodHM=',
        Artist: 'YS1oYQ==',
        Year: 1988,
        Album: 'U3RheSBPbiBUaGVzZSBSb2Fkcw==',
        Lyrics: 'VGhlIGxpdmluZydzIGluIHRoZSB3YXkgd2UgZGll'
    },
    {
        Id: 28122023,
        Name: 'QW5vdGhlciBXYXkgdG8gRGll',
        Artist: 'SmFjayBXaGl0ZSBhbmQgQWxpY2lhIEtleXM=',
        Year: 2008,
        Album: 'UXVhbnR1bSBvZiBTb2xhY2U=',
        Lyrics: 'QSBkcm9wIGluIHRoZSB3YXRlciwgYSBsb29rIGluIHlvdXIgZXll'
    },
    {
        Id: 16102022,
        Name: 'VGh1bmRlcmJhbGw=',
        Artist: 'VG9tIEpvbmVz',
        Year: 1965,
        Album: 'VGh1bmRlcmJhbGw=',
        Lyrics: 'SGUgYWN0cyB3aGlsZSBvdGhlciBtZW4ganVzdCB0YWxr'
    },
    {
        Id: 20042023,
        Name: 'TGl2ZSBhbmQgTGV0IERpZQ==',
        Artist: 'V2luZ3M=',
        Year: 1973,
        Album: 'TGl2ZSBhbmQgTGV0IERpZQ==',
        Lyrics: 'WW91IGdvdCB0byBnaXZlIHRoZSBvdGhlciBmZWxsb3cgaGVsbA=='
    },
    {
        Id: 16062023,
        Name: 'WW91IEtub3cgTXkgTmFtZQ==',
        Artist: 'Q2hyaXMgQ29ybmVsbA==',
        Year: 2006,
        Album: 'Q2FycnkgT24=',
        Lyrics: 'QXJtIHlvdXJzZWxmIGJlY2F1c2Ugbm8tb25lIGVsc2UgaGVyZSB3aWxsIHNhdmUgeW91'
    },
    {
        Id: 8092023,
        Name: 'U2t5ZmFsbA==',
        Artist: 'QWRlbGU=',
        Year: 2012,
        Album: 'U2t5ZmFs',
        Lyrics: 'SG9sZCB5b3VyIGJyZWF0aCBhbmQgY291bnQgdG8gdGVu'
    },
    {
        Id: 19122022,
        Name: 'Tm8gVGltZSB0byBEaWU=',
        Artist: 'QmlsbGllIEVpbGlzaA==',
        Year: 2020,
        Album: 'Tm8gVGltZSB0byBEaWU=',
        Lyrics: 'QXJlIHlvdSBkZWF0aCBvciBwYXJhZGlzZT8='
    },
    {
        Id: 9112022,
        Name: 'QSBWaWV3IHRvIGEgS2lsbA==',
        Artist: 'RHVyYW4gRHVyYW4=',
        Year: 1985,
        Album: 'QSBWaWV3IHRvIGEgS2lsbA==',
        Lyrics: 'RGFuY2UgaW50byB0aGUgZmlyZQ=='
    },
    {
        Id: 27092022,
        Name: 'R29sZGZpbmdlcg==',
        Artist: 'U2hpcmxleSBCYXNzZXk=',
        Year: 1964,
        Album: 'R29sZGZpbmdlcg==',
        Lyrics: 'Rm9yIGEgZ29sZGVuIGdpcmwga25vd3Mgd2hlbiBoZSdzIGtpc3NlZCBoZXI='
    },
    {
        Id: 21102022,
        Name: 'RGlhbW9uZHMgQXJlIEZvcmV2ZXI=',
        Artist: 'U2hpcmxleSBCYXNzZXk=',
        Year: 1971,
        Album: 'RGlhbW9uZHMgQXJlIEZvcmV2ZXI=',
        Lyrics: 'VGhleSBjYW4gc3RpbXVsYXRlIGFuZCB0ZWFzZSBtZQ=='
    },
    {
        Id: 19112023,
        Name: 'Q2hlcnJ5IFBpZQ==',
        Artist: 'V2FycmFudA==',
        Year: 1990,
        Album: 'Q2hlcnJ5IFBpZQ==',
        Lyrics: 'VGFzdGVzIHNvIGdvb2QsIG1ha2UgYSBncm93biBtYW4gY3J5'
    },
    {
        Id: 20072023,
        Name: 'VGFsayBEaXJ0eSB0byBNZQ==',
        Artist: 'UG9pc29u',
        Year: 1987,
        Album: 'TG9vayBXaGF0IHRoZSBDYXQgRHJhZ2dlZCBJbg==',
        Lyrics: 'RG93biB0aGUgYmFzZW1lbnQsIGxvY2sgdGhlIGNlbGxhciBkb29y'
    },
    {
        Id: 16092022,
        Name: 'SGVyZSBJIEdvIEFnYWlu',
        Artist: 'V2hpdGVzbmFrZQ==',
        Year: 1982,
        Album: 'U2FpbnRzICYgU2lubmVycw==',
        Lyrics: 'TGlrZSBhIGRyaWZ0ZXIgSSB3YXMgYm9ybiB0byB3YWxrIGFsb25l'
    },
    {
        Id: 29112022,
        Name: 'T3BlbiBBcm1z',
        Artist: 'Sm91cm5leQ==',
        Year: 1982,
        Album: 'RXNjYXBl',
        Lyrics: 'SG93IGNvdWxkIG91ciBsb3ZlIGJlIHNvIGJsaW5k'
    },
    {
        Id: 28102023,
        Name: 'V2Fsa2luZyBpbiBNZW1waGlz',
        Artist: 'Q2hlcg==',
        Year: 1990,
        Album: 'SXQncyBhIE1hbidzIFdvcmxk',
        Lyrics: 'SSB3YXMgd2Fsa2luZyB3aXRoIG15IGZlZXQgdGVuIGZlZXQgb2ZmIG9mIEJlYWxl'
    },
    {
        Id: 11062023,
        Name: 'Um9sbCB3aXRoIEl0',
        Artist: 'T2FzaXM=',
        Year: 1995,
        Album: 'KFdoYXQncyB0aGUgU3RvcnkpIE1vcm5pbmcgR2xvcnk/',
        Lyrics: 'SSdsbCBmaW5kIHRoZSBrZXkgdGhhdCBsZXRzIHlvdSBzbGlwIGluc2lkZQ=='
    },
    {
        Id: 1062023,
        Name: 'WW91IFNleHkgVGhpbmc=',
        Artist: 'SG90IENob2NvbGF0ZQ==',
        Year: 1975,
        Album: 'SG90IENob2NvbGF0ZQ==',
        Lyrics: 'SSBiZWxpZXZlIGluIG1pcmFjbGVz'
    },
    {
        Id: 4082023,
        Name: 'TGV0IE1lIEVudGVydGFpbiBZb3U=',
        Artist: 'Um9iYmllIFdpbGxpYW1z',
        Year: 1998,
        Album: 'TGlmZSBUaHJ1IGEgTGVucw==',
        Lyrics: 'SGVsbCBpcyBnb25lIGFuZCBoZWF2ZW4ncyBoZXJl'
    },
    {
        Id: 26052023,
        Name: 'VGhlIFJvY2thZmVsbGVyIFNrYW5r',
        Artist: 'RmF0Ym95IFNsaW0=',
        Year: 1998,
        Album: 'WW91J3ZlIENvbWUgYSBMb25nIFdheSwgQmFieQ==',
        Lyrics: 'Q2hlY2sgaXQgb3V0IG5vdywgdGhlIGZ1bmsgc291bCBicm90aGVy'
    },
    {
        Id: 6092023,
        Name: 'VHJ1ZSBDb2xvcnM=',
        Artist: 'UGhpbCBDb2xsaW5z',
        Year: 1998,
        Album: 'Li4uSGl0cw==',
        Lyrics: 'U28gZG9uJ3QgYmUgYWZyYWlkIHRvIGxldCB0aGVtIHNob3c='
    },
    {
        Id: 31072023,
        Name: 'T3V0IG9mIFJlYWNo',
        Artist: 'R2FicmllbGxl',
        Year: 2001,
        Album: 'UmlzZQ==',
        Lyrics: 'U28gY29uZnVzZWQsIG15IGhlYXJ0J3MgYnJ1aXNlZA=='
    },
    {
        Id: 4032023,
        Name: 'QWRkaWN0ZWQgdG8gQmFzcw==',
        Artist: 'U3dlZXQgRGlzdG9ydGVkIEhvbGlkYXk=',
        Year: 1998,
        Album: 'UHVyZXRvbmU=',
        Lyrics: 'SSBnb3QgdHdvIHBhbGUgaGFuZHMgdXAgYWdhaW5zdCB0aGUgd2luZG93IHBhbmU='
    },
    {
        Id: 12092023,
        Name: 'T25lIExvdmU=',
        Artist: 'Qmx1ZQ==',
        Year: 2002,
        Album: 'T25lIExvdmU=',
        Lyrics: 'Q2FuIGZsaXAgMTgwIGluIGEgbWF0dGVyIG9mIGRheXM='
    },
    {
        Id: 26102023,
        Name: 'QWxsIHRoZSBUaGluZ3MgU2hlIFNhaWQ=',
        Artist: 'dC5BLlQudS4=',
        Year: 2002,
        Album: 'MjAwIGttL2ggaW4gdGhlIFdyb25nIExhbmU=',
        Lyrics: 'UnVubmluJyB0aHJvdWdoIG15IGhlYWQ='
    },
    {
        Id: 21102023,
        Name: 'TW92ZSBZb3VyIEZlZXQ=',
        Artist: 'SnVuaW9yIFNlbmlvcg==',
        Year: 2002,
        Album: 'RC1ELURvbid0IERvbid0IFN0b3AgdGhlIEJlYXQ=',
        Lyrics: 'RC1kLWRvbid0LCBkb24ndCBzdG9wIHRoZSBiZWF0'
    },
    {
        Id: 5102023,
        Name: 'SkNC',
        Artist: 'Tml6bG9waQ==',
        Year: 2005,
        Album: 'SGFsZiBUaGVzZSBTb25ncyBBcmUgQWJvdXQgWW91',
        Lyrics: 'SSdtIEx1a2UsIEknbSBmaXZlIGFuZCBteSBEYWQncyBCcnVjZSBMZWU='
    },
    {
        Id: 21032023,
        Name: 'U291bmQgb2YgdGhlIFVuZGVyZ3JvdW5k',
        Artist: 'R2lybHMgQWxvdWQ=',
        Year: 2002,
        Album: 'U291bmQgb2YgdGhlIFVuZGVyZ3JvdW5k',
        Lyrics: 'VGhlIGJlYXQgb2YgdGhlIGRydW0gZ29lcyByb3VuZCBhbmQgcm91bmQ='
    },
    {
        Id: 21112023,
        Name: 'U29tZXdoZXJlIE9ubHkgV2UgS25vdw==',
        Artist: 'S2VhbmU=',
        Year: 2004,
        Album: 'SG9wZXMgYW5kIEZlYXJz',
        Lyrics: 'SSdtIGdldHRpbmcgdGlyZWQgYW5kIEkgbmVlZCBzb21ld2hlcmUgdG8gYmVnaW4='
    },
    {
        Id: 17122023,
        Name: 'QWxsIEFib3V0IFlvdQ==',
        Artist: 'TWNGbHk=',
        Year: 2005,
        Album: 'V29uZGVybGFuZA==',
        Lyrics: 'QW5kIEkgd291bGQgYW5zd2VyIGFsbCB5b3VyIHdpc2hlcywgaWYgeW91IGFza2VkIG1lIHRv'
    },
    {
        Id: 17112023,
        Name: 'U29tZWJvZHkgVG9sZCBNZQ==',
        Artist: 'VGhlIEtpbGxlcnM=',
        Year: 2004,
        Album: 'SG90IEZ1c3M=',
        Lyrics: 'SXQncyBub3QgY29uZmlkZW50aWFsLCBJJ3ZlIGdvdCBwb3RlbnRpYWw='
    },
    {
        Id: 4092023,
        Name: 'Q2FuZHltYW4=',
        Artist: 'Q2hyaXN0aW5hIEFndWlsZXJh',
        Year: 2007,
        Album: 'QmFjayB0byBCYXNpY3M=',
        Lyrics: 'SGUncyBhIG9uZS1zdG9wIHNob3AsIG1ha2VzIHRoZSBwYW50aWVzIGRyb3A='
    },
    {
        Id: 17092022,
        Name: 'U2h1dCBVcCBhbmQgRHJpdmU=',
        Artist: 'UmloYW5uYQ==',
        Year: 2007,
        Album: 'R29vZCBHaXJsIEdvbmUgQmFk',
        Lyrics: 'SSdtIHplcm8gdG8gNjAgaW4gdGhyZWUgcG9pbnQgZml2ZQ=='
    },
    {
        Id: 17112022,
        Name: 'VGhpcyBJcyB0aGUgTGlmZQ==',
        Artist: 'QW15IE1hY2RvbmFsZA==',
        Year: 2007,
        Album: 'VGhpcyBJcyB0aGUgTGlmZQ==',
        Lyrics: 'V2hlcmUgeW91IGdvbm5hIGdvLCB3aGVyZSB5b3UgZ29ubmEgc2xlZXAgdG9uaWdodA=='
    },
    {
        Id: 15112022,
        Name: 'Tm8gQWly',
        Artist: 'Sm9yZGluIFNwYXJrcw==',
        Year: 2008,
        Album: 'Sm9yZGluIFNwYXJrcw==',
        Lyrics: 'VGhhdCdzIGhvdyBJIGZlZWwgd2hlbmV2ZXIgeW91IGFpbid0IHRoZXJl'
    },
    {
        Id: 25122022,
        Name: 'U2hlIFdvbGY=',
        Artist: 'U2hha2lyYQ==',
        Year: 2009,
        Album: 'U2hlIFdvbGY=',
        Lyrics: 'Uy5PLlMsIHNoZSdzIGluIGRpc2d1aXNl'
    },
    {
        Id: 19012023,
        Name: 'RXZlcnlib2R5IGluIExvdmU=',
        Artist: 'SkxT',
        Year: 2009,
        Album: 'SkxT',
        Lyrics: 'SWYgeW91J3JlIGluIGxvdmUsIHB1dCB5b3VyIGhhbmRzIHVw'
    },
    {
        Id: 7092023,
        Name: 'QmFyYnJhIFN0cmVpc2FuZA==',
        Artist: 'RHVjayBTYXVjZQ==',
        Year: 2010,
        Album: 'UXVhY2s=',
        Lyrics: 'QmFyYnJhIFN0cmVpc2FuZA=='
    },
    {
        Id: 3102023,
        Name: 'V2hlcmUgVGhlbSBHaXJscyBBdA==',
        Artist: 'RGF2aWQgR3VldHRhIGZlYXQuIEZsbyBSaWRhIGFuZCBOaWNraSBNaW5hag==',
        Year: 2011,
        Album: 'Tm90aGluZyBidXQgdGhlIEJlYXQ=',
        Lyrics: 'U28gbWFueSBib3lzIGluIGhlcmUsIHdoZXJlIGRvIEkgYmVnaW4='
    },
    {
        Id: 9112023,
        Name: 'RG93biBXaXRoIHRoZSBUcnVtcGV0cw==',
        Artist: 'Uml6emxlIEtpY2tz',
        Year: 2011,
        Album: 'U3RlcmVvIFR5cGljYWw=',
        Lyrics: 'Q2hhbmdlIHlvdXIgYm95ZnJpZW5kLCBsZXQncyAnYXYgaGlt'
    },
    {
        Id: 23102022,
        Name: 'TG9ja2VkIE91dCBvZiBIZWF2ZW4=',
        Artist: 'QnJ1bm8gTWFycw==',
        Year: 2012,
        Album: 'VW5vcnRob2RveCBKdWtlYm94',
        Lyrics: 'TmV2ZXIgaGFkIG11Y2ggZmFpdGggaW4gbG92ZSBvciBtaXJhY2xlcw=='
    },
    {
        Id: 27082022,
        Name: 'UmVhZHkgb3IgTm90',
        Artist: 'QnJpZGdpdCBNZW5kbGVy',
        Year: 2012,
        Album: 'SGVsbG8gTXkgTmFtZSBJcy4uLg==',
        Lyrics: 'SSBsaWtlIHlvdXIgZmFjZSwgZG8geW91IGxpa2UgbXkgc29uZw=='
    },
    {
        Id: 14052023,
        Name: 'TmFzdHk=',
        Artist: 'UGl4aWUgTG90dA==',
        Year: 2014,
        Album: 'UGl4aWUgTG90dA==',
        Lyrics: 'V2FubmEgc2VlIHlvdSBzaGFrZSBpdCBkb3duIGJhYmU='
    },
    {
        Id: 15042023,
        Name: 'SGFsZiB0aGUgV29ybGQgQXdheQ==',
        Artist: 'QXVyb3Jh',
        Year: 2015,
        Album: 'QWxsIE15IERlbW9ucyBHcmVldGluZyBNZSBhcyBhIEZyaWVuZA==',
        Lyrics: 'WW91IGNhbid0IGdpdmUgbWUgdGhlIGRyZWFtcyB0aGF0IGFyZSBtaW5lIGFueXdheQ=='
    },
    {
        Id: 2052023,
        Name: 'S2lsbCBFbSBXaXRoIEtpbmRuZXNz',
        Artist: 'U2VsZW5hIEdvbWV6',
        Year: 2015,
        Album: 'UmV2aXZhbA==',
        Lyrics: 'V2UgZG9uJ3QgaGF2ZSB0byBmYWxsIGZyb20gZ3JhY2U='
    },
    {
        Id: 8082023,
        Name: 'QmFkIExpYXI=',
        Artist: 'U2VsZW5hIEdvbWV6',
        Year: 2017,
        Album: 'UmFyZQ==',
        Lyrics: 'T2ggSSdtIHRyeWluJywgSSdtIHRyeWluJywgSSdtIHRyeWluJw=='
    },
    {
        Id: 20012023,
        Name: 'SGF0ZSBNZQ==',
        Artist: 'RWxsaWUgR291bGRpbmcgYW5kIEp1aWNlIFdybGQ=',
        Year: 2019,
        Album: 'QnJpZ2h0ZXN0IEJsdWU=',
        Lyrics: 'SXQncyBhIHRoaW4gbGluZSBiZXR3ZWVuIGFsbCB0aGlzIGxvdmUgYW5kIGhhdGU='
    },
    {
        Id: 15102023,
        Name: 'QnJlYXRobGVzcw==',
        Artist: 'VGhlIENvcnJz',
        Year: 2000,
        Album: 'SW4gQmx1ZQ==',
        Lyrics: 'VGVtcHQgbWUsIHRlYXNlIG1lLCB1bnRpbCBJIGNhbid0IGRlbnkgdGhpcw=='
    },
    {
        Id: 12032023,
        Name: 'T25lIFdlZWs=',
        Artist: 'QmFyZW5ha2VkIExhZGllcw==',
        Year: 1998,
        Album: 'U3R1bnQ=',
        Lyrics: 'QnV0IGl0J2xsIHN0aWxsIGJlIHR3byBkYXlzICd0aWwgSSBzYXkgSSdtIHNvcnJ5'
    },
    {
        Id: 14012023,
        Name: 'RGFuaWVs',
        Artist: 'RWx0b24gSm9obg==',
        Year: 1973,
        Album: 'RG9uJ3QgU2hvb3QgTWUsIEknbSBPbmx5IHRoZSBQaWFubyBQbGF5ZXI=',
        Lyrics: 'VGhleSBzYXkgU3BhaW4gaXMgcHJldHR5LCB0aG91Z2ggSSd2ZSBuZXZlciBiZWVu'
    },
    {
        Id: 5042023,
        Name: 'QXJlIFlvdSBSZWFkeSBmb3IgTG92ZQ==',
        Artist: 'RWx0b24gSm9obg==',
        Year: 1979,
        Album: 'VGhlIFRob20gQmVsbCBTZXNzaW9ucw==',
        Lyrics: 'SSdsbCB3cml0ZSBhIHN5bXBob255IGp1c3QgZm9yIHlvdSBhbmQgbWU='
    },
    {
        Id: 5032023,
        Name: 'U29tZXRpbWVz',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 1999,
        Album: 'Li4uQmFieSBPbmUgTW9yZSBUaW1l',
        Lyrics: 'VGhlcmUncyB0aGluZ3MgYWJvdXQgbWUgeW91IGp1c3QgaGF2ZSB0byBrbm93'
    },
    {
        Id: 22102023,
        Name: 'TWUgQWdhaW5zdCB0aGUgTXVzaWM=',
        Artist: 'QnJpdG5leSBTcGVhcnMgYW5kIE1hZG9ubmE=',
        Year: 2003,
        Album: 'SW4gdGhlIFpvbmU=',
        Lyrics: 'SSB3YW5uYSBnZXQgaW4gdGhlIHpvbmU='
    },
    {
        Id: 20092022,
        Name: 'T3ZlcnByb3RlY3RlZA==',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2001,
        Album: 'QnJpdG5leQ==',
        Lyrics: 'SSBuZWVkIHRvIG1ha2UgbWlzdGFrZXMganVzdCB0byBsZWFybiB3aG8gSSBhbQ=='
    },
    {
        Id: 20022023,
        Name: 'SWYgVSBTZWVrIEFteQ==',
        Artist: 'QnJpdG5leSBTcGVhcnM=',
        Year: 2009,
        Album: 'Q2lyY3Vz',
        Lyrics: 'TG92ZSBtZSwgaGF0ZSBtZSwgc2F5IHdoYXQgeW91IHdhbnQgYWJvdXQgbWU='
    },
    {
        Id: 23112023,
        Name: 'Q2hlbHNlYSBEYWdnZXI=',
        Artist: 'VGhlIEZyYXRlbGxpcw==',
        Year: 2006,
        Album: 'Q29zdGVsbG8gTXVzaWM=',
        Lyrics: 'R2F2ZSBtZSBnZWFyLCB0aGFuayB5b3UgZGVhciwgYnJpbmcgeW91ciBzaXN0ZXIgb3ZlciBoZXJl'
    },
    {
        Id: 1092023,
        Name: 'VHVidGh1bXBpbmc=',
        Artist: 'Q2h1bWJhd2FtYmE=',
        Year: 1998,
        Album: 'VGh1YnRodW1wZXI=',
        Lyrics: 'SSBnZXQga25vY2tlZCBkb3duLCBidXQgSSBnZXQgdXAgYWdhaW4='
    },
    {
        Id: 30102023,
        Name: 'TGl0dGxlIE1l',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2013,
        Album: 'U2FsdXRl',
        Lyrics: 'VGVsbCBoZXIgc2hlJ3MgYmVhdXRpZnVsLCB3b25kZXJmdWwsIGV2ZXJ5dGhpbmcgc2hlIGRvZXNuJ3Qgc2Vl'
    },
    {
        Id: 22012023,
        Name: 'U2VjcmV0IExvdmUgU29uZw==',
        Artist: 'TGl0dGxlIE1peCBmZWF0LiBKYXNvbiBEZXJ1bG8=',
        Year: 2016,
        Album: 'R2V0IFdlaXJk',
        Lyrics: 'V2h5IGNhbid0IEkga2lzcyB5b3Ugb24gdGhlIGRhbmNlIGZsb29y'
    },
    {
        Id: 10102023,
        Name: 'T25seSBZb3U=',
        Artist: 'Q2hlYXQgQ29kZXMgYW5kIExpdHRsZSBNaXg=',
        Year: 2018,
        Album: 'TE01',
        Lyrics: 'SSdtIGJyb2tlbiBoZXJlIHRvbmlnaHQgYW5kIGRhcmxpbmcgbm8gb25lIGVsc2UgY2FuIGZpeCBtZQ=='
    },
    {
        Id: 12062023,
        Name: 'U3dlZXQgTWVsb2R5',
        Artist: 'TGl0dGxlIE1peA==',
        Year: 2020,
        Album: 'Q29uZmV0dGk=',
        Lyrics: 'QnV0IHRoZSBkYXkgaGUgZGlkIG1lIHdyb25nLCB0aGUgc29uZyBjb3VsZG4ndCBnbyBvbiBhbmQgb24='
    },
    {
        Id: 2112022,
        Name: 'TG92ZSBTaGFjaw==',
        Artist: 'VGhlIEItNTIncw==',
        Year: 1989,
        Album: 'Q29zbWljIFRoaW5n',
        Lyrics: 'U28gaHVycnkgdXAgYW5kIGJyaW5nIHlvdXIganVrZWJveCBtb25leQ=='
    },
    {
        Id: 2102022,
        Name: 'TXkgQmFuZA==',
        Artist: 'RDEy',
        Year: 2004,
        Album: 'RDEyIFdvcmxk',
        Lyrics: 'QWxsIGJlY2F1c2UgSSdtIHRoZSBsZWFkIHNpbmdlciBvZiBteSBiYW5k'
    },
    {
        Id: 20112023,
        Name: 'SWYgWW91IExlYXZlIE1lIE5vdw==',
        Artist: 'Q2hpY2Fnbw==',
        Year: 1976,
        Album: 'Q2hpY2FnbyBY',
        Lyrics: 'WW91J2xsIHRha2UgYXdheSB0aGUgYmlnZ2VzdCBwYXJ0IG9mIG1l'
    },
    {
        Id: 27062023,
        Name: 'SG9wZWxlc3NseSBEZXZvdGVkIHRvIFlvdQ==',
        Artist: 'T2xpdmlhIE5ld3Rvbi1Kb2hu',
        Year: 1978,
        Album: 'R3JlYXNlOiBUaGUgT3JpZ2luYWwgU291bmR0cmFjaw==',
        Lyrics: 'WW91IGtub3cgSSdtIGp1c3QgYSBmb29sIHdobydzIHdpbGxpbmc='
    },
    {
        Id: 24112023,
        Name: 'TG92ZSBTb25n',
        Artist: 'U2FyYSBCYXJlaWxsZXM=',
        Year: 2007,
        Album: 'TGl0dGxlIFZvaWNl',
        Lyrics: 'Q2F1c2UgeW91IHRlbGwgbWUgaXQncyBtYWtlIG9yIGJyZWFrIGluIHRoaXM='
    },
    
]