const express  = require('express');
const app = express();

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const getCategories = ()=>{
    return fs.readFileAsync('./categories.json','utf8');
}

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Local node server listening on port 3000!!');
});

app.get('/categories',(req,res)=>{
    getCategories().then(response=>{
        console.log('response', response);
        res.send(response);
    })
});


app.listen(3000);