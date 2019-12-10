const express = require('express'),
    route = express.Router();
const { success } = require('../utils/tools');

route.get('/all',(req,res)=>{
    let data=req.$readMain;
    data=data.map(item=>{      
      return {
        swiper:item.swiper,
        nav:item.nav
      }
       
    })
   if(data.length>0){
    res.send(success(true, {
        data: data
    }));
    return
   }
   res.send(success(false, {
    codeText: 'no matching data was found!'
}));
  
})


module.exports = route;