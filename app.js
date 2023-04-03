const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>Message: Success<h/4> <p>Version 1.0</p>');
})

app.get('/products', (req, res) => {
    res.send([
    {
        productId: 101,
        price: 100
    },
    {
        productId: 102,
        price: 200
    }
    ])
})

app.listen(port, () => {
    console.log(`Demo App is up and listening to port: ${port}`);
})