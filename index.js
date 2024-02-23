
const express = require('express');
const redis = require('redis');


const app= express();
 


const client = redis.createClient({
     host:'redis-server',
     port:6379
});
(async () => {
    await client.connect();
})();  

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits',(err,visits)=>{
        res.send('Number of visist' + visits);
        client.set('visits', parseInt(visits) +1);

    });
});
client.on("err", function(error) {
    console.error(error);
    // I report it onto a logging service like Sentry. 
 });
 app.listen(7171,()=>{
    console.log('Listing on port 7171');
});

