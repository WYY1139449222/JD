module.exports={
    publicPath:'/',
    lintOnSave:false,
    devServer:{
        proxy:'http://localhost:3000'  //转接3000地址
    }
}