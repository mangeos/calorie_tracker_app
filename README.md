# Vikt- och kalorispårningsapp

Projektet är skapat för att hjälpa användare att övervaka sitt dagliga kaloriintag och spåra sina viktförändringar över tid. Appen består av en frontend byggd med React och en mikrotjänstbaserad backend som använder både Node.js och Java spring boot. Backend drivs av MongoDB för att lagra och hantera användardata. Användare loggar in säkert med Google OAuth2 för en personlig upplevelse.

## Funktioner

- Spåra dagligt kaloriintag genom att lägga till livsmedel och deras kaloriinnehåll.
- Registrera viktmätningar med jämna mellanrum.
- Visualisera kalori- och vikttrender över tid.
- Backend byggd som en mikrotjänst med Node.js och Java spring boot.
- Databaslagring och hantering med MongoDB.
- Implementera användarautentisering och personlig spårning.
- **Användarautentisering:** Logga in säkert med Google OAuth2 för en personlig upplevelse.

## Screenshots

![Login Page](/images/loginPic.png)

![Adding Food](/images/caloriesPic.png)

![Tracking Weight](/images/weightPic.png)

## Backend Mikrotjänster

- **Node.js Mikrotjänst:** Hanterar mat- och kalorisökning.
- **Java Mikrotjänst:** Hanterar viktregistrering.
- Båda mikrotjänsterna kommunicerar med MongoDB för datalagring.

## Installation

1. Klona repositoryn.
2. Sätt upp mikrotjänsterna för Node.js och Java.
3. Starta mikrotjänsterna.
4. Gå till projektkatalogen och kör npm install för React-frontenden.
5. Kör npm start för att starta frontend-utvecklingsservern.

## Använda teknologier

- React för frontenden.
- Node.js och Express för Node.js-mikrotjänsten.
- Java spring boot för Java-mikrotjänsten.
- MongoDB för datalagring och hantering.

