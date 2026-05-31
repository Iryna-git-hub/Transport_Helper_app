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
];

function searchRoute() {
  const start = document.getElementById("start").value;
  const destination = document.getElementById("destination").value;

  const foundRoute = routes.find(
    (route) => route.start === start && route.destination === destination,
  );

  if (foundRoute) {
    document.getElementById("result").innerHTML = `
      <h3>Route Found</h3>
      <p>From: ${foundRoute.start}</p>
      <p>To: ${foundRoute.destination}</p>
      <p>Transport: ${foundRoute.transport}</p>
      <p>Line: ${foundRoute.line}</p>
      <p>Time: ${foundRoute.time}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = "<p>No route found.</p>";
  }
}
