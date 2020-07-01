import mongoose from 'mongoose'

export const connect = async () => {
  mongoose.connect(process.env.DBURL, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
}
