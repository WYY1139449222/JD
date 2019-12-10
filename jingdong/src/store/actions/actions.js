import {login} from '@/api/login.js'
import router from '@/router'

export function changeIslogin({commit},option){
    login(option).then(data=>{
        if(data.code==0){
            commit('changeIslogin',option)
            router.back()
        }else{
            alert('账号密码错误')
        }
        return data
    })
    
}