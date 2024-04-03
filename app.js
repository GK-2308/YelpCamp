const express=require('express')
const app=express();
const path=require('path')
const mongoose=require('mongoose')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
mongoose.connect('mongodb+srv://geetansh:khuranas23@cluster0.vfjv7n0.mongodb.net/YelpCamp').then(()=>{
    console.log("Connection open!!!");
})
.catch(err=>{
    console.log("oH NO err"); 
    console.log(err);
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('app is listening at port 3000');
})
