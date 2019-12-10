import http from './http'

export function getClassify(){
    return http.get('/classify/all').then(data=>{
        if(data.code!=0){
            alert('系统繁忙')
        }
        return data.data[0]
    })
}
export function getupdata(option){
    console.log(option);
    
    return http.post('/user/update',option).then(data=>{
        if(data.code==0){
            alert('成功')
        }
    })

    
}