/**
 * Send method
 * @param content {HTMLElement} html that will be sended to client
 * @param recipients {String} Recipients that will receive e-mail content, e.g.: foo@bar.com,foo@bar.com
 */

import dotenv from 'dotenv'
import mailer from 'nodemailer'

if (process.env.NODE_ENV === 'development') dotenv.config()

const { AUTH_FROM, AUTH_HOST, AUTH_PASS, AUTH_PORT, AUTH_SECURE, AUTH_SERVICE, AUTH_USER } = process.env

const send = async (req, res) => {
  const { content, recipients } = req.body

  if (!content) return res.status(500).send('Content cannot be null')
  if (!recipients) return res.status(500).send('Recipients cannot be null')

  const auth = {
    pass: AUTH_PASS,
    user: AUTH_USER
  }
  const from = AUTH_FROM
  const host = AUTH_HOST
  const port = AUTH_PORT
  const secure = parseInt(AUTH_SECURE)
  const service = AUTH_SERVICE

  const tls = {
    ciphers: 'SSLv3'
  }

  const paramsTransporter = {
    auth,
    host,
    port,
    secure,
    service,
    tls
  }

  try {
    const transporter = mailer.createTransport(paramsTransporter)

    const info = await transporter.sendMail({
      from,
      to: recipients,
      subject: 'Teste de template',
      html: content
    })

    return res.status(200).send(info)
  } catch (err) {
    return res.status(500).send(err)
  }
}

export default {
  send
}
