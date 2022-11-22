const express = require('express')
const app = express()
const port = 8888

app.use('/', ()=>{
  require('./src/routes')
})

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    massage: "Server is running well"
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})