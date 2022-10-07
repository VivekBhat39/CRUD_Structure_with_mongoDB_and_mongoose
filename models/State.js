var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    // countryid: {
    //     type: String,
    //     required: true
    // },
    population: {
        type: Number,
        required: true
    }
});

var State = mongoose.model("states", schema);

module.exports = State;
