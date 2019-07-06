// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss')
// const { fetchISSFlyOverTimes } = require('./iss')
const { nextISSTimesForMyLocation } = require('./iss')
// ***********************
// Fetch IP function Call*
// ***********************
// fetchMyIP((error, ip)=> {
//     if(error) {
//         console.log("It didn't work!" , error);
//         return;
//     } else {
//         console.log("It works!, Returned IP: ", ip);

//         fetchCoordsByIP(ip,(error,data) => {
//             if(error) {
//                 console.log("It didn't work!" , error);
//                 return;
//             } else {
//                 console.log("It works!, Returned Coordinates: ", data);
//                 const coords = {latitude: data.latitude, longitude: data.longitude} 
//                 fetchISSFlyOverTimes(coords,(error,passTimes) => {
//                     if(error) {
//                         console.log("It didn't work!" , error);
//                             return;
//                         } else {
//                             console.log("It works!, Returned Flyer Over Times: ", passTimes);
                    
//                     }
//                 })  
//                 
//             }) 
//         }
//     })   
    const printPassTimes = function(passTimes) {
        for (const pass of passTimes) {
          const datetime = new Date(0);
          datetime.setUTCSeconds(pass.risetime);
          const duration = pass.duration;
          console.log(`Next pass at ${datetime} for ${duration} seconds!`);
        }
    }
    nextISSTimesForMyLocation((error,passTimes) => {
        if(error) {
            return console.log(`It didnt work`, error);
        }
        printPassTimes(passTimes);
    });
    
module.exports = { printPassTimes };
