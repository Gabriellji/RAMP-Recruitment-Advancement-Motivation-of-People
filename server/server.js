const { PORT } = require('./common/config')
const app = require('./app')

const { connect } = require('./db/db.client')

connect(() => {
  app.listen(PORT, (err) => {
    if (err) {
        throw new Error(`An error occurred: ${err.message}`)
      }
    console.log(`App is running on http://localhost:${PORT}`)
  })
})