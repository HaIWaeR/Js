const { kingSaid } = require('./task3');

describe('Тестирование kingSaid', () => {
    test('Тест 1: Проверка строки с префиксом', () => {
        const inputMessage = 'Король сказал: Здравствуй';
        const outputMessage = kingSaid(inputMessage);
        expect(outputMessage).toBe(inputMessage);
    });

    test('Тест 2: Добавление префикса к строке без него', () => {
        const inputMessage = 'Как дела?';
        const expectedOutput = 'Король сказал: Как дела?';
        const outputMessage = kingSaid(inputMessage);
        expect(outputMessage).toBe(expectedOutput);
    });
});