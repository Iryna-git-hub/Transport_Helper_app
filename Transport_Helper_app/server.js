import express from "express";
import { stops } from "./data/mockStops.js";
import { routes } from "./data/mockRoutes.js";

const app = express();

// 🚏 search stops
app.get("/v1/stops/search", (req, res) => {
  const q = req.query.q?.toLowerCase();

  const results = stops.filter(stop =>
    stop.name.toLowerCase().includes(q)
  );

  res.json({ results });
});

// 🚆 routes
app.get("/v1/routes", (req, res) => {
  const { from, to } = req.query;

  const result = routes.filter(
    r => r.from === from && r.to === to
  );

  res.json({ routes: result });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});