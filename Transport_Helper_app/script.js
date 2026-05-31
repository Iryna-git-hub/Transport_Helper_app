

document.addEventListener("DOMContentLoaded", () => {
  console.log("Transport Helper App loaded!");
  
});

async function fetchRoutes() {
  try {
    const response = await fetch("http://localhost:3000/api/routes");
    const routes = await response.json();
    console.log("Available routes:", routes);
   
  } catch (error) {
    console.error("Error fetching routes:", error);
  }
}


document.addEventListener("DOMContentLoaded", fetchRoutes);
