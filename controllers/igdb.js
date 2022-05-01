// import axios from "axios";
// const express = require("express");
// const router = express.Router();
// const IGDB_URL = "https://api.igdb.com/v4/";
// const IGDB_CLIENT_ID = process.env.IGDB_CLIENT_ID;
// const IGDB_CLIENT_SECRET = process.env.IGDB_CLIENT_SECRET;
// const IGDB_ACCESS_TOKEN = process.env.IGDB_ACCESS_TOKEN;

// export function getToken() {
//     axios({
//         url: `https://id.twitch.tv/oauth2/token?client_id=${IGDB_CLIENT_ID}&client_secret=${IGDB_CLIENT_SECRET}&grant_type=client_credentials`,
//         method: "POST",
//     })
//         .then(res => {
//             console.log(res.data);  // Response should be a JSON object where response.access_token should be the authToken needed to access API
//         })
//         .catch(err => {
//             console.error(err);
//         });
// };

// export function getTop50() {
//     const response = axios({
//         url: `${IGDB_URL}games`,
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Client-ID': `${IGDB_CLIENT_ID}`,
//             'Authorization': `Bearer ${IGDB_ACCESS_TOKEN}`,
//         },
//         data: "fields aggregated_rating,cover.url,first_release_date,genres.name,involved_companies.company.name,name,platforms.name,rating,storyline,summary,total_rating,url; where aggregated_rating>90 & aggregated_rating_count>10; sort aggregated_rating desc; limit 50;"
//       })
//         .then(res => {
//             return(res.data);
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     return response;
// };

// export function getPlatforms() {
//     axios({
//         url: `${IGDB_URL}platforms`,
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Client-ID': `${IGDB_CLIENT_ID}`,
//             'Authorization': `Bearer ${IGDB_ACCESS_TOKEN}`,
//         },
//         data: "fields name,platform_family.name,platform_logo,url;"
//       })
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => {
//             console.error(err);
//         });    
// }

// module.exports = router;