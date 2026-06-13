const express = require("express");
const { submitEnquiry } = require("../controllers/enquiryController");

const router = express.Router();

router.post("/enquiry", submitEnquiry);

module.exports = router;
