const express = require("express");
const weightController = require("../controller/weightController");
const oauthCheck = require("../models/oauthCheck");
const router = express.Router();

// Definiera en GET-rutt för att hämta användarinformation
router.get("/", oauthCheck, weightController.getAllWeightsByUserId);
/* router.get("/", weightController.getAllWeightsByUserId); */

module.exports = router;
