const express = require("express");
const Challenge = require('./functions/__challenge')
const Submission = require('./functions/__submission')
const Participant = require('./functions/__participants')
const Discussion = require('./functions/__discussion')
const Activity = require('./functions/__activity')

const router = express.Router();

router.get('/', Challenge)
router.use('/submission', Submission)
router.use('/activity', Activity)
router.use('participant', Participant)
router.use('/discussion', Discussion)



module.exports = router