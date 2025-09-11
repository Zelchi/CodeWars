function removeChar(str) {
    const listForString = str.split('');
    listForString[0] = '';
    listForString[listForString.length - 1] = '';
    return listForString.join('');
};

console.log(removeChar('eloquent'));