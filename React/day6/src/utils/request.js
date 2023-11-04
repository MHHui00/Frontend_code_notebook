import axios from 'axios'
import { getTokenKey, removeItem } from './token'
import router from '@/router';


//review 封裝axios： 根域名，請求/響應攔截
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,
})

//請求攔截，發送之前做處理
request.interceptors.request.use((config)=> {
    //review 拿到本地token；附加token到請求
    const token = getTokenKey();
    if (token){
      config.headers.Authorization = `Bearer ${token}`
    }
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

    //review 7.5.token失效處理 在攔截處左判斷。 失效時後端統一返回401
    console.log(error);
    if(error.response.status === 401){
      removeItem();
      router.navigate('/login');
      //這裡會卡住不會直接跳轉
      //review 7.5.2 刷新一下來解決
      window.location.reload();
    }
    return Promise.reject(error)
})

export { request }