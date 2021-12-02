const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      callback(`Failed :${error}`,null);
      // console.log("Request failed");
    
    } else {
    // console.log('error: ',error);
    // console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body);

      const data = JSON.parse(body);
      // console.log(typeof data);
      if (data[0]) {
        // console.log(data[0].description);
        callback(null,data[0].description);
      } else {
        //  console.log("Breed Not Found");
        error = "invalid entry";
        callback(error,null);
      }
    }

  });
};
module.exports = {fetchBreedDescription};
