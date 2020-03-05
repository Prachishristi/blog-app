const mongoose = require ('mongoose');
const BlogSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    }
}, {timestamps: true});

const Post = module.exports = mongoose.model('Blogs',BlogSchema);