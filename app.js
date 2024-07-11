const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");

const MONGO_URL="mongodb://127.0.0.1:27017/BlissCakes"

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log("Error");
});

async function main(){
    await mongoose.connect(MONGO_URL);
}
   

 app.set("view engine","ejs");
 app.set("views", path.join(__dirname,"views"));
 app.use(express.urlencoded({extended:true}));
 app.engine("ejs", ejsMate);
 app.use(express.static(path.join(__dirname,"/public")));

//   app.get("/testListing", async (req,res) => {
//      let sampleListing = new Listing({
//       title: "Dutch Truffle Cake",
//       description: "Our signature offering, the Dutch Truffle Cake is made with a moist chocolate sponge and a rich chocolate truffle ganache. It's nostalgia on a plate, reminding us of the classic layered chocolate cake we all grew up eating!",
//       price: 500,
//       weight: "500g",
//      });
//       await sampleListing.save();
//       console.log("sample was saved");
//       res.send("successfull");
//   });
  //Index route
  app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
  });

  //show route
  app.get("/listings/:id", async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  })

  app.listen(8080, (req,res) => {
    console.log("server is listing to port 8080")
}); 