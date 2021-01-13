const request = require('request');

const fetchBreedDescription = (breed, done) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
    if (error) { //check for error
      done(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) { // make sure cat exists
      done('That cat does not exist.', null);
      return;
    }
    if (data[0] !== undefined) { // make sure it has an object
      done(error, data[0].description);
    }
  })
};

module.exports = { fetchBreedDescription };