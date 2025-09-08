'use strict';

QUnit.module("Тестируем функцию fibonacciGenerator", function() {
    QUnit.test("Правильно генерирует первое число Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(1);

        assert.deepEqual([...fibGen], [0], "Должно быть сгенерировано только первое число Фибоначчи.");
    });
    
    QUnit.test("Правильно генерирует 5 первых чисел Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(5);

        assert.deepEqual([...fibGen], [0, 1, 1, 2, 3], "Должны быть сгенерированы первые 5 чисел Фибоначчи.");
    });

    QUnit.test("Работает правильно с отрицательным числом чисел", function(assert) {
        const fibGen = fibonacciGenerator(-5);

        assert.deepEqual([...fibGen], [], "Генерация отрицательного числа должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с типом отличным от Number", function(assert) {
        const fibGen = fibonacciGenerator(undefined);

        assert.deepEqual([...fibGen], [], "Генерация типом отличным от Number должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с нулем чисел", function(assert) {
        const fibGen = fibonacciGenerator(0);

        assert.deepEqual([...fibGen], [], "Генерация нуля чисел должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с дробным числом", function(assert) {
        const fibGen = fibonacciGenerator(1.1);

        assert.deepEqual([...fibGen], [], "Генерация дробного числа чисел должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно итерация через next", function(assert) {
        const fibGen = fibonacciGenerator(5);
        assert.strictEqual(fibGen.next().value, 0);
        assert.strictEqual(fibGen.next().value, 1);
        assert.strictEqual(fibGen.next().value, 1);
        assert.strictEqual(fibGen.next().value, 2);
        assert.strictEqual(fibGen.next().value, 3);
        assert.strictEqual(fibGen.next().done, true);
    });
});
