const mongoose = require('mongoose')

const connect = runServer => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  
  const db = mongoose.connection // instance of connection
  db.on('error', console.error.bind(console, 'connection error'))
  db.once('open', () => {
    // we are connected
    console.log('we are connected')
    runServer()
  })
}

module.exports = { connect }