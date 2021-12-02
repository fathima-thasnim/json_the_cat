const request = require('request');
const breedName = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log("Request failed");
    
  } else {
    // console.log('error: ',error);
    // console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body);

    const data = JSON.parse(body);
    // console.log(typeof data);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("Breed Not Found");
    }
  }

});