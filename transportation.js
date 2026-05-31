const routes = [
  {
    start: "Helsinki",
    destination: "Metropolia",
    transport: "Metro",
    line: "M2",
    time: "25 minutes",
  },
  {
    start: "Kamppi",
    destination: "Pasila",
    transport: "Bus",
    line: "500",
    time: "20 minutes",
  },
  {
    start: "Espoo",
    destination: "Helsinki",
    transport: "Train",
    line: "U",
    time: "30 minutes",
  },
  {
    start: "Helsinki",
    destination: "Pasila",
    transport: "Train",
    line: "I",
    time: "10 minutes",
  },
  {
    start: "Pasila",
    destination: "Airport",
    transport: "Train",
    line: "P",
    time: "30 minutes",
  },
];

function searchRoute() {
  const start = document.getElementById("start").value.trim().toLowerCase();

  const destination = document
    .getElementById("destination")
    .value.trim()
    .toLowerCase();

  if (!start || !destination) {
    document.getElementById("result").innerHTML =
      "<p>Please enter both locations.</p>";
    return;
  }

  const foundRoute = routes.find(
    (route) =>
      route.start.toLowerCase() === start &&
      route.destination.toLowerCase() === destination,
  );

  if (foundRoute) {
    document.getElementById("result").innerHTML = `
      <h3>Route Found ✅</h3>
      <p><strong>From:</strong> ${foundRoute.start}</p>
      <p><strong>To:</strong> ${foundRoute.destination}</p>
      <p><strong>Transport:</strong> ${foundRoute.transport}</p>
      <p><strong>Line:</strong> ${foundRoute.line}</p>
      <p><strong>Time:</strong> ${foundRoute.time}</p>
      <p><strong>Total routes available:</strong> ${routes.length}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = `
      <p>❌ No route found.</p>
     
    `;
  }
}

// Search when Enter key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchRoute();
  }
});
