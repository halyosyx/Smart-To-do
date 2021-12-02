require("dotenv").config();
const imdb = require('imdb-api');
const yelp = require('yelp-fusion');
const books = require('node-google-books-search-promise');

let apiKeyIMDB = process.env.apiKeyIMDB;
var requestOptions = {
  method: 'GET'
};

const isMovie = function(strTask) {
  return fetch(`https://imdb-api.com/en/API/SearchTitle/${apiKeyIMDB}/${strTask}`, requestOptions)
    .then(response => {
      return response.json()
    })
    .catch(error => console.log('error', error));
}

const yelpKey = process.env.yelpKey;
const isRestaurant = function(task) {
  const client = yelp.client(yelpKey);
  return client.search({
    term: `${task}`,
    location: 'Saskatoon'
  }).then(response => {
    return JSON.parse(response.body)
  })
  .catch(error => console.log('error', error));

}

const isBook = function(task) {
  return books.search(task);
}


module.exports = { isMovie, isRestaurant, isBook };