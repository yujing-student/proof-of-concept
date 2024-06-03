// Importeerd npm pakket express uit de node_modules map
import express from 'express'
// Importeerd de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'
import BeoordelingData from "ejs/ejs.js";


const articleUrl = 'https://api.mobile.bnr.nl/v1/articles';

async function getArticles() {
    try {
        const articles = await fetchJson(articleUrl);
        console.log(articles);  // The fetched articles data in JSON format
    } catch (error) {
        console.error('Failed to fetch articles:', error);
    }
}

getArticles();

const audioUrl = await fetchJson(`http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3`)
console.log(articleUrl)
// hier maak ik een nieuwe express app aan


const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))



app.get('/',  function (request, response) {


    // You can access individual articles or properties here (optional)
    articleUrl.forEach(article => {
        console.log(`Article ID: ${article.id}`);
        console.log(`Article Title: ${article.title}`); // Assuming 'title' is a property
        // Access other properties as needed
    });

    fetchJson(`https://api.mobile.bnr.nl/v1/articles`).then((BeoordelingData) => {
        console.log(BeoordelingData[0].id)
        console.log(BeoordelingData.id[1])

        response.render('index', {
            articles: BeoordelingData.title,
        })
        // console.log(ratings)
    })
})



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8001)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})



// // Get Route voor de index
// app.get('/', async function (request, response) {
//
//     const articleUrl = await fetchJson('https://api.mobile.bnr.nl/v1/articles')
//     const audioUrl = await fetchJson('http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3')
//
//
//     Promise.all([
//         fetchJson(articleUrl),
//         fetchJson(audioUrl)
//     ])
//
//         // fetch data directus table f_feedback
//         // hier word de data omgezet naar een object en met render word het weergegeven
//         .then(async (dataDatabase) => {
//             console.log(dataDatabase[0].data)
//             response.render('index', {
//                 articles: dataDatabase[0].data,
//                 audio: dataDatabase[1].data,
//             });
//         })
// })