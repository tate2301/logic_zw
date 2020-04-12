const express = require("express");
const passport = require("passport")
const User = require('../../model/model_profile')
const Profile = require('../../model/model_profile_full')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/signup', (req, res) => {
  const {body} = req
  const profile = {
    first_names: body.first_name,
    last_name: body.last_name,
    gender: body.gender,
    phone_number: body.phone_number,
    physical_address: body.physical_address,
  }
  const newProfile = new Profile(profile)

  const user = {
    username: req.body.username,
    email_address: req.body.email_address,
    profile: newProfile._id
  }
  const newUser = new User(user)

  newProfile.save((error, doc) => {
    if (error) {
      res.json({success:false, message:"Your profile could not be saved"})
      console.log(error)
    } else {
      User.register(newUser, req.body.password, function(err, user) { 
        if (err) { 
          res.json({success:false, message:"Account already exists"})  
        }else{ 
          res.json({success:true, message:"Your account has been saved"})
        } 
      }); 
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
              console.log({err, user})
              if(err){ 
                res.json({success: false, message: err}) 
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

router.post('/logout', (req, res) => {
  const {body} = req
})

router.delete('/delete/:_id', (req, res) => {

})

router.patch('/patch/:_id', (req, res) => {

})

router.get('/:_id', (req, res) => {
  Profile.findById(req.params._id, (err, doc) => {
    if(err) {
      res.json({
        error: true,
        message: "Failed to retrieve profile"
      })
    } else {
      res.json({
        error: false,
        doc
      })
    }
  })
})

router.get('/', (req, res) => {

})

router.get('/leaderboard', (req, res) => {

})

module.exports = router;