/**
 * Если задано число n, вернуть количество положительных нечетных чисел меньше n.
 */

function oddCount(number) {
    let i = 0;
    let result = [];

    while (i < number) {
        if (i % 2 === 0 && i !== 0) {
            result.push(i);
        }
        i++;
    }

    return result.length;
}

console.log(oddCount(15));
// console.log(oddCount(75));
// console.log(oddCount(14));
// console.log(oddCount(21));
