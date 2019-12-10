const CONFIG = require('./config'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    qs = require('qs');
const express = require('express'),
    app = express();

app.listen(CONFIG.PORT, () => {
    console.log(`当前服务起于${CONFIG.PORT}端口`);

});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use((req,res,next)=>{
//     let str='';
//     req.on('data',(chunk)=>{
//         str+=chunk;
//     })
//     req.on('end',()=>{
//         try {
//             obj = JSON.parse(str)
//         } catch (error) {
//             obj = qs.parse(str)
//         }
//         req.body=obj;
//         next();
//     })
// })
//读文件
const { readFile } = require('./utils/promiseFS');
app.use(async (req, res, next) => {
    req.$readUser =JSON.parse(await readFile('./json/user.json'));
    // console.log(req.$readUser);
    req.$readMain=JSON.parse(await readFile('./json/mainHeader.json'));
    req.$classIfy=JSON.parse(await readFile('./json/classify.json'));
    next();
})

/* route */
app.use('/user', require('./routes/login'))
app.use('/main', require('./routes/main'))
app.use('/classify', require('./routes/classify'))