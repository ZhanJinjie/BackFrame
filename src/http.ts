import axios from 'axios'

export const baseUrl = 'https://some-domain.com/api/' 

// 创建axios实例
export const Axios = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});