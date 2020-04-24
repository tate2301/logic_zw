const Router = require('express').Router()
const UserController = require('./services/User/index')
const ChallengeController = require('./services/Challenge/index')
const AdminController = require('./services/Admin/admin')
const checkAuthenticated = require('./middleware/check_authentication').checkIfAuthenticated
const checkAdminAuthenticated = require('./middleware/check_authentication').checkIfAdmin


Router.use('/auth', UserController)
Router.get('/authcheck', checkAuthenticated, (req, res) => {
  res.json({message: "Where the fuck are you going"})
})

Router.use('/users', checkAuthenticated, UserController)
Router.use('/challenges', ChallengeController)
Router.use('/admin', checkAdminAuthenticated, AdminController)


module.exports = Router