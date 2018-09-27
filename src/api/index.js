import * as url from './baseAPI'
import config from '../constants/config'

export function* tokenRequest() {
  const response = yield fetch(url.TOKEN_REQUEST, {
    method: 'GET',
    headers: {
      'Accept' : 'application/json',
      'Content-type': 'application/json',
      'app-version': `${config.appVersion}`,
      'secret-key': `${config.secretKey}`,
    }
  })
  yield console.log('token', JSON.stringify(response))
  const payload = JSON.parse(response._bodyInit)
  return payload
}
