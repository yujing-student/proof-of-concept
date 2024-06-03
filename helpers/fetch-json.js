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
    // Add headers (if required by the BNR API)
    const headers = new Headers({
        'Accept': 'application/json',  // Specify JSON acceptance
        // Add any other required headers (e.g., authorization token) based on BNR API documentation
    });

    // Include headers in the payload
    const newPayload = { ...payload, headers };

    return await fetch(url, newPayload)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error fetching data:', error);
            return error;  // Or return a custom error object with more details
        })
}
