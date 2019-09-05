const express = require('express');
const redis = require('redis');
const fetch = require('node-fetch');

const app = express();
const client = redis.createClient(6379);

client.on('error', (err)=>{
    console.log('Error' + err)
});

var randomSKU = [2000375935929, 2000372817877, 2000371995293, 2000367524094, 2000373649262,
    2000372006813, 2000349155957, 2000375977097, 2000372464781, 2000373649477, 2000375935998,
    2000372209085, 2000367524537, 2000373941724, 2000372014238, 2000373730847, 2000372010599,
    2000372013897, 2000375935509, 2000373664098, 2000375977189, 2000375936063, 2000372026453,
    2000370790707, 2000373941656];
var arraysku = [];

async function getProductObject (){
    await Promise.all(randomSKU.map(async sku =>{
        let response = await fetch(`https://simple.ripley.cl/api/v2/products/${sku}`).catch((err) => console.log('error',err));
        let data = await response.json().catch((erro) => console.log('error',erro));
        arraysku.push(JSON.parse(JSON.stringify(data)));
    })).catch((er) => console.log('error',er));
    app.get('/products',(req,res)=>{
        const productsRedisKey = 'user:products';
        return (
                client.get(productsRedisKey,(error,products)=>{
                    if(products){
                        return res.json({
                            source: 'cache',
                            data: JSON.parse(products)
                        })
                    }else {
                        client.setex(productsRedisKey, 60, JSON.stringify(arraysku))
                        return res.json({
                            source: 'api',
                            data: products
                        })
                    }
                })
            )
        
    });
};

getProductObject();

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('server on port 3000')
});