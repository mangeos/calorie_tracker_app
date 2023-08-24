# Använd den officiella Node.js-bilden som grund
FROM node:14

# Ange arbetskatalogen inuti containern
WORKDIR /usr/src/app

# Kopiera paket.json och paket-lås från lokal mapp till arbetskatalogen
COPY ./package*.json ./

# Installera beroenden
RUN npm install

# Kopiera allt annat innehåll från den lokala mappen till arbetskatalogen
COPY ./ ./

# Exponera port 3000 för att nå applikationen utanför containern
EXPOSE 3000

# Starta API Gateway
CMD ["npm", "start"]
