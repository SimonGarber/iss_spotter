const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')
const { fetchISSFlyOverTimes } = require('./iss')
// ***********************
// Fetch IP function Call*
// ***********************
fetchMyIP((error, ip)=> {
    if(error) {
        console.log("It didn't work!" , error);
        return;
    } else {
        console.log("It works!, Returned IP: ", ip);

        fetchCoordsByIP(ip,(error,data) => {
            if(error) {
                console.log("It didn't work!" , error);
                return;
            } else {
                console.log("It works!, Returned Coordinates: ", data);
                const coords = {latitude: data.latitude, longitude: data.longitude} 
                fetchISSFlyOverTimes(coords,(error,passTimes) => {
                    if(error) {
                        console.log("It didn't work!" , error);
                            return;
                        } else {
                            console.log("It works!, Returned Flyer Over Times: ", passTimes);
                    }
                })  
                }
            }) 
        }
    })   