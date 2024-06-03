// Importeerd npm pakket express uit de node_modules map
import express from 'express'
// Importeerd de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'



const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))




app.get('/', (request, response) => {
    fetchJson('https://api.mobile.bnr.nl/v1/articles')


        .then(articles => {
            console.log('Fetched articles:', articles);
            // http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3   link naar audio
            articles.forEach(article => {
                console.log(`Article ID: ${article.id}`); // Assuming 'id' is a property
                console.log(`Article Title: ${article.title}`);  // Assuming 'title' is a property
                // Access other properties as needed
            });
            const audioUrl = 'http://25683.live.streamtheworld.com/BNR_BUSINESS_BEATS.mp3';

            response.render('index', {
                articles,
                audioUrl,
            });
        })
        .catch(error => {
            console.error('Failed to fetch articles:', error);
            // Handle error case (e.g., display an error message in the template)
            return response.render('error', { message: 'Failed to fetch articles' });
        });
})

// de audio is niet fetchbaar omdat het geen json is
//
// app.get('/', async (request, response) => {
//     try {
//         // Correct the audio URL (assuming it's a direct mp3 stream)
//         const feedbackUrl = await fetchJson('https://api.mobile.bnr.nl/v1/articles');
//         const audioUrl = await fetchJson('http://25683.live.streamtheworld.com/BNR_BUSINESS_ BEATS.mp3'); // Remove the extra "s"
//
//         // Fetch articles and audio concurrently (assuming fetchJson resolves with data)
//         const [articles, audio] = await Promise.all([feedbackUrl, audioUrl]);
//
//         console.log('Fetched articles:', articles);
//         articles.forEach(article => {
//             console.log(`Article ID: ${article.id}`); // Assuming 'id' is a property
//             console.log(`Article Title: ${article.title}`);  // Assuming 'title' is a property
//             // Access other properties as needed
//         });
//         console.log('Fetched audio:', audio);
//
//         // Assuming 'audio' contains the actual audio data (might need adjustments)
//         response.render('index', {
//             articles,
//             audio,
//         });
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//         // Handle error case (e.g., display an error message in the template)
//         return response.render('error', { message: 'Failed to fetch data' });
//     }
// })



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