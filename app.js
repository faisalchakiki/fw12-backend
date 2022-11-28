// import
const express = require('express')
const cors = require('cors')
const Router = require('./src/routes')
const database = require('./src/helpers/db.helper')

// deklarasikan dengan variable
const app = express()
const port = 8888
// mendaftarkan middleware ke express
app.use(cors())
app.use(express.urlencoded({ extended: true })) //parse data
app.use('/', Router)

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD"
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})