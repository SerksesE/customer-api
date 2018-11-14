const { Router } = require('express')
const router = new Router()
const { toJWT, toData } = require('./jwt')

router.post('/logins', (req, res) => {
  const email = req.body.email
  const password = req.body.password

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
    const data = toData(auth[1])
    res.send({
      message: 'Thanks for visiting the secret endpoint.',
      data
    })
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router