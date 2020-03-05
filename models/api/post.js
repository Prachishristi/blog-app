const express = require ('express');
const router = express.Router();
const Post = require('../../models/Post');

router.get('/',(req,res,next) => {
    Post.find()
        .then((posts) => {
        res.json(posts);
    })
    .catch(err => console.log(err))
});

router.post('/add',(req,res,next) => {
    const title = req.body.title;
    const body = req.body.body;
    newPost = new Post({
        title:title,
        body:body
    });

    newPost.save()
    .then(post => {
    res.json(post);
})
.catch(err => console.log(err));
});


// to update post
router.put('/update',(req,res,next)=> {
  let id = req.params.id;  
    // find the post id
    Post.findById(id)
    .then(post => {
        post.title = req.body.title;
        post.body = req.body.body;

        post.save()
        .then(p => {
            res.send({message: 'post updated',status:'sucess',post: p})
        });
    })
    .catch(err => console.log(err));
});

module.exports = router;