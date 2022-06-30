import { handleErrors } from '#utils'
import { users } from '#models'

const findAll = (_, res) => {
  try {
    return users.find((err, data) => {
      if (err) return handleErrors({ err, res })
      return res.status(200).send(data)
    })
  } catch (err) {
    return handleErrors({ res, err })
  }
}

export default findAll
