const express = require('express');
const app = express();
const start = require('./app/start');
const myroutes = require('./routes/routes.js');

myroutes.routes(app,start);


const port = process.env.PORT || 3001; 
app.listen(port, () => {
    console.log(`App is started at port: ${port}`);
})