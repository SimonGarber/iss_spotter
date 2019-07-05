const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip)=> {
    if(error) {
        console.log("It didn't work!" , error);
        return;
    } else {
        console.log("It works!, Returned IP: ", ip); 
    }
    
});