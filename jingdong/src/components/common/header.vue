<template>
  <div>
    <header class="classifyhead">
      <van-icon name="arrow-left" @click="classback" class="headleft"/>
      <div class="slotBox"><slot></slot></div>
      <van-icon name="ellipsis" size="20px"  class="headright"/>
    </header>
    <section></section>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
   methods: {
    classback() {
      this.$router.back();
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
 .classifyhead {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      box-sizing: border-box;
      z-index: 999;
      padding: 1vw 3vw;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      justify-content: space-between;
      height: 12vw;
    //   .headleft{
    //      width: 5vw;
    //   }
    //   .headright{
    //      width: 5vw;
    //   }
      .slotBox{
         flex: 1;
      }
    }
</style>