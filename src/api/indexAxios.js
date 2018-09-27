import axios from 'axios'
import authenticityToken from './authenticityToken'

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: 'https://jobby.vn/api'
})

axiosClient.interceptors.request.use(
  (config: Object) => {
    config.headers['Authorization'] = authenticityToken();
    return config;
  },
  error => Promise.reject(error)
)

function get(url, data) {
  return axiosClient.get(url, data).then(response => {
    if (response.status == 280) {
      throw { response: response }
    } else {
      return response.data
    }
  });
}

function sendDelete(url, data) {
  return axiosClient.delete(url, data).then(response => {
    if (response.status == 280) {
      throw { response: response }
    } else {
      return response.data
    }
  });
}

function sendPatch(url, data) {
  return axiosClient.patch(url, data).then(response => {
    if (response.status == 280) {
      throw { response: response }
    } else {
      return response.data
    }
  });
}

function sendPut(url, data) {
  return axiosClient.put(url, data).then(response => {
    if (response.status == 280) {
      throw { response: response }
    } else {
      return response.data
    }
  });
}

function sendPost(url, data) {
  return axiosClient.post(url, data).then(response => {
    if (response.status == 280) {
      throw { response: response }
    } else {
      return response.data
    }
  })
}


export function getJobs() {
  return get(`/client/searchs?page=1`)
}
