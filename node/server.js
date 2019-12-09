const CONFIG=require('./config'),
      session=require('express-session'),
      bodyParser=require('body-parser');
const express=require('express'),
app=express();

app.listen(CONFIG.PORT,()=>{
    console.log(`当前服务起于${CONFIG.PORT}端口`);
    
})