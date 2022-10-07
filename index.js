var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: "true" }));

mongoose.connect("mongodb://localhost:27017/mongoosedb");
var db = mongoose.connection;

db.on("error",(err)=>{
    console.log(err);
});

db.on("open",()=>{
    console.log("connection Success")
});

app.get('/', (req, res) => {
    res.send("Hello World");
    res.end();
});

app.use('/country', require("./routes/country"))
app.use('/state', require("./routes/state"))

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});