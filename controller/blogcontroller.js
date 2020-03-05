const express =require('express');
var router = express.Router();
 router.get('/',(req,res) => {
     res.render("blog/play",{
         viewTitle : "Insert blog"
     });
    });
    router.post("/",(req,res) => {
        console.log("hi");
    });
     
 module.exports =router;