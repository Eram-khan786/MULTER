const express=require("express");
const app=express()
const multer = require("multer");
const path = require('path');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})

app.set("view engine","ejs")

app.get("/upload",(req,res)=>{ 
    res.render('upload')
});

app.post("/upload",upload.single("image"),(req,res)=>{
    res.send('Image uploaded');
});

app.listen(5000,()=>{
    console.log('Server is running at PORT 5000')
})
