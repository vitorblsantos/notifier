import { handleErrors } from '#utils'
import { users } from '#models'

const find = async (_, res) => {
  try {
    const data = await users.find({ active: { $eq: true } }).exec()
    return res.status(200).send(data)
  } catch ({ err: { message } }) {
    return handleErrors({ err: message, res })
  }
}

export default find
