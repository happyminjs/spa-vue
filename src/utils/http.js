// 另外 axios 也有多个异步同时返回的方法
// let request1 = axios.get('url11')
// let request2 = axios.get('url22')
// axios.all([request1, request2]).then(axios.spread(function(res1, res2){
//   // request1 和 request2 都返回success
// }))

// axios 是基于Promise 的 ajax 库，我们一般会设置一些默认属性和拦截器
import axios from 'axios'

function interceptResponseError(instance) {
  let response = instance.interceptors.response.use;
  instance.interceptors.response.use = function(fulfilled, rejected){
    let oldFulfilled = fulfilled;
    let oldRejected = rejected;
    fulfilled = function(...args) {
      oldFulfilled.call(this, ...args);
    }
    rejected = function(...args) {
      // 处理用户接口失败的上报
      oldRejected.call(this, ...args);
    }
    return response.call(this, fulfilled, rejected)
  }
}

class Http {
  constructor() {
    this.timeout = 3000
  }
  setInterceptor(instance) {
    // 添加发送前的拦截器
    instance.interceptors.request.use(config => {
      return config
    })
    // 添加返回后then或者catch之前的拦截器
    instance.interceptors.response.use(res => {
      if (res.status == 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, err => {
      return Promise.reject(err)
    })
  }
  mergeOptions(options) {
    // 添加默认公共参数
    return {
      timeout: this.timeout,
      ...options
    }
  }
  request(options) {
    const instance = axios.create();
    // interceptResponseError(instance)
    const opts = this.mergeOptions(options);
    this.setInterceptor(instance)
    return instance(opts)
  }
  get(url, config = {}) {
    return this.request({
      method: 'get',
      url: url,
      ...config
    })
  }
  post(url, data) {
    return this.request({
        method: 'post',
        url,
        data
    })
  }
}
export default new Http;