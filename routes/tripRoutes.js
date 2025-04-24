// backend/routes/tripRoutes.js

import express from "express";
import Trip from "../models/Trip.js"; // Make sure this file exists

const router = express.Router();

// GET all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new trip
router.post("/", async (req, res) => {
  const { destination, date, budget } = req.body;

  if (!destination || !date || !budget) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const trip = new Trip({ destination, date, budget });
    await trip.save();
    console.log("✅ Trip saved:", trip); // 🟢 This line will log saved trip
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ error: "Error saving trip" });
  }
});

// DELETE a trip by ID
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting trip" });
  }
});

// PUT (edit) a trip
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTrip);
  } catch (error) {
    res.status(500).json({ error: "Error updating trip" });
  }
});

export default router;
