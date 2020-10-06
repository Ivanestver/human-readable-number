module.exports = function toReadable(number) {
    number = number.toString();
    let result = '';

    switch (number.length) {
        case 1:
            switch (number[0]) {
                case '0':
                    result += 'zero';
                    break;
                case '1':
                    result += 'one';
                    break;
                case '2':
                    result += 'two';
                    break;
                case '3':
                    result += 'three';
                    break;
                case '4':
                    result += 'four';
                    break;
                case '5':
                    result += 'five';
                    break;
                case '6':
                    result += 'six';
                    break;
                case '7':
                    result += 'seven';
                    break;
                case '8':
                    result += 'eight';
                    break;
                case '9':
                    result += 'nine';
                    break;
            }
            break;

        case 2:
            if (number[0] === '1') {
                switch (number) {
                    case '10':
                        result += 'ten ';
                        break;
                    case '11':
                        result += 'eleven ';
                        break;
                    case '12':
                        result += 'twelve ';
                        break;
                    case '13':
                        result += 'thirteen ';
                        break;
                    case '15':
                        result += 'fifteen';
                        break;
                    case '18':
                        result += 'eighteen ';
                        break;
                    default:
                        switch (number[1]) {
                            case '4':
                                result += 'fourteen';
                                break;
                            case '6':
                                result += 'sixteen';
                                break;
                            case '7':
                                result += 'seventeen';
                                break;
                            case '9':
                                result += 'nineteen';
                                break;
                        }
                }
            }
            else {
                switch (number[0]) {
                    case '2':
                        result += 'twenty ';
                        break;
                    case '3':
                        result += 'thirty ';
                        break;
                    case '5':
                        result += 'fifty ';
                        break;
                    case '8':
                        result += 'eighty ';
                        break;
                    default:
                        switch (number[0]) {
                            case '4':
                                result += 'forty ';
                                break;
                            case '6':
                                result += 'sixty ';
                                break;
                            case '7':
                                result += 'seventy ';
                                break;
                            case '9':
                                result += 'ninety ';
                                break;
                        }
                }

                switch (number[1]) {
                    case '1':
                        result += 'one';
                        break;
                    case '2':
                        result += 'two';
                        break;
                    case '3':
                        result += 'three';
                        break;
                    case '4':
                        result += 'four';
                        break;
                    case '5':
                        result += 'five';
                        break;
                    case '6':
                        result += 'six';
                        break;
                    case '7':
                        result += 'seven';
                        break;
                    case '8':
                        result += 'eight';
                        break;
                    case '9':
                        result += 'nine';
                        break;
                }
                break;
            }
            break;

        case 3:
            switch (number[0]) {
                case '1':
                    result += 'one hundred ';
                    break;
                case '2':
                    result += 'two hundred ';
                    break;
                case '3':
                    result += 'three hundred ';
                    break;
                case '4':
                    result += 'four hundred ';
                    break;
                case '5':
                    result += 'five hundred ';
                    break;
                case '6':
                    result += 'six hundred ';
                    break;
                case '7':
                    result += 'seven hundred ';
                    break;
                case '8':
                    result += 'eight hundred ';
                    break;
                case '9':
                    result += 'nine hundred ';
                    break;
            }

            if (number[1] === '1') {
                switch (number[1] + number[2]) {
                    case '10':
                        result += 'ten ';
                        break;
                    case '11':
                        result += 'eleven ';
                        break;
                    case '12':
                        result += 'twelve ';
                        break;
                    case '13':
                        result += 'thirteen ';
                        break;
                    case '15':
                        result += 'fifteen';
                        break;
                    case '18':
                        result += 'eighteen ';
                        break;
                    default:
                        switch (number[2]) {
                            case '4':
                                result += 'fourteen ';
                                break;
                            case '6':
                                result += 'sixteen ';
                                break;
                            case '7':
                                result += 'seventeen ';
                                break;
                            case '9':
                                result += 'nineteen ';
                                break;
                        }
                }
            }
            else {
                switch (number[1]) {
                    case '2':
                        result += 'twenty ';
                        break;
                    case '3':
                        result += 'thirty ';
                        break;
                    case '5':
                        result += 'fifty ';
                        break;
                    case '8':
                        result += 'eighty ';
                        break;
                    default:
                        switch (number[1]) {
                            case '4':
                                result += 'forty ';
                                break;
                            case '6':
                                result += 'sixty ';
                                break;
                            case '7':
                                result += 'seventy ';
                                break;
                            case '9':
                                result += 'ninety ';
                                break;
                        }
                }

                switch (number[2]) {
                    case '1':
                        result += 'one';
                        break;
                    case '2':
                        result += 'two';
                        break;
                    case '3':
                        result += 'three';
                        break;
                    case '4':
                        result += 'four';
                        break;
                    case '5':
                        result += 'five';
                        break;
                    case '6':
                        result += 'six';
                        break;
                    case '7':
                        result += 'seven';
                        break;
                    case '8':
                        result += 'eight';
                        break;
                    case '9':
                        result += 'nine';
                        break;
                }
                break;
            }
            break;
    }

    if (result[result.length - 1] == ' ') {
        result = result.slice(0, result.length - 1);
    }

    return result;
}
