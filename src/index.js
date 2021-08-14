module.exports = function toReadable (number) {
    const lastNumber = (n) => {
        if (n === 1) {
            return 'one';
        }
        if (n === 2) {
            return 'two';
        }
        if (n === 3) {
            return 'three';
        }
        if (n === 4) {
            return 'four';
        }
        if (n === 5) {
            return 'five';
        }
        if (n === 6) {
            return 'six';
        }
        if (n === 7) {
            return 'seven';
        }
        if (n === 8) {
            return 'eight';
        }
        if (n === 9) {
            return 'nine';
        }
        if (n === 0) {
            return '';
        }
    };

    const firstTenNumber = (n) => {
        if (n === 10) {
            return 'ten';
        }
        if (n === 11) {
            return 'eleven';
        }
        if (n === 12) {
            return 'twelve';
        }
        if (n === 13) {
            return 'thirteen';
        }
        if (n === 14) {
            return 'fourteen';
        }
        if (n === 15) {
            return 'fifteen';
        }
        if (n === 16) {
            return 'sixteen';
        }
        if (n === 17) {
            return 'seventeen';
        }
        if (n === 18) {
            return 'eighteen';
        }
        if (n === 19) {
            return 'nineteen';
        }     
    };

    const middleTenNumber = (n) => {    
        if (n === 2) {
            return 'twenty';
        }
        if (n === 3) {
            return 'thirty';
        }
        if (n === 4) {
            return 'forty';
        }
        if (n === 5) {
            return 'fifty';
        }
        if (n === 6) {
            return 'sixty';
        }
        if (n === 7) {
            return 'seventy';
        }
        if (n === 8) {
            return 'eighty';
        }
        if (n === 9) {
            return 'ninety';    
        }
    };

    const hundredNumber = (n) => {
        if (n === 1) {
            return 'one hundred';
        }
        if (n === 2) {
            return 'two hundred';
        }
        if (n === 3) {
            return 'three hundred';
        }
        if (n === 4) {
            return 'four hundred';
        }
        if (n === 5) {
            return 'five hundred';
        }
        if (n === 6) {
            return 'six hundred';
        }
        if (n === 7) {
            return 'seven hundred';
        }
        if (n === 8) {
            return 'eight hundred';
        }
        if (n === 9) {
            return 'nine hundred';
        }
    };

    const str = String(number);
    let result;
    if (number === 0) {
        result = 'zero';
    } else if (str.length === 1) {
        result = lastNumber(number);
    } else if (str.length === 2 && number < 20) {
        result = firstTenNumber(number);
    } else if (str.length === 2) {
        result = `${middleTenNumber(Number(str[0]))} ${lastNumber(Number(str[1]))}`;
    } else if (str.length === 3 && Number(str[1]) === 0) {
        result = `${hundredNumber(Number(str[0]))} ${lastNumber(Number(str.slice(2)))}`;
    } else if (str.length === 3 && Number(str[1]) === 1) {
        result = `${hundredNumber(Number(str[0]))} ${firstTenNumber(Number(str.slice(1)))}`;
    } else {
        result = `${hundredNumber(Number(str[0]))} ${middleTenNumber(Number(str[1]))} ${lastNumber(Number(str[2]))}`;
    }
    return result.trim();

    
    

}
