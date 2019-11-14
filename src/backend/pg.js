const environment = process.env.NODE_ENV || 'development'
const config = require('../../etc/database/knexfile')[environment]

module.exports = require('knex')(config)