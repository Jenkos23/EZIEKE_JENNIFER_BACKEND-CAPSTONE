import express from "express";
import axios from "axios";
const router = express.Router();


// Retrieve the weather data for a specific city
router.get("/:city", async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_APIKEY;
  
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      res.json(response.data);
    } catch (error) {
      console.error(error); // Log the complete error
      if (error.response && error.response.status === 404) {
        return res.status(404).json({ message: "City not found" });
      }
      res.status(500).json({
        message: "Failed to fetch weather data",
        error: error.response ? error.response.data : error.message,
      });
    }
  });


  export default router;