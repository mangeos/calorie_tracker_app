const express = require('express');
const router = express.Router();

// Definiera en GET-rutt för att hämta användarinformation
router.get('/', (req, res) => {
  res.send('Hämtar användarinformation');
});

// Definiera en POST-rutt för att skapa en ny användare
router.post('/', (req, res) => {
  const user = req.body;
  console.log(user);
  // Lägg till kod för att skapa en ny användare
  res.send('Skapar en ny användare');
});

module.exports = router;
