import Joi from 'joi'
import { Router } from 'express'
import {
  createUser,
  listUser,
  updateUser,
  deleteUser
} from '../rules'
import { userSchema } from '../schemas'

const router = Router()

router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/user', (req, res, next) => {
  Joi.validate(req.body, userSchema, (err) => {
    if (err) {
      console.log(new Error(err))
      return res.status(400).json({ message: err })
    }
    return next
  })
  createUser(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: err.message })
    })
})

router.get('/users', (req, res) => {
  listUser()
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: err.message })
    })
})

router.put('/user/:id', (req, res, next) => {
  Joi.validate(req.body, userSchema, (err) => {
    if (err) {
      console.log(new Error(err))
      return res.status(400).json({ message: err })
    }
    return next
  })
  updateUser(req.body, req.params.id)
    .then(() => res.status(204).end())
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: err.message })
    })
})

router.delete('/user/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(() => res.status(204).end())
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: err.message })
    })
})

export default router
