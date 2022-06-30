
import { handleErrors } from '#utils'
import { users } from '#models'
import { v4 } from 'uuid'

const create = async ({ body }, res) => {
  const { name } = body

  if (!name) return handleErrors({ err: 'name cannot be null', res })

  try {
    const _id = v4()
    const user = await users.findOne({ name }).exec()

    if (user) return handleErrors({ err: 'user already exists', res })

    await users.create({
      _id,
      name
    })

    return res.status(200).send('user created')
  } catch ({ err: message }) {
    return handleErrors({ err: message, res })
  }
}

export default create
