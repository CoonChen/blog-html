import axios from 'axios'
import { Message } from 'element-ui'
import router from './router'

//创建axios 实例
const instance = axios.create({
  withCredentials: true,
  //请求超时时间
  timeout: 50000
});

// response拦截器
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        router.push({name:"login"});
        break;
      //已登录但没有权限
      case 403:
        Message({
          message: "Sorry,you do not have permission for access this resource",
          type: 'error',
          duration: 3 * 1000
        });
        break;
      //没有找到页面
      case 404:
        Message({
          message: "Sorry,the resource is not found",
          type: 'error',
          duration: 3 * 1000
        });
        break;
      //后台报错
      case 500:
        Message({
          message: error.response.data.message,
          type: 'error',
          duration: 3 * 1000
        });
        break;
      case 400:
        Message({
          message: error.response.data.message,
          type: 'error',
          duration: 3 * 1000
        });
        break;
    }
  }
  return Promise.reject(error)
});

export default instance;
