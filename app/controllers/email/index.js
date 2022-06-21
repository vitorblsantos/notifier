/**
 * Send method
 * @param content {HTMLElement} html that will be sended to client
 * @param emails {String} Recipients that will receive e-mail content, e.g.: foo@bar.com,foo@bar.com
 */

import mailer from 'nodemailer'

import { handleProvider } from './provider'

const submit = async (req, res) => {
  const { content, emailList, provider } = req.body

  if (!content) return res.status(400).send('Content cannot be null')
  if (!emailList) return res.status(400).send('E-mail list cannot be null')

  try {
    const { config, from } = handleProvider(provider)
    const transporter = mailer.createTransport(config)

    await Promise.all(emailList.split(',').map(async email => (
      await transporter.sendMail({
        from,
        to: email.trim(),
        subject: 'Teste de template',
        html: content
      })
    )))

    return res.status(200).send('E-mail submitted')
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export default {
  submit
}
