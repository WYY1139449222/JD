const express = require('express'),
    route = express.Router();
const { success } = require('../utils/tools');
route.get("/all", (req, res) => {
    let data = req.$classIfy;
    data = data.map(item => {
        return {
            title: item.title,
            details: item.details
        }
    });
    if (data.length > 0) {
        res.send(success(true, {
            data: data
        }))
        return
    }
    res.send(success(false, {
        codeText: 'no matching data was found!'
    }));
})
module.exports = route;