/**
 * Send method
 * @param content {HTMLElement} html that will be sended to client
 * @param emails {String} Recipients that will receive e-mail content, e.g.: foo@bar.com,foo@bar.com
 */

import { handler } from '../provider'
import mailer from 'nodemailer'

export default async (req, res) => {
  const { content, emailList, provider, subject } = req.body

  if (!content) return res.status(400).send('Content cannot be null')
  if (!emailList) return res.status(400).send('E-mail list cannot be null')
  if (!subject) return res.status(400).send('Subject cannot be null')

  try {
    const { config, from } = handler(provider)
    const transporter = mailer.createTransport(config)

    await Promise.all(emailList.split(',').map(async email => (
      await transporter.sendMail({
        from,
        to: email.trim(),
        subject,
        html: content
      })
    )))

    return res.status(200).send('E-mail submitted')
  } catch (err) {
    return res.status(500).send(err.message)
  }
}
