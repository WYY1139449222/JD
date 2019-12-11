<template>

    <div class="cartBox">
      <MyHead></MyHead>
      <Mymain></Mymain>
      <Store
        v-for="item in arrayCar"
        :qqq="item"
        :key="item.storeId"
        @change="changeAll"
      >
      </Store>

      <footer>
        <van-submit-bar
          :price="AllMoney"
          button-text="去结算(？件)"
          @submit="onSubmit"
        >
          <van-checkbox v-model="AllSelect">全选</van-checkbox>
        </van-submit-bar>
      </footer>
    </div>

</template>
<script>
// @ is an alias to /src
import MyHead from "../common/header";
import Mymain from "./main";
import Store from "./store";
import { mapState } from "vuex";
export default {
  name: "XXX",
  data() {
    return {
      checked: []
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
    },
    changeAll(val) {
      this.ary.forEach(item => {
        item.joincart.forEach(it => {
          it.isSelect = val;
        });
      });
    }
  },
  computed: {
    ...mapState(["arrayCar"]),
    AllSelect: {
      get() {
        return this.arrayCar.every(item => {
          return item.joincart.every(it => it.isSelect);
        });
      },
      set(val) {
        this.arrayCar.forEach(item => {
          item.joincart.forEach(it => {
            it.isSelect = val;
          });
        });
      }
    },
    AllMoney() {
      return 10000;
    }
  },
  created() {}
};
</script>
<style lang="less" >
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
