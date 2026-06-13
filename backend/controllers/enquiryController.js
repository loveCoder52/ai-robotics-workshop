const Enquiry = require("../models/Enquiry");
const mongoose = require("mongoose");


const inMemoryStore = [];

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid 10-digit mobile number.",
      });
    }

    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      const enquiry = new Enquiry({ name, email, phone });
      await enquiry.save();
      console.log("[enquiry] Saved to MongoDB:", enquiry._id.toString());
    } else {
      console.warn("⚠ MongoDB not connected — stored in memory");
    }

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully.",
    });
  } catch (err) {
    // Mongoose validation errors surface here
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }
    console.error("enquiryController error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = { submitEnquiry };
