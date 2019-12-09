<template>
  <div class="particularrsBox">
    <header>
      <div class="headLift">热门分类</div>
      <div class="headright">
        <van-icon name="chart-trending-o" color="red" />
        <span>排行榜</span>
        <van-icon name="arrow" color="#aaa" />
      </div>
    </header>
    <van-row type="float" justify="space-around" class="particularrslist">
      <van-col span="6" v-for="(item,index) in data" :key='index' class="list">
          <img :src="item.img" alt="">
          <p>{{item.til}}</p>
      </van-col>
     
    </van-row>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  props:['data'],
  components: {}
};
</script>
<style lang="less">
.particularrsBox {
  float: right;
  width: 75vw;
  height: 150vw;
    overflow-y: scroll;
    overflow-x: hidden;
  > header {
    margin: 3vw 0;
    height: 10vw;
    line-height: 10vw;
    .headLift {
      float: left;
    }
    .headright {
      float: right;
      .van-icon {
        vertical-align: text-bottom;
      }
      span {
        margin: 0 1vw;
        font-size: 3vw;
        color: #aaa;
      }
    }
  }
  .particularrslist{
        width: 75vw;
        padding: 0 3vw;
        .list{
            width: 23vw;
            padding: 1.5vw;
            >img{
                width: 20vw;
                height: 20vw;
            }
        }
    }
   
}
</style>