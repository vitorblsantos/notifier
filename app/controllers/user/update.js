import { handleErrors } from '#utils'
import { users } from '#models'

const update = async ({ body: { _id, name, role } }, res) => {
  try {
    const user = await users.findOne({ _id }).exec()
    if (name !== user.name) user.name = name
    if (role !== user.role) user.role = role

    await users.updateOne({ _id }, user)

    return res.status(200).send('user updated')
  } catch ({ err }) {
    console.log(err)
    return handleErrors({ err, res })
  }
}

export default update
