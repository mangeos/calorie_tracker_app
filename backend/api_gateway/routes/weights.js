const express = require("express");
const weightController = require("../controller/weightController");
const oauthCheck = require("../models/oauthCheck");
const router = express.Router();

// http://localhost:3001/weights
router.get("/", oauthCheck, weightController.getAllWeightsByUserId);

// http://localhost:3001/weights
router.post("/", oauthCheck, weightController.postNewWeight);

// http://localhost:3001/weights
router.put("/", oauthCheck, weightController.putWeight);

// http://localhost:3001/weights
router.delete("/", oauthCheck, weightController.putWeight);

module.exports = router;
