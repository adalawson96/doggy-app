const express = require ('express');
const app = express();
const cors = require ('cors')
const port = process.env.PORT || 3001;

const dogsRouter = require('./routes/dogs')

//  environment variables
require('dotenv').config()

// database connection
require('./config/database');

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/dogs', dogsRouter);

app.listen(port, () => {
    console.log('you are connected to the port');
});