function getInfo(prices) {
    let countStartsWithPrice = 0;
    let countEndsWithDollar = 0;

    prices.forEach(price => {
        // Проверяем, начинается ли строка с "Цена"
        if (price.startsWith('Цена')) {
            countStartsWithPrice++;
        }
        // Проверяем, заканчивается ли строка на "$"
        if (price.endsWith('$')) {
            countEndsWithDollar++;
        }
    });

    return [countStartsWithPrice, countEndsWithDollar];
}

module.exports = getInfo;


