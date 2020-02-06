const express  = require('express');
const app = express();

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const exchange = require('./exchange');

const getCategories = ()=>{
    return fs.readFileAsync('./categories.json','utf8');
}

app.use((req, res, next) => {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});


app.get('/',(req,res)=>{
    res.send('Local node server listening on port 3000!!');
});

app.get('/categories',(req,res)=>{
    getCategories().then(response=>{
        res.send(response);
    })
});

app.get('/rates', (req,res)=>{
    exchange.getExchangeRates().then((ratesInfo)=>{
        console.log('Rates Info', ratesInfo);
        res.send(ratesInfo);
    });
})


app.listen(3000);