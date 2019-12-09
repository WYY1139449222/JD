<template>
  <div class="header-nav">
    <div class="header">
      <div>
        <van-icon name="bag" />
      </div>
      <div>
        <van-search placeholder="大家都在搜地毯" v-model="value" background="none" />
      </div>
      <div>
        <van-icon name="bag" />
      </div>
    </div>
    <div class="nav">
      <div>精选</div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div>
        <van-icon name="arrow-down" />
      </div>
    </div>
    <header-banner></header-banner>
  </div>
</template>
<script>
// @ is an alias to /src
import headerbanner from "./banner";
export default {
  name: "header-nav",
  data() {
    return {
      value: ""
    };
  },
  components: {
    "header-banner": headerbanner
  }
};
</script>
<style lang="less" scoped>
.header-nav {
  padding: 5vw;
  // position: relative;
  // padding: 0;
  background: url(http://img13.360buyimg.com/jdphoto/jfs/t1/92261/22/3369/194260/5ddf6dbceffb2bdcd/34b7bfd4cb2db340.png!q70.webp);
  .header {
    display: flex;
    justify-content: space-between;
  }
  .nav {
    justify-content: space-between;
    ul > li {
      float: left;
    }
    display: flex;
  }
}
</style>