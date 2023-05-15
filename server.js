const express = require ('express');
const app = express();
const port = 3000;
const dogsRouter = require('./routes/dogs')

// routes
app.use('/dogs', dogsRouter);

app.listen(port, () => {
    console.log('you are connected to the port');
});