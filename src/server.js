/*
setInterval(()=>{
    console.log('ivm');
},10000)
*/

const express = require('express');
const routes = require('./routes.js');
//const ind = require('../models/index')
const app = express();
app.use(express.json())


app.use(routes)

app.listen(3333,() => console.log('Server is running'));