// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        function errcase() {'error: You are rich, my friend! We don\'t have so much coins for exchange'};
        return{errcase};
    } else {
        let H = Math.floor(currency / 50);
        let Q = Math.floor((currency - H*50)/25);
        let D = Math.floor((currency - H*50 - Q*25)/10);
        let N = Math.floor((currency - H*50 - Q*25 - D*10)/5);
        let P = Math.floor(currency - H*50 - Q*25 - D*10 - N*5);
        let answer = {H, D, N, N, P};
        return(answer);
    }
}