/*** Express setup & start ***/

// 1. Opzetten van de webserver

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from "./helpers/fetch-json.js";

// Importeer het npm pakket express uit de node_modules map
import express from "express";

// Stel het basis endpoint in
  const apiUrl = "https://fdnd-agency.directus.app/items/";

// Maak een nieuwe express app aan
const app = express();

// Stel ejs in als template engine
// View engine zorgt ervoor dat data die je ophaalt uit de api , waar je in je code dingen mee doet, daar html van maakt
app.set("view engine", "ejs");

// Stel de map met ejs templates in
app.set("views", "./views");

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static("public"));

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }));

/*** Routes & data ***/

// 2. Routes die HTTP Request and Responses afhandelen

// Maak een GET route voor de index

app.get("/", function (request, response) {
  Promise.all([
    fetchJson(apiUrl + "dda_agencies"),
    fetchJson(apiUrl + "dda_agencies_vacancies")
]).then(([agenciesData, vacanciesData]) => {
    response.render("index", {
        agencies: agenciesData.data,
        vacancies: vacanciesData.data
    });
});
});

app.get("/about", function (request, response) {
  response.render("about")
})

app.get("/vacancies", function (request, response) {
  response.render("vacancies")
})

app.get("/members", function (request, response) {
  response.render("members")
})

app.get("/news", function (request, response) {
  response.render("news")
})

app.get("/events", function (request, response) {
  response.render("events")
})

// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

