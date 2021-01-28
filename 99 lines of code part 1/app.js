let Friends = [
    'Austin',
    'Jonathan',
    'Braden',
    'Nick',
    'Bradley',
]

for (let j = 0; j < Friends.length; j++) {

    function Songbuilder(songline, nextLine, lineText) {
        console.log(songLine + ' ' + lineText + ' of code in the file, ' + songLine + ' ' + lineText + ' of code; ' + Friends[j] + ' strikes one out, clears it all out, ' + nextLine + ' lines of code in the file.');
    };

    for (let i = 1; i < 100; i++) {

        var so ngLine = 100 - i;

        var nextLine = songLine - 1;

        if (songLine > 1) {

            lineText = 'lines';

        }

        else {

            lineText = 'line';

        }

        Songbuilder(songLine, nextLine, lineText);
    }
};



