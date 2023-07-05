const express = require('express');
const axios = require('axios');
const app = express();
const rateLimit = require('express-rate-limit');

const cors = require('cors')

 
app.use(cors({
    origin: '*',
    credentials: true
}));

const PRODUCT_SERVICE_URL = 'http://localhost:8080'; // URL till produkt API-tjänsten

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 timme
  max: 500, // Max antal förfrågningar per fönster
  message: 'För många förfrågningar från denna IP, försök igen senare.'
});

// Använd limiter som en middleware före dina API-rutter
app.use(limiter);

// Middleware för att analysera JSON-payloads
app.use(express.json());

// Ange sökvägen till router-filen
const users = require('./routes/users');

// Google oauth2
const passport = require('passport');

app.use(passport.initialize());

// Öppnar google-oauth
require("./models/oauth")

// google login för kund
app.get('/api/login', (req, res, next) => {
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account', // "select_account" används för att tvinga inloggning även om användaren redan är inloggad
        //passReqToCallback: true, // Gör så att man kan nå "req" i google strategien. 
    })(req, res, next);
});

// Använd router för '/users'-sökvägen
app.use('/api/users', users);

//----------------------------------- Test callback------------------------------------------------------------

app.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: 'http://localhost:3000/api/logout' }),
   async (req, res) => {
      console.log(req.authInfo.token);
      const token = req.authInfo.token;
      res.redirect(`http://localhost:19000?token=${token}`);
    }
);

app.get('/api/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      // Hantera eventuella fel vid utloggningen
      console.error(err);
      // Skicka ett lämpligt felmeddelande till klienten
      res.status(500).send('Failed to logout');
      return;
    }
    res.send('logout');
  });
});


//--------------------------------------------------------------------------------------------------------------


// Rutt för att hämta alla produkter
app.get('/api/products', (req, res) => {
  axios.get(`${PRODUCT_SERVICE_URL}/products`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Det uppstod ett fel vid hämtning av produkter.' });
    });
});

// Rutt för att skapa en ny produkt
app.post('/api/products', (req, res) => {
  axios.post(`${PRODUCT_SERVICE_URL}/products`, req.body)
    .then(response => {
      res.status(201).json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Det uppstod ett fel vid skapande av produkt.' });
    });
});

// Rutt för att uppdatera en produkt
app.put('/api/products/:id', (req, res) => {
  axios.put(`${PRODUCT_SERVICE_URL}/products/${req.params.id}`, req.body)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Det uppstod ett fel vid uppdatering av produkt.' });
    });
});

// Rutt för att radera en produkt
app.delete('/api/products/:id', (req, res) => {
  axios.delete(`${PRODUCT_SERVICE_URL}/products/${req.params.id}`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Det uppstod ett fel vid radering av produkt.' });
    });
});

// Starta API Gateway
const port = 3000; // Ange den port du vill lyssna på
app.listen(port, () => {
  console.log(`API Gateway är igång på port ${port}`);
});
