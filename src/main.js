import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router'
import './css/global.css'

import axios from 'axios';

window.axios = axios;

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    const token = localStorage.getItem('Ragaccesstoken');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }else{
        router.push({name: "Login"});
    }
    return config;
  }, function (error) {
    // Do something with request error

 error
  
});



axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if(error){
    localStorage.removeItem("Ragaccesstoken");
    localStorage.removeItem("Ragrefreshtoken");
    localStorage.removeItem("RagloggedIn");
    router.push({name: "Login"});
  }
  // return Promise.reject(error);
});

createApp(Index).use(router).mount('#index')
