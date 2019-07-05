/** 
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"

 const fetchMyIP = function(callback) {
  find the URL for retrieving our IPv4 IP address in JSON format
  */
const request = require('request');

 const fetchMyIP = function(callback) {
    const url = (`https://api.ipify.org?format=json`) 
    request(url,function(err,resp,body) {
    const ip = JSON.parse(body)
    if(!err) {
      callback(null,ip); 
      
      console.log(`HTTP Status code: ${resp.statusCode}`)   
    } else {
      callback(err,null);
    if(resp.statusCode !== 200) {
        callback(error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null);
        return
    }
    console.log("there was a problem: ", err)
    }
        
    }); 
}

module.exports = { fetchMyIP };