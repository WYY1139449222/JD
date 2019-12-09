***USER用户管理***
----
用户登录
URL:/user/login
METHOD:POST
PARAMS:username=xxx&password=xxx
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
    username:'用户名称'
}
//加入购物车
URL:/user/update
METHOD:POST
PARAMS:id=xxx&cat=[{
    id:xxx,
    title:xxx,
    desc:xxx,
    focus:xxx,
    money:xxx,
    src:xxx,
    evaluate:xxx,
    size:xxx,
    color:xxx,
    markDown:xxx
}]
用户注册
URL:/user/add
METHOD:POST
PARAMS:username=xxx&password=xxx
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
    username:'用户名称'
}
退出登陆
URL:/user/singout
METHOD:GET
PARAMS:NULL
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
}
检测是否登陆
URL:/user/login
METHOD:GET
PARAMS:null
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
    username:'用户名称'
}
-------
请求首页信息
URL:/mian/all
METHOD:GET
PARAMS:NULL
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
    DATA:[{swiper:[], nav:[]}]
}
//商品列表
URL:/mian/shopList
METHOD:GET
PARAMS:NULL
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
}
//分页信息

URL:/classify/all
METHOD:GET
PARAMS:NULL
result:{
    code:0 //0成功 1 失败
    codeText:'OK'
    data:[{title:[],details:[]}]
}