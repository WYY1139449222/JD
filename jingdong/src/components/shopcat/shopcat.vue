<template>
  <div>
    <my-header></my-header>
    <my-main></my-main>
    <footer>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Hder from "./header.vue";
import Min from "./main";
export default {
  name: "XXX",
  data() {
    return {
      checked: []
    };
  },
  components: {
    "my-header": Hder,
    "my-main": Min
  },
  methods: {
    onSubmit() {}
  },
  computed: {}
};
</script>
<style lang="less" scope></style>
