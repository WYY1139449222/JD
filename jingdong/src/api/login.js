import http from './http'

export function login(data){
    return http.post('/user/login',data).then(data=>{
        if(data.code==0){
            alert('成功')
        }else if(data.code==0){
            localStorage.setItem('power',data.power)
        }
        return data;
    })
}