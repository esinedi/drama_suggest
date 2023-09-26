import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';


const service = axios.create({
  timeout:5000
});

// Request interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // do something
    // console.log('config',config);
    
    return config;
   },
   (error: any) => {
    Promise.reject(error);
   }
);

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // do something
    // console.log('response',response);
    // return
    if(response.status !== 200){
      alert('服务器忙,请稍后再试~')
      return response
    }

    return response
   },
   (error: any) => {
    // do something
    return Promise.reject(error);
   }
);

export default service;