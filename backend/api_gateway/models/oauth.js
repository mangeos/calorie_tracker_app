const passport = require("passport");

//const { getUserByEmail, createUser } = require('../models/user');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//let con = require('./../config/db')

passport.use(
  new GoogleStrategy(
    {
      /* clientID: '1065073167702-jdtotil3acn7693leg7tsl4fs66p8cba.apps.googleusercontent.com',
   clientSecret: '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',
   callbackURL: 'http://localhost:3000/auth/google/callback'
 */
      clientID:
        "54683269931-o02rpbmmph41h85c44atmqndpsc0s2ht.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // Använd Google-tokens attribut för att generera JWT-token
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,

        // Lägg till andra relevanta användarattribut här
      };

      console.log(user);
      // Skicka användarobjektet och JWT-tokenet till done() för att slutföra autentiseringen
      done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
