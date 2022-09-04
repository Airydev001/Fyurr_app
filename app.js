const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const postVenueController = require("./router/post");
const artistController = require("./router/artist");
const mainPageController = require("./router/main")

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use("/",mainPageController);

app.use("/venue",postVenueController);

app.use("/artist",artistController);







app.get("/venues",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','venue.html'))
})




app.listen(2000,(req,res)=>{
    console.log('the server is running on  PORT 2000')
})