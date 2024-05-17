//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs'); //using ejs as the app's view engine 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

//sending data back to user screen
app.get("/", function(req, res){

    const day = date.getDate();
    res.render("list", {listTitle : day, newListItems: items});

});

//getting data from user
app.post("/", function(req,res){
    const item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item)
        res.redirect("/work");
    } 
    else{
        items.push(item);
        res.redirect("/");
   }   
    

    //the inputted item gets redirected to the home route (i.e app.get("/") and then it is rendered (line23))
    

});

//work route
app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});




app.listen(3000, function(){
    console.log("Listening on port 3000");
});