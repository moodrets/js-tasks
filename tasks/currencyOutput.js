const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
    ['eur', 'buy', 4000],
];

// const output = {
//     usd: [10000, 30000],
//     gbp: [9000, 0],
//     eur: [0, 7000],
//     uah: [10000, 0],
// };

function currencyOutput(input) {
    let result = {};

    input.forEach((item) => {
        let cur = item[0];
        let operation = item[1];
        let sum = item[2];

        if (operation === 'buy') {
            if (result[cur]) {
                let oldValue = result[cur];
                result[cur] = [oldValue[0] + sum, oldValue[1]];
            } else {
                result[cur] = [sum, 0];
            }
        }

        if (operation === 'sell') {
            if (result[cur]) {
                let oldValue = result[cur];
                result[cur] = [oldValue[0], oldValue[1] + sum];
            } else {
                result[cur] = [0, sum];
            }
        }
    });

    return result;
}

console.log(currencyOutput(input));
