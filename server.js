const express = require ('express');
const app = express();
const port = 3000;


// routes
app.get('/', (req, res) => {
    res.send('hellow world');
})

app.listen(port, () => {
    console.log('you are connected to the port');
})