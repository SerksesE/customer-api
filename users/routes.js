const { Router } = require('express')
const router = new Router()
const User = require('./model')

router.post('/users', (req, res, next) => {
  User
    .create(req.body)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User does not exist`
        })
      }
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})

module.exports = router