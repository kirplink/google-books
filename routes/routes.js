var axios = require("axios");
var db = require("../models");
// const router = require("express").Router();
const path = require('path');


module.exports = (app) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
      })
    
    app.post("/book/save", (req, res) => {
      console.log(req.body);
    }) 
}