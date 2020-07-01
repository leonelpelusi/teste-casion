import { User } from '../../models'

export async function createUser (user) {
  await User.create(user)

  delete user.password

  return user
}
