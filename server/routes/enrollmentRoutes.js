const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");

// СОЗДАТЬ ЗАЯВКУ
router.post("/", async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();

    res.status(201).json({
      message: "Заявка создана",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// ПОЛУЧИТЬ ЗАЯВКИ ПО EMAIL
router.get("/:email", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      userEmail: req.params.email,
    });

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;