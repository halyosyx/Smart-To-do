## SmartToDo List
=========
SmartToDo list is a single page application that utilizes different APIs to categorize data. Users can add new tasks, recategorize list and delete a task. They can also mark it as completed.
Each todo created should be categorized in one of the following category:

Film / Series (To watch)
Restaurants, cafes, etc. (To eat)
Books (To read)
Products (To buy)

To seggrigate data in categories imdb-api API, google-books-promise API and yelp-fusion API.
## Project Setup

Clone this repository.
Install all dependencies using npm install command.
Create database tables using file create_tables.sql.
populate data using file populate_tables.sql. 
Using node.js, run command 'npm run local' in project directory.
## Dependencies

    cookie-session 1.4.0,
    dotenv 2.0.0,
    ejs 2.6.2,
    express 4.17.1,
    google-books-search 0.3.1,
    imdb-api 4.4.1,
    morgan 1.9.1,
    node-google-books-search-promise 0.3.2,
    pg 8.5.0,
    pg-native 3.0.0,
    sass 1.35.1,
    yelp-fusion 3.0.0

## Warnings
Need API Keys for using imdb-api API and yelp-fusion API.
There is a limit for API calls once it's over you need to regenerate a key it .

