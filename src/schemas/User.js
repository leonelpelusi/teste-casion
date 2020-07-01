import Joi from 'joi'

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  phone: Joi.number().required(),
  address: Joi.object().keys({
    street: Joi.string().required(),
    number: Joi.number().required(),
    zipcode: Joi.number().required()
  }).required()
})
