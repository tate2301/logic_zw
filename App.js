require('dotenv').config()
const express = require('express')
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
const path = require('path')
const MongoStore = require('connect-mongo')(session);

//Database 
mongoose.connect("mongodb+srv://logic:JSqgo7BV3Sgli8ZQ@cluster0-vtqet.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err) {
        console.log(err)
    } else {
        console.log("[+] Connected to Database [+]")
    }
})

//Middleware
app.use(require('prerender-node'))


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge : new Date(Date.now() + 3600000 * 72) },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Passport
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate())); 

//Routes
app.use('/api', Router)
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Start Server
app.listen(process.env.PORT, () => {
    console.log(`[+] Server running on port ${process.env.PORT}`)
})