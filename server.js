const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();
app.set('view engine', 'ejs')
var db


MongoClient.connect('mongodb://root:root123@ds157475.mlab.com:57475/star-wars-quotes', (err, client) => {
  if (err) return console.log(err)
	  db = client.db('star-wars-quotes') // whatever your database name is
	  app.listen(3000, () => {
		console.log('listening on 3000')
	  })
})


app.use(bodyParser.urlencoded({extended: true}))
/* app.listen(3000, function() {
  console.log('listening on 3000')
}) */

app.get('/', (req, res) => {
  
	db.collection('quotes').find().toArray((err, result) => {
		if (err) return console.log(err)
		// renders index.ejs
		res.render('index.ejs', {quotes: result})
	})
  
})
// Note: request and response are usually written as req and res respectively.

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
/* app.get('/', (req, res) => {
  
}) */

