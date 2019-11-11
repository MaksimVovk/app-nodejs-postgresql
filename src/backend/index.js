const express = require('express')
const pg = require('../../etc/database/index')
const { port } = require('../../etc/enums')

const app = express()
  pg('users').then(it => console.log(it))
app.listen(port, () => {
  console.log(`App work on port ${port}-`)
})
