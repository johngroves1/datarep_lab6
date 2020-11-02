const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser")

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Listening for HTTP get requests
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying!');
})

// Take an argument form in the url path
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

// HTTP get requests for JSON data
app.get('/api/movies', (req, res) => {
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies: myMovies});
})

// HTTP get requests for returning files
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Get Request passes data to the URL
app.get('/name', (req, res) =>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

// Post Request passes data via body (install bodyParser)
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

// Setting up Web Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

