function formatPhone(phones) {
    return phones.map(phone => {
        // Разделяем номер на части по точкам
        const parts = phone.split('.');
        
        // Берем последнюю часть и заменяем все символы после первого на четыре звездочки
        const lastPart = parts[parts.length - 1];
        const maskedLastPart = lastPart.charAt(0) + '****'; // Всегда 4 звёздочки
        
        // Заменяем последнюю часть в массиве и соединяем обратно
        parts[parts.length - 1] = maskedLastPart;
        return parts.join('.');
    });
}

module.exports = formatPhone;

const phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
];

const formatted = formatPhone(phones);


console.log(formatted);