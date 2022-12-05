/**
 * Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
 */

const divisibleBy = (numbers, divisor) => numbers.filter((num) => num % divisor === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
