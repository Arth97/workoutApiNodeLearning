const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')

router.get("/", memberController.getAllMembers)
router.get("/:name", memberController.getMemberByName)


module.exports = router;