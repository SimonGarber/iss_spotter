const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')
// ***************************************************************//
fetchMyIP((error, ip)=> {
    if(error) {
        console.log("It didn't work!" , error);
        return;
    } else {
        console.log("It works!, Returned IP: ", ip);
//****************************************************************//  
        fetchCoordsByIP(ip,(error,data) => {
            if(error) {
                console.log("It didn't work!" , error);
                return;
            } else {
                console.log("It works!, Returned Coordinates: ", data); 
            }   
        });
    }
});
    
        
                

