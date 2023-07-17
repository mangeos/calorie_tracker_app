const axios = require("axios");

const weightController = {
  getAllWeightsByUserId: async (req, res, next) => {
    try {
      console.log("req.user.id");
      console.log(req.user.id);
      const userId = req.user.id;
      const response = await axios.get(
        "http://localhost:8080/userservice.example.com/weight",
        {
          headers: {
            "Content-Type": "application/json",
            "User-Id": userId,
          },
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
  },

  getBikeController: async (req, res, next) => {
    let id = req.params.id;

    try {
      let getBike = await bikeService.getBikeById(id);
      res.status(200).json(getBike);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

module.exports = weightController;
