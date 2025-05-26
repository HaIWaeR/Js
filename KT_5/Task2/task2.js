function getInfo(prices) {
    let countPrice = 0;
    let countDollar = 0;

    prices.forEach(price => {

        if (price.startsWith('Цена')) {
            countPrice++;
        }

        if (price.endsWith('$')) {
            countDollar++;
        }
    });

    return [countPrice, countDollar];
}

module.exports = getInfo;


