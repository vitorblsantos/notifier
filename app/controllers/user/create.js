
import { handleErrors } from '#utils'
import { users } from '#models'
// import { v4 } from 'uuid'

const create = ({ body }, res) => {
  const { name } = body

  try {
    // const _id = v4()

    return users.find({ name }, (err, data) => {
      if (err) return handleErrors(err)
      return res.status(200).send(data)
    })
  } catch (err) {
    return handleErrors(err)
  }
}

export default create
