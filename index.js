const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path =require('path');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb://localhost:27017/play",{ useNewUrlParser : true})
.then(() => {
    console.log('database connected')
})
.catch((err) => {
    console.log('unable to connect with the database',err)
});
const port = process.env.PORT||3000;
app.use(cors());
app.use (bodyParser .json());
app.get('/',(req,res) => {
    res.send('hello')
});
const postRoutes = require('./models/api/post');
app.use('/api/posts',postRoutes);
app.listen(port,() =>
{
    console.log('server started on port')
});