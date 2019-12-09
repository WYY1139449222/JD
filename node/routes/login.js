const express = require('express'),
    route = express.Router();
const { success } = require('../utils/tools')
const {
    writeFile
} = require('../utils/promiseFS');
//    const item=//读取的文件  中查找item 
//       //find(item=>{
//           return item.username===username && item.password===password;
//       })
//if(item)存在 则在req.session中种植userID 
//最后send success true成功并且把权限返回出去
//否则 send success false 并返回code=0
route.post('/login', (req, res) => {
    let {
        username = '',
        password = ''
    } = req.body || {};
    const item = req.$readUser.find(item => {
        return item.username === username && item.password === password;
    })
    if (item) {
        req.session.userID = parseFloat(item.id);
        req.session.username = item.username;
        res.send(success(true, {
            username:req.session.username
        }))

    }else{
        res.send(success(false, {
            codeText: 'user name password mismatch!'
        }));
    }
    

})
module.exports = route;