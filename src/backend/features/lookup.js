const pg = require('../pg')

const { Router } = require('express')

const router = module.exports = Router()

router.get('/', (req, res)  => {
  return pg('users')
    .select(
      'id',
      'name'
    )
    .then((response) => {
      console.log(response)
    })
})