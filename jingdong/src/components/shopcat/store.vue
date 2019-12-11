<template>
  <div class="StoreName">
    <span>
      <van-checkbox v-model="allSelect" checked-color="red"></van-checkbox>
      <van-icon name="shop-o" />
      <p>{{ qqq.name }}</p>
      <van-icon name="arrow" />
    </span>
    <Shopping
      v-for="(item, index) in qqq.joincart"
      :key="item.id * 1"
      :data="item"
      :date="index"
      @change="changeFn"
    ></Shopping>
  </div>
</template>
<script>
// @ is an alias to /src
import Shopping from "./shopping";
export default {
  name: "XXX",
  props: ["qqq", "www"],
  data() {
    return {};
  },
  components: {
    Shopping
  },
  methods: {
    changeFn(val) {
      this.$emit("change", val);
    }
  },
  created() {
  },
  computed: {
    allSelect: {
      get() {
        return this.qqq.joincart.every(it => it.isSelect);
      },
      set(val) {
        this.qqq.joincart.forEach(item => {
          item.isSelect = val;
        });
      }
    }
  }

};
</script>
<style lang="less" scope>
.StoreName {
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  > span {
    display: flex;
    font-size: 20px;
    height: 10vw;
    line-height: 10vw;
    padding: 0 5vw;
    > div {
      margin: 0 2vw;
    }
    > i {
      display: inline-block;
      font-size: 22px;
      padding: 2vw 0 0 0;
    }
  }
}

</style>
