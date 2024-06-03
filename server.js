// Importeerd npm pakket express uit de node_modules map
import express from 'express'
// Importeerd de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// variable voor de index route

const articleUrl = await fetchJson('https://api.mobile.bnr.nl/v1/articles')
const audioUrl = await fetchJson('http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3')

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

app.get('/', async function (request, response) {

    const articleUrl = await fetchJson('https://api.mobile.bnr.nl/v1/articles')
    const audioUrl = await fetchJson('http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3')


    fetchJson(articleUrl).then((BeoordelingData) => {
        console.log(BeoordelingData)

        response.render('index', {
            alleHuizen: BeoordelingData.data,
            alleRatings: BeoordelingData.data,
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
