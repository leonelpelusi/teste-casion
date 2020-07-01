import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'gender is required']
  },
  phone: {
    type: Number,
    required: [true, 'phone is required']
  },
  address: {
    type: {
      street: String,
      number: Number,
      zipcode: Number
    },
    required: [true, 'login is address']
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

export const User = model('User', schema)
