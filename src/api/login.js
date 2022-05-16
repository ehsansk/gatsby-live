import axios from 'axios';

import config from '../service/config';

let headers = {
    // 'Accept' : 'application/json, text/plain, */*',
    'Content-Type': 'Application/json'
}

let myaxios = axios.create({
    baseURL : config.API_URL,
    headers : headers
})

myaxios.interceptors.request.use(function(config){
    return config;
}, function(error){
    return Promise.reject(error);
});

myaxios.interceptors.request.use(function(response){

    return response;
}, function(error){
    return Promise.reject(error)
});

const api ={
    loginUser(loginDetails){
        return new Promise((resolve,reject)=>{
            myaxios.post(config.LOGIN, loginDetails)
            .then((response)=>{
                resolve(response.data)
            }).catch(e=>{
                reject(e)
            })
        })
    },

    getUserlist(){
        return new Promise((resolve,reject)=>{
            myaxios.get(config.USER_LIST)
            .then((res)=>{
                resolve(res?.data)
            }).catch(e=>{
                reject(e)
            })
        })
    }


}

export default api