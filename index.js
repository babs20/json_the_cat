const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2, 3);

fetchBreedDescription(breed, (error, desc) => {
  if (error) { // error
    console.log(error);
    return;
  } else { // console.log desc
    console.log(desc);
  }
});
