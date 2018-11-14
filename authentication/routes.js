const { Router } = require('express')
const router = new Router()
const { toJWT, toData } = require('./jwt')
const bcrypt = require('bcrypt') 

router.post('/logins', (req, res) => {
  const email = req.body.email
  const password = bcrypt.hashSync(req.body.password, 10)

  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  }
  else {
    res.send({
      jwt: toJWT({ userId: 1 })
    })
  }
})

router.get('/secret-endpoint', (req, res) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      })
    }
    catch(error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router