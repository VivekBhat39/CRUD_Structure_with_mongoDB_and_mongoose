var express = require("express");
var router = express.Router();
var Country = require("../models/Country")

router.put('/', (req, res) => {
    var body = req.body;
    let country = new Country()
    country.name = body.name;
    country.curency = body.curency;
    country.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
    // res.send(JSON.stringify({status:"Success"}))
});

router.post('/', async (req, res) => {
    var body = req.body;
    let country = await Country.findById(body.id)

    country.name = body.name;
    country.curency = body.curency;
    country.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
});

router.delete('/', async (req, res) => {
    var body = req.body;
    await Country.findByIdAndDelete(body.id);

    res.end(JSON.stringify({ status: "success" }))
});

router.get('/', async (req, res) => {
    let data = await Country.find();
    res.end(JSON.stringify({status:"success", data:data}))
});

router.get('/:id', async (req, res) => {
    let data = await Country.findById(req.params.id);
    res.end(JSON.stringify({status:"success", data:data}))
});



module.exports = router;