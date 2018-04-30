var db

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://<root>:<root123>@ds157475.mlab.com:57475/star-wars-quotes', (err, client) => {
  if (err) return console.log(err)
	  db = client.db('star-wars-quotes') // whatever your database name is
	  app.listen(3000, () => {
		console.log('listening on 3000')
	  })
})