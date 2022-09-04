 const { Router } = require("express");
const express = require("express");

 const router = express.Router();
const path = require("path");
 const venuesList = []; 

router.get("/createPost",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","post.html"));
});
router.post("/createPost",(req,res)=>{
    const listVenue = req.body;
      venuesList.push(listVenue);
    console.log(venuesList);
    res.redirect("/venues");
 })
 /*("/createPost",(req,res)=>{
    const listVenue = req.body;
      venuesList.push(listVenue);
    console.log(venuesList);
    res.redirect("/venues");
 })*/
 router.get("/venues",(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','venue.html'))
})
module.exports = router;