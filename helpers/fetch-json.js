/**
 * An asynchronous helper function that wraps the standard node.js fetch API.
 * This function calls an API url passed as the first and mandatory parameter,
 * there is an optional payload parameter to send a json object, eg. a filter.
 * It then calls the API and returns the response body parsed  as a json object.
 * @example <caption>fetchJson as returning function using the await keyword</caption>
 * const data = await fetchJson('https://api-url.com/endpoint/')
 * @example <caption>fetchJson as oneliner using the then() structure.</caption>
 * fetchJson('https://api-url.com/endpoint/').then((data)=>{
 *  // use data...
 * })
 * @param {string} url the api endpoint to address
 * @param {object} [payload] the payload to send to the API
 * @returns the response from the API endpoint parsed as a json object
 */
// export default async function fetchJson(url, payload = {}) {
//     return await fetch(url, payload)
//         .then((response) => response.json())
//         .catch((error) => error)
// }


export default async function fetchJson(url, payload = {}) {
  // hier word een nieuwe const aangemaakt met de headers die nodig zijn voor de fetch omdat die hem anders waarschijnlijk niet accepteert
    const headers = new Headers({
        'Accept': 'application/json',
    });

    // hier word de url, payload en headers in een nieuwe const gezet en word er een fetch gedaan naar de url
    const newPayload = { url,payload, headers };

    return await fetch(url, newPayload)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error fetching data:', error);
            return error;
        })
}
