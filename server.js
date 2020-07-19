const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env'})

const app = express();


app.use('/api/store', require('./routes/store'))

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${port}`)
})