'use strict'

require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const TweetFunctions = require('./src/routes/Tweet.js')
//var methodOverride = require("method-override");

app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }))

//app.use(methodOverride())
//app.use('/api', apiRoutes);


app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
});

app.get('/api/tweets/:screenName', TweetFunctions.getTweetsByScreenName)


