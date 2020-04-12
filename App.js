require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const User = require('./model/model_profile')
const LocalStrategy = require('passport-local').Strategy; 
const Router = require('./Router')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')

//Database 
mongoose.connect("mongodb://localhost/logic_db", {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err) {
        console.log(err)
    } else {
        console.log("[+] Connected to Database [+]")
    }
})

//Middleware
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge : new Date(Date.now() + 3600000 * 72) }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Passport
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate())); 

//Routes
app.use('/', Router)

//Start Server
app.listen(process.env.PORT, () => {
    console.log(`[+] Server running on port ${process.env.PORT}`)
})