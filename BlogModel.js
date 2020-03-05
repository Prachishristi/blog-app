const mongoose = require ('mongoose');
const categories = require('./categories');
const BlogSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
    userId:{
        type: String,
        required:true
    },
    category:{
        type: String,
        enum: categories
    },
   

}, {timestamps: true});

const Post = module.exports = mongoose.model('Blogs',BlogSchema);