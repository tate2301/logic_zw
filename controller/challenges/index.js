const express = require("express");
const Challenge = require('../../model/model_challenge')
const multer = require('multer');
const _ = require('lodash')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router();

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

router.get('/:_id/join', (req, res) => {

    const _id = req.params._id
    Challenge.findOne({_id}, (err, doc) => {
        if(err) {
            res.json({
                error: true,
                message: "Challenge does not exist"
            })
        } else {
            if (doc.registered === null) {
                res.json({
                    error: true,
                    message: "Challenge does not exist"
                })
            }
            else if(doc.registered.includes(req.user.profile)) {
                res.json({
                    error: true,
                    message: "You already joined this challenge"
                })
            } else {
                Challenge.findOneAndUpdate({_id}, {$push: {'registered': req.user.profile }}, { new: true })
                .exec((err, docs) => {
                    if(err){
                        console.log(err)
                        res.json({
                            error: true,
                            message:"Internal server problem"
                        })
                    } else {
                        res.json({
                            error: false,
                            message: "You have successfully joined this challenge"
                        })
                    }
                })
            }
        }
    })
})

router.post('/:_id/submit', upload.single('submission'), (req, res) => {
    console.log(req.headers)
    const file = req.file    
    const {_id} = req.params
    console.log(file)

    const submissions = {
        submission: '/uploads/' + file.filename,
        profile: req.user.profile
    }
    

    Challenge.findOneAndUpdate({_id}, {$push: { submissions }}, { new: true })
    .exec((err, doc) => {
        if(err){
            console.log(err)
            res.json({
                error: true,
                message:"Internal server problem"
            })
        } else {
            res.json({
                error: false,
                doc
            })
        }
    })
})
module.exports = router