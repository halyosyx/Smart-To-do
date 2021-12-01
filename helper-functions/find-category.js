const imdb = require('imdb-api');
const yelp = require('yelp-fusion');
const books = require('node-google-books-search-promise');

let apiKeyIMDB = 'k_bntzn962';
var requestOptions = {
  method: 'GET'
};

const isMovie = function(strTask) {
  return fetch(`https://imdb-api.com/en/API/SearchTitle/${apiKeyIMDB}/${strTask}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

const yelpKey = 'noUQYkjyq7YBITSqtCbZstcZMZBh9Go_ZBXLoQDJ6SM_dBffoStTXlBgGnNQb6c2T3mnm3mJwaAn2u-I24F3S4A8VcxUDW8Kz03-Jn5pJq6UlxE_bAJGMpmQTIqnYXYx';
const isRestaurant = function(task) {
  const client = yelp.client(yelpKey);
  return client.search({
    term: `${task}`,
    location: 'Saskatoon'
  })
}

const isBook = function(task) {
  return books.search(task);
}


module.exports = { isMovie, isRestaurant, isBook };