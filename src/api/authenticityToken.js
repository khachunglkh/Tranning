import {store} from '../app'

const authenticityToken = () => {
  const _auth_cookie = store.getState().user.token
  return `Bearer ${_auth_cookie}`
};

export default authenticityToken
