const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
    

const app = express();
const port = process.env.PORT || 5001;


app.use(express.json());

app.get("/", (req,res) => {
    res.send("landing")
});


app.listen(port, () => {
    console.log(`Server has started on port ${port}!`);
});