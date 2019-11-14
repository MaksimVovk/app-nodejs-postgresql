const { port } = require('../../etc/enums')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use('/', require('./features'))

app.listen(port, () => {
  console.log(`App work on port ${port}-`)
})


