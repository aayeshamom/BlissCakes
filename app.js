const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Listing = require("./models/listing.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BilssCakes");
}

  app.get("/", (req,res) => {
    res.send("working")
});
   
  app.get("/testListing", async (req,res) => {
     let sampleListing = new Listing({
      title: "Dutch Truffle Cake",
      description: "Our signature offering, the Dutch Truffle Cake is made with a moist chocolate sponge and a rich chocolate truffle ganache. It's nostalgia on a plate, reminding us of the classic layered chocolate cake we all grew up eating!",
      price: 500,
      weight: "500g",
     });
      await sampleListing.save();
      console.log("sample was saved");
      res.send("successfull");
  });


  app.listen(8080, (req,res) => {
    console.log("server is listing to port 8080")
});