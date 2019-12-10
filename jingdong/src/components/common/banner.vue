<template>
  <div class="swiper">
    <van-swipe indicator-color="white">
      <van-swipe-item>
          <img src="//img12.360buyimg.com/mcoss/s710x206_jfs/t1/102406/30/4972/88341/5dea3efce275ad03a/54cd4b7a0fb2d824.jpg!q70.dpg.webp" alt="">
      </van-swipe-item>
      <van-swipe-item>
            <img src="//img30.360buyimg.com/mcoss/s710x206_jfs/t1/89600/18/5020/95950/5dea3eb5e2ba31582/0a9fba1c82d0fd99.jpg!q70.dpg.webp" alt="">
      </van-swipe-item>
      <van-swipe-item>
            <img src=" //img12.360buyimg.com/mcoss/s710x206_jfs/t1/102406/30/4972/88341/5dea3efce275ad03a/54cd4b7a0fb2d824.jpg!q70.dpg.webp" alt="">
      </van-swipe-item>
      <van-swipe-item>
            <img src="//img12.360buyimg.com/mcoss/s710x206_jfs/t1/102406/30/4972/88341/5dea3efce275ad03a/54cd4b7a0fb2d824.jpg!q70.dpg.webp" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  data() {
    return {
        current:0
    };
  },
   methods: {
    onChange(index) {
      this.current = index;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped> 
.swiper{
    height: 25vw;
    text-align: center;
    width: 100%;
    padding-top:5vw;
       margin: auto;
    img{
        width: 100%;
        height: 35vw;
          border-radius: 10px;
        
    }
    // position: absolute;
    // bottom: 0px;
    // left: 0px;
}
</style>