import http from './http'

export function login(data){
    return http.post('/user/login',data)
}