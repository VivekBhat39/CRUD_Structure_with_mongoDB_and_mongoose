var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    curency: {
        type: String,
        required: true
    }
});

var Country = mongoose.model("countries", schema);

module.exports = Country;
