function isFridayToday() {
    const today = new Date(global.Date.now()); 
    // 0 - ВС, 1- ПН, 2 - ВТ, 3 - СР, 4 - ЧТ, 5 - ПТ, 6 - СБ 
    const dayOfWeek = today.getDay(); 

    switch(dayOfWeek) {
        case 4: 
            return "Завтра пятница!";
        case 5: 
            return "Сегодня пятница!";
        case 6: 
            return "Пятница была вчера";
        default: 
            const daysToFriday = (5 - dayOfWeek + 7) % 7;
            
    let daySuffix = '';
    switch (daysToFriday) {
        case 1:
            daySuffix = 'день';
        break;
        case 2:
        case 3:
        case 4:
            daySuffix = 'дня';
        break;
        default:
            daySuffix = 'дней';
        break;
    }
            
        return `Пятница будет через ${daysToFriday} ${daySuffix}`;
    }
}

module.exports = { isFridayToday };