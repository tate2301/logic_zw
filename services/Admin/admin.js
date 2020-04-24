const express = require("express");
const Challenge = require('../Challenge/models/model_challenge')
const User = require('../Profile/model_profile')
const Profile = require('../Profile/model_profile_full')
const Admin = require('./model_admin')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.fieldname + '.jpg')
    }
})
const upload = multer({ storage: storage })

const router = express.Router();

router.post('/challenges/create', (req, res) => {
    console.log("Issues")
    const {body} = req
    const challenge = {
        title: body.title,
        thumbnail: body.thumbnail,
        sponsored: body.sponsored,
        deadline: body.deadline,
        created: new Date(),
        started: body.started,
        closed: body.closed,
        total_points: body.total_points,
        prize_money: body.prize_money,
        difficulty: body.difficulty,
        registered: body.registered,
        objectives: body.objectives,
        solution: body.solution,
        tags: body.tags,
        description: body.description,
        rules: body.rules,
        evaluation: body.evaluation,
        tagline: body.tagline,
        dateStarted: body.dateStarted
    }

    const newChallenge = new Challenge(challenge)
    newChallenge.save((err) => {
        if(err) {
            console.log(err)
            res.json({
                error: true,
                message: "Internal server error"
            })
        } else {
            res.json({
                error: false,
                message: "Challenge added successfully."
            })
        }
    })
})

router.patch('/challenges/:_id', (req, res) => {
    const {body} = req
    console.log(body)
    Challenge.findByIdAndUpdate(req.params._id, {$set: body}, {new: true}, (err, doc)=> {
        if(err){
            res.json({
                error: true,
                message: err
            })
        } else {
            console.log(doc)
            res.json({
                error: false,
                message: "Changes effected"
            })
        }
    })
})

router.delete('/challenges/:_id', (req, res) => {
    Challenge.findByIdAndDelete(req.params._id, (err, doc) => {
        if(err) {
            res.json({
                error: true,
                message: err
            })
        } else {
            res.json({
                error: false,
                message: "Challenge deleted"
            })
        }
    })
})

router.patch('/challenges/:_id/grade', (req, res) => {
    const {joiningID, position, reward} = req.body

    CHALLENGE.findOneAndUpdate({_id, submissions: {$elemMatch: {profile: joiningID} } }, 
        {$set: 
            {
                'submissions.$.position': position,  
                'submissions.$.reward': reward,
            }
        }, 
        { new: true })
    .exec((err, doc) => {
        console.log(doc)
        if(err){
            console.log(err)
            res.json({
                err: true,
                error:"Internal server problem"
            })
        } else {
            res.json({
                err: false,
                submission,
                doc
            })
        }
    })
})

router.post('/challenges/:_id/disqualify', (req, res) => {
    const {joiningID} = req.body
    Challenge.findOneAndUpdate({_id: req.params._id}, {registered: {$pop: joiningID}}, (err, doc) => {
        if(err) {
            res.json({error: true, message: err})
        } else {
            res.json({error: false, message: "User removed from leaderboard"})
        }
    })
})

router.post('/login', (req, res) => {

    if(!req.body.username){ 
      res.json({success: false, message: "Username was not given"}) 
    } else { 
      if(!req.body.password){ 
        res.json({success: false, message: "Password was not given"}) 
      }else{ 
        passport.authenticate('local', function (err, user, info) {  
            err === null ? err = null : null
           if(err){ 
             res.json({success: false, message: err}) 
           } else{ 
            if (! user) { 
              res.json({success: false, message: 'username or password incorrect'}) 
            } else{ 
              req.logIn(user, function(err){ 
                if(err){ 
                  res.json({success: false, message: err}) 
                } else if(!user.isAdmin) {
                    res.json({success: false, message: "You dont have permission to login"}) 
                }else{ 
                  const token =  jwt.sign({ userId : user._id, username:user.username, profile: user.profile}, process.env.SECRET, {expiresIn: '24h'}) 
                  res.json({success:true, message:"Authentication successfull", token: token }); 
                } 
              }) 
            } 
           } 
        })(req, res); 
      } 
    } 
  
})

router.get('/accounting', (req, res) => {
    
})


module.exports = router