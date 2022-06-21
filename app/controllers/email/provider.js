const {
  AUTH_FROM,
  AUTH_SECURE,
  AUTH_HOST_GMAIL,
  AUTH_PASS_GMAIL,
  AUTH_PORT_GMAIL,
  AUTH_SERVICE_GMAIL,
  AUTH_USER_GMAIL,
  AUTH_HOST_OUTLOOK,
  AUTH_PASS_OUTLOOK,
  AUTH_PORT_OUTLOOK,
  AUTH_SERVICE_OUTLOOK,
  AUTH_USER_OUTLOOK,
  AUTH_HOST_YAHOO,
  AUTH_PASS_YAHOO,
  AUTH_PORT_YAHOO,
  AUTH_SERVICE_YAHOO,
  AUTH_USER_YAHOO
} = process.env

const availableProviders = [
  'gmail',
  'outlook',
  'yahoo'
]

export const handleProvider = provider => {
  if (!provider) throw new Error('Provider not specified')
  provider = provider.toLowerCase()

  if (!availableProviders.includes(provider)) throw Error(`Provider not found. Available providers: ${availableProviders}`)

  const config = {
    auth: {
      pass: '',
      user: ''
    },
    host: '',
    port: '',
    secure: AUTH_SECURE,
    service: '',
    tls: {
      ciphers: 'SSLv3'
    }
  }

  const from = AUTH_FROM

  if (provider === 'gmail') {
    config.auth.pass = AUTH_PASS_GMAIL
    config.auth.user = AUTH_USER_GMAIL
    config.host = AUTH_HOST_GMAIL
    config.port = AUTH_PORT_GMAIL
    config.service = AUTH_SERVICE_GMAIL
  }

  if (provider === 'outlook') {
    config.auth.pass = AUTH_PASS_OUTLOOK
    config.auth.user = AUTH_USER_OUTLOOK
    config.host = AUTH_HOST_OUTLOOK
    config.port = AUTH_PORT_OUTLOOK
    config.service = AUTH_SERVICE_OUTLOOK
  }

  if (provider === 'yahoo') {
    config.auth.pass = AUTH_PASS_YAHOO
    config.auth.user = AUTH_USER_YAHOO
    config.host = AUTH_HOST_YAHOO
    config.port = AUTH_PORT_YAHOO
    config.service = AUTH_SERVICE_YAHOO
  }

  return {
    config,
    from
  }
}
