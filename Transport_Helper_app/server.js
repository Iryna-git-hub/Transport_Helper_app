

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/v1/stops/search", (req, res) => {
  const q = req.query.q;
  res.json({
    results: [
      {
        id: "stop_123",
        name: `Mock result for ${q}`,
        lat: 55.67,
        lon: 12.56,
      },
    ],
  });
});


app.get("/api/routes", (req, res) => {
  res.json([
    { id: 1, name: "Bus 101", from: "Station A", to: "Station B" },
    { id: 2, name: "Metro Red", from: "Station C", to: "Station D" },
    { id: 3, name: "Tram 5", from: "Station E", to: "Station F" },
  ]);
});


app.post("/api/calculate-fare", (req, res) => {
  const { routeId, passengers } = req.body;
  const baseFare = 2.5;
  const fare = baseFare * (passengers || 1);
  res.json({ fare });
});


app.get("/v1/routes", (req, res) => {
  const { from, to } = req.query;
  res.json({
    routes: [
      {
        from,
        to,
        duration: 25,
        transfers: 1,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
