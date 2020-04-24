const express = require("express");
const router = express.Router();
const Challenge = require('../models/model_challenge')

router.get('/', (req, res) => {
    Challenge.find(req.query)
    .populate('submissions.profile')
    .exec((err, docs) => {
        if (err) {
            res.json({error: true, message: "Internal server error"})
        } else {
            res.json({error: false, docs})
        }
    })
})

router.get('/:_id', (req, res) => {
    Challenge.findById(req.params._id)
    .populate('submissions.profile registered')
    .exec((err, doc) => {
        if (err) {
            res.json({error: true, message: "Internal server error"})
        } else {
            res.json({error: false, doc})
        }
    })
})

module.exports = router