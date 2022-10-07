var express = require("express");
var router = express.Router();
var State = require("../models/State")

router.put('/', (req, res) => {
    var body = req.body;
    let state = new State()
    state.name = body.name;
    // state.countryid = body.countryid;
    state.population = body.population;
    state.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
    // res.send(JSON.stringify({status:"Success"}))
});

router.post('/', async (req, res) => {
    var body = req.body;
    let state = await State.findById(body.id)

    state.name = body.name;
    // state.countryid = body.countryid;
    state.population = body.population;
    state.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
});

router.delete('/', async (req, res) => {
    var body = req.body;
    await State.findByIdAndDelete(body.id);

    res.end(JSON.stringify({ status: "success" }))
});

router.get('/', async (req, res) => {
    let data = await State.find();
    res.end(JSON.stringify({status:"success", data:data}))
});

router.get('/:id', async (req, res) => {
    let data = await State.findById(req.params.id);
    res.end(JSON.stringify({status:"success", data:data}))
});



module.exports = router;