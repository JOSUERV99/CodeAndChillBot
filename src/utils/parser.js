
const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const allNumbers = (tokens) => {
    return tokens.filter( token => !isNumeric(token) ).length == 0;
}

module.exports = { isNumeric, allNumbers };