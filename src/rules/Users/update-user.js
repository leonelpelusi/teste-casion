import { User } from '../../models'

export async function updateUser (user, _id) {
  await User.updateOne({ _id }, user)
}
