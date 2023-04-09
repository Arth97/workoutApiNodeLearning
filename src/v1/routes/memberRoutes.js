const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')

router.get("/", memberController.getAllMembers)
router.get("/name/:name", memberController.getMemberByName)
router.get("/email/:email", memberController.getMemberByEmail)


module.exports = router;