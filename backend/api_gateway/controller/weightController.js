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

  postNewWeight: async (req, res, next) => {
    // Skapa det nya elementet med datumet
    console.log(req.user.id);
    const mergedObj = { ...req.body, userId: req.user.id };
    console.log(mergedObj);
    try {
      await axios.post(
        "http://localhost:8080/userservice.example.com/weight",
        mergedObj
      );
      res.status("200").send("success");
    } catch (error) {
      console.error("Error posting data to API:", error);
      res.send("Error posting data to API:");
    }
  },
  putWeight: async (req, res, next) => {
    // Skapa det nya elementet med datumet
    console.log("put!");
    console.log(req.user.id);
    const mergedObj = { ...req.body, userId: req.user.id };
    console.log(mergedObj);
    try {
      await axios.put(
        `http://localhost:8080/userservice.example.com/weight/${req.user.id}/${req.body.date}/${req.body.weight}`,
        mergedObj
      );
      res.status("200").send("success");
    } catch (error) {
      console.error("Error posting data to API:", error);
      res.send("Error posting data to API:");
    }
  },
};

module.exports = weightController;
