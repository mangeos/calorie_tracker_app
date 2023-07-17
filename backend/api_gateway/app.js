const express = require("express");
const axios = require("axios");
const app = express();
/* const rateLimit = require("express-rate-limit"); */

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

/* const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 timme
  max: 500, // Max antal förfrågningar per fönster
  message: 'För många förfrågningar från denna IP, försök igen senare.'
});

// Använd limiter som en middleware före dina API-rutter
app.use(limiter); */

// Middleware för att analysera JSON-payloads
app.use(express.json());

// Ange sökvägen till router-filen
const weights = require("./routes/weights");

// Google oauth2
const passport = require("passport");

app.use(passport.initialize());

// Denna delen skapar cookie, som skickas till frontenden vid ett senare tillfälle
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    name: "Calorie-Tracker",
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

app.use(passport.session());

// Öppnar google-oauth
require("./models/oauth");

// google login för kund
app.get("/api/login", (req, res, next) => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account", // "select_account" används för att tvinga inloggning även om användaren redan är inloggad
    //passReqToCallback: true, // Gör så att man kan nå "req" i google strategien.
  })(req, res, next);
});

// Använd router för '/weights'-sökvägen
app.use("/api/weights", weights);

//----------------------------------- Test callback------------------------------------------------------------

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/api/logout",
  }),
  async (req, res) => {
    console.log(req.user);
    res.redirect(`http://localhost:3001/home`);
  }
);

app.get("/api/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      // Hantera eventuella fel vid utloggningen
      console.error(err);
      // Skicka ett lämpligt felmeddelande till klienten
      res.status(500).send("Failed to logout");
      return;
    }
    res.redirect(`http://localhost:3001`);
  });
});

//--------------------------------------------------------------------------------------------------------------

// Rutt för att hämta alla produkter
app.get("/api/products", (req, res) => {
  axios
    .get(`${PRODUCT_SERVICE_URL}/products`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "Det uppstod ett fel vid hämtning av produkter." });
    });
});

// Rutt för att skapa en ny produkt
app.post("/api/products", (req, res) => {
  axios
    .post(`${PRODUCT_SERVICE_URL}/products`, req.body)
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "Det uppstod ett fel vid skapande av produkt." });
    });
});

// Rutt för att uppdatera en produkt
app.put("/api/products/:id", (req, res) => {
  axios
    .put(`${PRODUCT_SERVICE_URL}/products/${req.params.id}`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "Det uppstod ett fel vid uppdatering av produkt." });
    });
});

// Rutt för att radera en produkt
app.delete("/api/products/:id", (req, res) => {
  axios
    .delete(`${PRODUCT_SERVICE_URL}/products/${req.params.id}`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "Det uppstod ett fel vid radering av produkt." });
    });
});

// Starta API Gateway
const port = 3000; // Ange den port du vill lyssna på
app.listen(port, () => {
  console.log(`API Gateway är igång på port ${port}`);
});
