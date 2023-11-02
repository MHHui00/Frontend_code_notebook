import axios from 'axios'

//review 封裝axios： 根域名，請求/響應攔截
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,
})

//請求攔截，發送之前做處理
request.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器，接收之後做處理
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export { request }