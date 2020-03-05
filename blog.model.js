const mongoose = require ('mongoose');
var blogSchema = new mongoose.Schema({
        fullName: {
               type:String
                  },
    blogname:
    {
        type:String
    },
       createdby: {
               type:String
                    },
})
mongoose.model('blog', blogSchema);