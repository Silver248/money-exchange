// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return false;
    } else if (currency > 10000) {
        console.log("error: You are rich, my friend! We don't have so much coins for exchange")
    } else {H = Math.floor(currency / 50)}
}