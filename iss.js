
const request = require('request');
const fetchMyIP = function(callback) {
   const url = (`https://api.ipify.org?format=json`) 
   request(url,function(err,resp,body) {
     if(err) {
       console.log("there was a problem: ", err)
       callback(err,null)
       return;
      } 
      if(resp.statusCode !== 200) {
        console.log(`HTTP Status code: ${resp.statusCode}`)   
        callback(error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null);
        return;
      }
      const ip = JSON.parse(body)
      callback(null,ip); 
    })
  };
  const fetchCoordsByIP = function(ip,callback) {
    const url = `https://ipvigilante.com/${ip.ip}`
    request(url,function(err,resp,body){
  
      if(err) {
        console.log("there was a problem: ", err)
        callback(err,null)
        return;
      } 
      if(resp.statusCode !== 200) {
        console.log(`HTTP Status code: ${resp.statusCode}`)   
        callback(error(`Status Code ${resp.statusCode} when fetching coordinates. Response: ${body}`), null);
        return;
      }
      const info = JSON.parse(body)
      const coordinates = {latitude: info.data.latitude, longitude: info.data.longitude}
      callback(null,coordinates)
    })
  }
  module.exports = { fetchMyIP,fetchCoordsByIP };
        
  
       
    
   




