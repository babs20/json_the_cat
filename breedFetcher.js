const request = require('request');

const breed = process.argv.slice(2, 3);

const breedFetcher = (url, done) => {
  request(`${url}`, (error, response, body) => {
    if (error) {
      console.log('Please check your url.');
      console.log(error);
      return;
    }

    if (response.statusCode > 299 && response.statusCode < 200) {
      console.log(error);
      return;
    }

    done(body);
  });
};

breedFetcher(`https://api.thecasdaatapi.com/v1/breeds/search/?q=${breed}`, (body) => {
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    const description = data[0].description;
    console.log(description);
    return;
  }
  console.log('The breed you are looking for is either not a breed or unavailable :3');
});

