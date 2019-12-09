const CONFIG = require('./config'),
    session = require('express-session'),
    bodyParser = require('body-parser');
const express = require('express'),
    app = express();

app.listen(CONFIG.PORT, () => {
    console.log(`当前服务起于${CONFIG.PORT}端口`);

});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
    extended: false
}));
//读文件
const { readFile } = require('./utils/promiseFS');
app.use(async (req, res, next) => {
    req.$readUser =JSON.parse(await readFile('./json/user.json'));
    // console.log(req.$readUser);
    
    next();
})

/* route */
app.use('/user', require('./routes/login'))
// app.use('/main', require('./routes/main'))