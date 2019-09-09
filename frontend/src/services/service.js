import axios from 'axios' // JS library used to make web requests
import getHeaders from '@/utils/http'

// https://www.gotknowhow.com/articles/how-to-get-the-base-url-with-javascript
function getBaseURL (port) {
  let url = location.href // entire url including querystring - also: window.location.href;
  let baseURL = url.substring(0, url.indexOf('/', 14))

  if (baseURL.indexOf('localhost') !== -1) {
    // Base Url for localhost
    return baseURL.substr(0, baseURL.indexOf('localhost')) + 'localhost:' + port + '/'
  } else {
    // Root Url for domain name
    return baseURL + ':' + port + '/'
  }
}

export default class Service {
  baseUrl = getBaseURL(3000)

  static config () {
    return {
      headers: getHeaders()
    }
  }

  static fileConfig () {
    let config = Service.config()
    config.headers['Content-Type'] = 'multipart/form-data'
    return config
  }

  static resolveResponse (response, callback) {
    callback(response.data)
  }

  static resolveError (response) {
    alert(response)
  }

  static allPromises (promises, callback) {
    Promise.all(promises).then(callback)
  }

  getRequest (endpoint, callback) {
    return axios.get(this.baseUrl + endpoint, Service.config())
      .then(function (response) {
        Service.resolveResponse(response, callback)
      })
      .catch(Service.resolveError)
  }

  putRequest (endpoint, object, callback) {
    return axios.put(this.baseUrl + endpoint, object, Service.config())
      .then(function (response) {
        Service.resolveResponse(response, callback)
      })
      .catch(Service.resolveError)
  }

  postRequest (endpoint, object, callback) {
    return axios.post(this.baseUrl + endpoint, object, Service.config())
      .then(function (response) {
        Service.resolveResponse(response, callback)
      })
      .catch(Service.resolveError)
  }

  deleteRequest (endpoint, callback) {
    return axios.delete(this.baseUrl + endpoint, Service.config())
      .then(function (response) {
        Service.resolveResponse(response, callback)
      })
      .catch(Service.resolveError)
  }

  postFileRequest (endpoint, body, callback) {
    return axios.post(this.baseUrl + endpoint, body, Service.fileConfig())
      .then(function (response) {
        callback(response.data)
      })
      .catch(Service.resolveError)
  }

  putFileRequest (endpoint, body, callback) {
    return axios.post(this.baseUrl + endpoint, body, Service.fileConfig())
      .then(function (response) {
        callback(response.data)
      })
      .catch(Service.resolveError)
  }
}
