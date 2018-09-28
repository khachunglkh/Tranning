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
export function* loginRequest(user) {

  const response = yield fetch(url.LOGIN_REQUEST, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'app-version': `${config.appVersion}`,
      'secet-key': `${config.secretKey}`,
    },
    body: JSON.stringify({
      email: `${user.email}`,
      password: `${user.password}`,
    }),
  })
  const payload = JSON.parse(response._bodyInit)

  return payload
}
