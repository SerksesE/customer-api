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

module.exports = router