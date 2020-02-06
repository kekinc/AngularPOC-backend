const exchange = require('blockchain.info/exchange');

const getExchangeRates = ()=>{
    return exchange.getTicker();
};

exports.getExchangeRates = getExchangeRates;



