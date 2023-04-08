const express = require('express');
const router = express.Router();

const recordController = require("../../controllers/recordController");

router.post("/", recordController.addOneRecord)


module.exports = router;