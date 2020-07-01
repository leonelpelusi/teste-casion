import { User } from '../../models'

export async function listUser () {
  const users = await User.find()

  return users
}
