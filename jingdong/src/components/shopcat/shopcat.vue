<template>
  <div class="cartBox">
    <MyHead></MyHead>
    <Mymain></Mymain>
    <Store v-for="item in ary" :qqq='item' :key="item.storeId" ></Store>
    <footer>
      <van-submit-bar
        :price="3050"
        button-text="去结算(？件)"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
import MyHead from "../common/header";
import Mymain from "./main";
import Store from "./store";
export default {
  name: "XXX",
  data() {
    return {
      checked: [],
      ary: [
        {
          storeId: 1,
          name: "索煌男装旗舰店",
          joincart: [
            {
              id: 1,
              title:
                "suohuang|索皇 潮男刺绣牛仔裤男潮流修身破洞乞丐裤新款弹力时尚百搭休闲牛仔裤男春夏薄款 881凤凰刺绣破洞灰色 31码(两尺四)",
              size: [
                "28码[两尺一]",
                "29码[两尺二]",
                "30码[两尺三]",
                "31码[两尺四]",
                "32码[两尺五]"
              ],
              price: 1000,
              count: 4,
              image:
                "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/76868/20/9244/84491/5d6e8291E7727131c/b7106fbc660857c4.jpg!q80.dpg.webp",
              isSelect: false,
              markDown: "购满258元，可减18元，还差90元",
              color: ["HLS912-MT飞鹰刺绣复古色", "HLS916-MT飞鹰刺绣天蓝色"]
            }
          ]
        }
      ]
    };
  },
  components: {
    MyHead,
    Mymain,
    Store
  },
  methods: {
    onSubmit() {
      console.log();
    }
  },
  computed: {
    moneys() {
      return this;
    }
  },
  created() {
    if(!this.$store.state.islogin){
      
    }
  },
};
</script>
<style lang="less" scope>
.cartBox {
  background: #ccc;
  > div:nth-child(1) {
    height: 12.5vw;
  }
  > div:nth-child(3) {
    text-align: left;
  }
}
footer {
  > div {
    padding-left: 3vw;
    box-sizing: border-box;
  }
}
</style>
