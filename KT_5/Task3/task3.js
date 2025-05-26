function kingSaid(str) {
    const substring = 'Король сказал: ';
    
    if (str.startsWith(substring)) {
        return str;
    } else {
        return substring + str;
    }
}

module.exports = { kingSaid };
