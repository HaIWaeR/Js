const { isFridayToday } = require('./task4');

describe('Тестирование функции isFridayToday', () => {
    
    test('1', () => { 
        const fridayDate = new Date('2025-05-30T00:00:00Z');
        global.Date.now = jest.fn(() => fridayDate.valueOf());
        expect(isFridayToday()).toBe('Сегодня пятница!');
    });

    test('2', () => { 
        const thursdayDate = new Date('2025-05-29T00:00:00Z');
        global.Date.now = jest.fn(() => thursdayDate.valueOf());
        expect(isFridayToday()).toBe('Завтра пятница!');
    });

    test('3', () => { 
        const saturdayDate = new Date('2025-05-31T00:00:00Z');
        global.Date.now = jest.fn(() => saturdayDate.valueOf());
        expect(isFridayToday()).toBe('Пятница была вчера');
    });

    test('4', () => { 
        const mondayDate = new Date('2025-05-28T00:00:00Z');
        global.Date.now = jest.fn(() => mondayDate.valueOf());
        expect(isFridayToday()).toBe('Пятница будет через 2 дня');
    });

});