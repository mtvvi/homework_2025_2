'use strict'

/**
 * Функция, которая принимает одно число n и возвращает генератор, генерирующий первые n чисел последовательности Фибоначчи.
 * @generator
 * @param {Number} n - количество чисел последовательности Фибоначчи
 * 
 * @example
 * // returns [0, 1, 1, 2, 3]
 * [...fibonacciGenerator(5)];
 * 
 * @yields {Number} - число последовательности Фибоначчи
 */
function* fibonacciGenerator(n) {

    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return;
    }

    let prev = 0, next = 1;

    for (let i = 0; i < n; i++) {
        yield prev;
        [prev, next] = [next, prev + next];
    }
}
