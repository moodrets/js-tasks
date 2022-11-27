/**
 *  Ваша функция принимает два аргумента:
    текущий возраст отца (лет)
    текущий возраст сына (лет)
    Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
 */

function wasTwiceAsOld(dadYearsOld, sonYearsOld) {
    let i = 0;
    let first = 0;

    while (i < dadYearsOld) {
        if (i / 2 === sonYearsOld) {
            first = i;
        }
        i++;
    }

    return [dadYearsOld, first, dadYearsOld - first];
}

function willTwiceAsOld(dadYearsOld, sonYearsOld) {
    let i = 0;
    let result = 0;

    while (true) {
        if (sonYearsOld * 2 === i) {
            result = i;
            break;
        }
        i++;
    }

    return [dadYearsOld, sonYearsOld, result];
}

// console.log(wasTwiceAsOld(40, 18));
// console.log(wasTwiceAsOld(45, 22));
// console.log(willTwiceAsOld(36, 12));
console.log(willTwiceAsOld(46, 22));
