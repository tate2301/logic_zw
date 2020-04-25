const express = require("express");
const router = express.Router();
const Authentication = require('./functions/authentication')

router.use('/pass', Authentication)

module.exports = router;