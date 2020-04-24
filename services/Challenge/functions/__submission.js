const express = require("express");
const router = express.Router();
const isAuthenticated = require('../../../middleware/check_authentication').checkIfAuthenticated


router.use('/', isAuthenticated, (req, res) => {
   res.end("Welcome to the new submissions")
})


module.exports = router