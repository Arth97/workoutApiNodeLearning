const express = require('express');
const apicache = require('apicache');

const memberController = require('../../controllers/memberController')

const router = express.Router();
const cache = apicache.middleware;

router.get("/", cache("2 minutes"), memberController.getAllMembers)
router.get("/name/:name", memberController.getMemberByName)
router.get("/email/:email", memberController.getMemberByEmail)


module.exports = router;