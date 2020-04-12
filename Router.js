const Router = require('express').Router()
const UserController = require('./controller/users/index')
const ChallengeController = require('./controller/challenges/index')
const AdminController = require('./controller/admin')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})
   
const upload = multer({ storage: storage })


const isAuthenticated = function(req,res,next){
    if(req.user){
        console.log(req.user)
       return next();
    }else{
       return res.status(401).json({
         error: true,
         message: 'User not authenticated'
       })
    }
}

const isAdmin = function(req,res,next){
    if(req.user){
       if (req.user.isAdmin)
        return next();
    }else{
       return res.status(401).json({
         error: true,
         message: "User not authenticated"
       })
    }
}

const checkAuth = function(req,res,next){
    if(req.user){
        res.json(req.user)
    }else{
       return res.json({
         error: true,
         message: 'User not authenticated'
       })
    }
}



Router.use('/auth', UserController)
Router.get('/authcheck', checkAuth)

Router.use('/users', isAuthenticated, UserController)
Router.use('/challenges', isAuthenticated, ChallengeController)
Router.use('/admin', isAdmin, AdminController)

Router.use('/', isAuthenticated, (req, res) => {
    try {
        console.log({cookies: req.user})
        res.json({"i":req.isAuthenticated()})
    } catch (err) {
        res.json({err})
    }
})


const Challenge = require('./model/model_challenge')

const CHALLENGE_SUBMIT = (req, res) => {
    const file = req.file    
    const {_id} = req.params
    console.log(_id, file)

    const submission = '/uploads/'+file.filename
    console.log({submission})

    res.end(submission)
}


module.exports = Router