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
      <van-col span="6" v-for="(item,index) in data" :key="index" class="list" @click="getUpdate">
        <img :src="item.img" alt />
        <p>{{item.til}}</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
// @ is an alias to /src
import { getupdata } from "@/api/index.js";
export default {
  name: "XXX",
  data() {
    return {};
  },
  props: ["data"],
  components: {},
  methods: {
    getUpdate() {
      let o = {
        id: "2",
        title: "一号店",
        desc:
          "suohuang|索皇 潮男刺绣牛仔裤男潮流修身破洞乞丐裤新款弹力时尚百搭休闲牛仔裤男春夏薄款 881凤凰刺绣破洞灰色 31码(两尺四)",
        focus:
          "关注店铺有礼，收藏加购物车优先发货，全店满258减18元、满388减38元~2019秋装新款陆续上新中，欢迎进店选购！详情点击此处进店联系在线客服 ",
        money: "16800",
        evaluate:
          "这个必须好评，我还怕收到以后和图片不一样呢反正就是好，很好，非常好",
        size: [
          "28码[两尺一]",
          "29码[两尺二]",
          "30码[两尺三]",
          "31码[两尺四]",
          "32码[两尺五]"
        ],
        color: ["HLS912-MT飞鹰刺绣复古色", "HLS916-MT飞鹰刺绣天蓝色"],
        markDown: "购满258元，可减18元，还差90元"
      };
      let obj = {
        id: 1,
        car: JSON.stringify(o)
      };
      getupdata(obj).then(data => {
        console.log(data);
      });
    }
  }
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
  .particularrslist {
    width: 75vw;
    padding: 0 3vw;
    .list {
      width: 23vw;
      padding: 1.5vw;
      > img {
        width: 20vw;
        height: 20vw;
      }
    }
  }
}
</style>