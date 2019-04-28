const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const Ad = require('../models/ad.js')
//=> localhost:3000/ads/
router.get('/', (req, res) => {
    Ad.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retriving Ads: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.param.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    Ad.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Ad: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var ad = new Ad({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price
    });
    ad.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ad Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    var ad = {
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price
    };
    Ad.findByIdAndUpdate(req.params.id, { $set: ad }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ad Update: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    Ad.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ad Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;