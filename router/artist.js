const express= require("express");
const router =express.Router();
const path = require("path");

const artistList = [];

router.get("/createArtist",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views","postArtist.html"));
});

router.post("/createArtist",(req,res,next)=>{
    const ArtistData = req.body;
    artistList.push(ArtistData);
    console.log(artistList);
  
  });
router.get("/shows",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','show.html'));
    
})
router.get("/createShow",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','createShow.html'))
})
router.get("/artists",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','Artiste.html'))
})
module.exports = router;