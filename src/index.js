const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let decodedPhrase = [];
    let subDecodedPhrase = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        decodedPhrase.push(expr.substring(i, i + 10));
    }

    for (let i = 0; i < decodedPhrase.length; i++) {
        for (let j = 0; j < decodedPhrase[i].length; j = j + 2) {
            subDecodedPhrase.push(decodedPhrase[i].substring(j, j + 2));
        }
        decodedPhrase[i] = subDecodedPhrase;
        subDecodedPhrase = [];
    }

    for (let i = 0; i < decodedPhrase.length; i++) {
        for (let j = 0; j < decodedPhrase[i].length; j++) {
            if (decodedPhrase[i][j] === '10') {
                decodedPhrase[i][j] = '.';
            } else if (decodedPhrase[i][j] === '11') {
                decodedPhrase[i][j] = '-';
            } else if (decodedPhrase[i][j] === '**') {
                continue;
            } else if (decodedPhrase[i][j] === '00') {
                decodedPhrase[i][j] = '';
            }

        }

        decodedPhrase[i] = decodedPhrase[i].join('');
        if (decodedPhrase[i] in MORSE_TABLE) {
            decodedPhrase[i] = MORSE_TABLE[decodedPhrase[i]]
        }

    }


    return decodedPhrase.join('');
}

module.exports = {
    decode
}