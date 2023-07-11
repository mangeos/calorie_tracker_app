const express = require("express");
const router = express.Router();

// Använd dynamisk import för att importera node-fetch
const axios = require("axios");

// Definiera en GET-rutt för att hämta användarinformation
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/userservice.example.com/weight",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = response.data;

    console.log(data);
    // Lägg till kod för att skapa en ny användare
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ett fel uppstod vid hämtning av vikterna");
  }
});

// Definiera en POST-rutt för att skapa en ny användare
router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const response = await axios.post(
      "http://localhost:8080/userservice.example.com/weight/",
      body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = response.data;

    console.log(data);
    // Lägg till kod för att skapa en ny användare
    res.send("Skapar en ny användare");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ett fel uppstod vid skapande av användare");
  }
});

module.exports = router;
