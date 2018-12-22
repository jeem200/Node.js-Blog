const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const article=require("./routes/article.route");
const index = require('./routes/index.route');


//inintailize the app
const app=express();



//set view engine
app.set('views',path.join(__dirname,'views'));

app.set('view engine','pug');
//set public folder
app.use(express.static(path.join(__dirname,'public')));

//set body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//db connection
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/Blog");

let database=mongoose.connection;

database.once("open",function(){
    console.log("connected to database");
});

database.on("error",function(error){
    console.log(error)
    console.log("fail to connect to database")
});



app.use("/Article",article)
//get the data model

//let Article=require("./model/article");

//Root route
app.use("/",index)

app.listen(3000,function(){
    console.log("server started");
})