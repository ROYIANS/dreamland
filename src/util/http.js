// 本文件不允许私自修改，环保除引用第三方接口外一律使用post请求方式，接口定义请参考接口规范书写，这里只做全局http请求状态拦截，其他用户状态一律放行，页面内部做判断自行处理
const axios = require('axios')

axios.defaults.timeout = 300000
axios.defaults.baseURL = '/'
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 请求拦截
axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT,PATCH'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Access-Control-Allow-Headers'] = 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Origin,X-Requested-With,Content-Type,Content-Range,Range,tokenid,appguid'

axios.interceptors.request.use(function(config) {
  return config
}, function(error) {
  return Promise.reject(error.response)
})

axios.interceptors.response.use(function(response) {
  if (response.status === 200) {
    switch (response.data.code) {
      case (401):
        console.log('Unauthorized,表示用户没有权限(令牌、用户名、密码错误)')
        Router.push('/Login')
        break
      case (400):
        console.log('Invalid Request,用户发出的请求有错误')
        break
      case (403):
        console.log('Forbidden, 表示用户得到授权(与 401 错误相对)，但是访问是被禁止的')
        break
      case (404):
        console.log('Not Found,用户发出的请求针对的是不存在的记录，服务器没有进行操作')
        break
      case (406):
        console.log('Not Acceptable， 用户请求的格式不可得(比如用户请求 JSON格式，但是只有XMLs格式)。')
        break
      case (422):
        console.log('Unprocesable entitz， 当创建一个对象时，发生一个验证错误')
        break
      case (500):
        console.log('Internal Server Error， 服务器发生错误，用户将无法判断发出的请求是否成功。')
        break
      default:
        break
    }
  }
  return response
}, function(error) {
  // 对响应错误做处理
  return {
    data: {
      code: 0,
      errorInfo: error
    },
    code: 0
  }
})

module.exports = {
  get: (url, params, contentType) => {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.get['Content-Type'] = contentType || 'application/json'
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  post: (url, data = {}, contentType) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.post['Content-Type'] = contentType || 'application/json'
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  put: (url, data = {}, contentType) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.post['Content-Type'] = contentType || 'application/json'
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  del: (url, params, contentType, dataType) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.post['Content-Type'] =
      contentType || 'application/json'
    const paramsData = dataType ? { params: params } : { data: params }
    return new Promise((resolve, reject) => {
      axios
        .delete(url, paramsData)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  patch: (url, data = {}, contentType) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.post['Content-Type'] = contentType || 'application/json'
    return new Promise((resolve, reject) => {
      axios
        .patch(url, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
