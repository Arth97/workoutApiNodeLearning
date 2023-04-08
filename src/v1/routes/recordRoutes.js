const express = require('express');
const router = express.Router();

const recordController = require("../../controllers/recordController");

router.get("/", recordController.getAllRecords)
router.post("/", recordController.addOneRecord)


module.exports = router;