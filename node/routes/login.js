const express = require('express'),
    route = express.Router();
const { success } = require('../utils/tools')
const {
    writeFile
} = require('../utils/promiseFS');
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
            username: req.session.username,
            car:item['car'],
            address:item["address"]
        }))
        return;
    }
        res.send(success(false, {
            codeText: 'user name password mismatch!'
        }));
   
})
//修改用户信息
    route.post('/update', (req, res) => {
        req.body = req.body || {};
        // console.log(req.body.car);
        
        let updateUser = req.$readUser,
           id = req.body.id,
            flag = false;
        // delete req.body.id;
        // console.log(req.body);
        updateUser.forEach((item,index)=>{
            if (parseFloat(item.id) === parseFloat(id)) {
                flag = true;
                updateUser[index].car.push(JSON.parse(req.body.car))
            }
        });
        // updateUser = updateUser.map(item => {
        //     if (parseFloat(item.id) === parseFloat(id)) {
        //         flag = true;
        //         return {
        //             ...item,
        //             ...req.body
        //         };
        //     }
        //     return item;
        // });
        // console.log();
        
        if (!flag) {
            res.send(success(false));
            return;
        }
        // console.log(JSON.parse(JSON.stringify(updateUser[0])).car);
        //  req.$readUser[0].car.push()
        writeFile('./json/user.json',updateUser).then(() => {
            res.send(success(true));
        }).catch(() => {
            res.send(success(false));
        });
    });

//注册
route.post('/add', (req, res) => {
    let userData = req.$readUser,
        passData = null;
    passData = Object.assign({
        id: userData.length === 0 ? 1 : (parseFloat(userData[userData.length - 1]["id"]) + 1),
        name: '',
        username: '',
        password: ''
    }, (req.body || {}));
    userData.push(passData);
    writeFile('./json/user.json', userData).then(() => {
        res.send(success(true))
    }).catch(() => {
        res.send(success(false))
    })
})
//退出登陆
route.get('/singout',(req,res)=>{
    req.session.userID=null;
    req.session.username=null;
    res.send(success(true))
});
//检验登陆
route.get('/login',(req,res)=>{
    const userID = req.session.userID;
	// console.log('userID',req.session)
	if (userID) {
		res.send(success(true));
		return;
	}
	res.send(success(false, {
		codeText: 'current user is not logged in!'
	}));
}
)

module.exports = route;