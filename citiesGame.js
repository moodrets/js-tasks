/**
 * Игра города - каждый следующий город начинается с последней буквы предыдущего.
 * Если не находится город на последнюю букву, этот город отправляется в конец списка.
 */

// @TODO: Надо доработать

const cities = [
    'Казань',
    'Санкт-Петербург',
    'Новгород',
    'Новосибирск',
    'Донецк',
    'Краснодар',
    'Кувасай',
    'Йоханнесбург',
    'Гамбург',
    'Лисабон',
];

function citiesGame(cities) {
    const resultCities = [cities[0]];
    const restCities = [];
    const excludeLetter = new RegExp(/[ъЪьЬыЫ]/gm);

    const getLastLetter = (city) => {
        let lastLetter = String(city[city.length - 1]).toUpperCase();
        if (excludeLetter.test(lastLetter)) {
            lastLetter = String(city[city.length - 2]).toUpperCase();
        }
        return lastLetter;
    };

    cities.reduce((acc, cur, i, arr) => {
        const lastLetter = getLastLetter(acc);
        const findCity = arr.find(
            (city) => city.startsWith(lastLetter) && !resultCities.includes(city) && !restCities.includes(city)
        );

        if (findCity) {
            resultCities.push(findCity);
            if (!resultCities.includes(cur) && !restCities.includes(cur)) {
                restCities.push(cur);
            }

            return findCity;
        }

        if (i + 1 === arr.length) {
            restCities.push(cur);
        }

        return cur;
    }, cities[0]);

    console.table(resultCities);
    console.table(restCities);

    return [...resultCities, ...restCities];
}

console.log(citiesGame(cities));
