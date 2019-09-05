/*import express from 'express';
import redis from 'redis';
import fetch from 'node-fetch'; */

const express = require('express');
const redis = require('redis');
const fetch = require('node-fetch');

const app = express();
const client = redis.createClient(6379);

client.on('error', (err)=>{
    console.log('Error' + err)
});

app.get('/products',(req,res)=>{
    const productsRedisKey = 'user:products';
    var randomSKU = [2000375935929, 2000372817877, 2000371995293, 2000367524094, 2000373649262,
        2000372006813, 2000349155957, 2000375977097, 2000372464781, 2000373649477, 2000375935998,
        2000372209085, 2000367524537, 2000373941724, 2000372014238, 2000373730847, 2000372010599,
        2000372013897, 2000375935509, 2000373664098, 2000375977189, 2000375936063, 2000372026453,
        2000370790707, 2000373941656];
    var randomArraySKU = randomSKU.map((sku => {
            fetch(`https://simple.ripley.cl/api/v2/products/${sku}`)
            .then(response => response.json())
            .then(product => {
                console.log(product.partNumber);
                return product
            })
            .catch(error => {
                console.log(error);
                return res.json(error.toString())
            })
        }));
    console.log('from server: randomArraySKU');
    console.log(randomArraySKU);
    return (
            client.get(productsRedisKey,(error,products)=>{
                if(products){
                    return res.json({
                        source: 'cache',
                        data: JSON.parse(products)
                    })
                }else {
                    client.setex(productsRedisKey, 60, JSON.stringify(randomArraySKU))
                    return res.json({
                        source: 'api',
                        data: products
                    })
                }
            })
        )
    
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('server on port 3000')
});