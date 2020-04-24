require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const User = require('./services/Profile/model_profile')
const LocalStrategy = require('passport-local').Strategy; 
const Router = require('./Router')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const path = require('path')
const MongoStore = require('connect-mongo')(session);
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const pathMatch = require('path-match')
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()
const {parse} = require('url')

nextApp.prepare()
    .then(() => {
        const app = require('express')()
        //Database 
        mongoose.connect(
            //"mongodb+srv://logic:JSqgo7BV3Sgli8ZQ@cluster0-vtqet.mongodb.net/test?retryWrites=true&w=majority",
            "mongodb://localhost/logic_db",
            {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
                if(err) {
                    console.log(err)
                } else {
                    console.log("[+] Connected to Database [+]")
                }
        })
        
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

        app.use('/app',express.static(path.join(__dirname, 'build')));
        app.get('/app/*', function (req, res) { res.sendFile(path.join(__dirname, 'build', 'index.html'));});

        app.use(express.static(path.join(__dirname, 'uploads/')));

        const route = pathMatch();

        app.use('/static', express.static(path.join(__dirname, 'public'), {
            maxAge: dev ? '0' : '365d'
        }));

        app.get('/auth', (req, res) => {
            return nextApp.render(req, res, '/login', req.query);
        });

        app.get('/challenges', (req, res) => {
            return nextApp.render(req, res, '/challenges', req.query);
        });

        app.get('/challenges/:_id', (req, res) => {
            const params = route('/challenges/:_id')(parse(req.url).pathname);
            return nextApp.render(req, res, '/challenges/:_id', params);
        });

        app.get('/profile/:_id', (req, res) => {
            const params = route('/profile/:_id')(parse(req.url).pathname);
            return nextApp.render(req, res, '/profile', params);
        });

        app.get('*', (req, res) => {
            return handle(req, res);
        });


        app.listen(3001, (err) => {
            if (err) throw err

            console.log("[+] Server started on http://localhost:3001")
        })
})
