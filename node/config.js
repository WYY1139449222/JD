module.exports = {
    //端口号
    PORT: 3000,
    CROS: {
        ALLOW_ORIGIN: 'http://localhost:8080',
        ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
        HEADERS: 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With',
        CREDENTIALS: true
    },
    //=》SESSION存储相关信息
    SESSION: {
        secret: 'myJd',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30
        }
    }
}