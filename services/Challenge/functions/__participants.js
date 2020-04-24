const express = require("express");
const router = express.Router();
const Challenge = require('../models/model_challenge')
const isAuthenticated = require('../../../middleware/check_authentication').checkIfAuthenticated

router.use('/', isAuthenticated, (req, res) => {
    res.end("Welcome to the new discussion")
 })

module.exports = router