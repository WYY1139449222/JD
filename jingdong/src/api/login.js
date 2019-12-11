import http from './http'

export function login(data){
    return http.post('/user/login',data)
}
export function singout(){
    return http.get('/user/singout')
}