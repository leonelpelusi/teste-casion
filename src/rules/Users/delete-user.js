import { User } from '../../models'

export async function deleteUser (_id) {
  await User.deleteOne({ _id })
}
