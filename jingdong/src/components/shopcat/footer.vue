<template>
  <footer>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </footer>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      checked:[]
    };
  },
  components: {},
  methods: {
    onSubmit() {
      
    }
  },
};
</script>
<style lang="less">
footer {
  z-index: 999;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .van-checkbox {
    margin-left: 3vw;
  }
}
</style>
