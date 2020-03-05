const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost:27017/play')
.then(() => console.log('connected to mongo db'))
.catch(err => console.error('could not connect',err));
 require('./blog.model');