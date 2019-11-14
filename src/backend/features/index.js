const fs = require('fs')
const { Router } = require('express')
const { getModuleName } = require('../../../etc/modules/additional')

const router = module.exports = Router()

const features = fs.readdirSync(`${__dirname}`).filter(it => it !== 'index.js').map(it => getModuleName(it))

console.log(features)
features.forEach(k => {
  router.use(`/${k}`, require(`./${k}`))
})
