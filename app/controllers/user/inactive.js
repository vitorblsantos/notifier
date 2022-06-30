import { handleErrors } from '#utils'
import { users } from '#models'

export default async ({ body: { _id } }, res) => {
  try {
    if (!_id) return handleErrors({ err: 'provide user id', res })
    await users.updateOne({ _id }, { active: false }).exec()
    return res.status(200).send('user deleted')
  } catch ({ err }) {
    console.log(err)
    return handleErrors({ err, res })
  }
}
