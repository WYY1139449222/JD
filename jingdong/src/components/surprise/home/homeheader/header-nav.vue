<template>
  <div class="header-nav">
    <div class="header">
      <div>
        <img src="//img13.360buyimg.com/mcoss/jfs/t1/100908/14/3211/2621/5ddcd503e222cd602/41f289407630e943.png!q70.webp" alt="">
      </div>
      <div>
        <van-search placeholder="大家都在搜地毯" v-model="value" background="none" />
      </div>
      <div>
       <img src="//img14.360buyimg.com/mcoss/jfs/t1/97152/30/4655/4624/5de8e5cfe4a857f59/71df23334b43fcf9.gif" alt="">
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

import headerbanner from "../../../common/banner";
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
  // position:fixed;
  // top: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 10vw 5vw;
  height: 70vw;
  // position: relative;
  // padding: 0;
  background: url(http://img13.360buyimg.com/jdphoto/jfs/t1/92261/22/3369/194260/5ddf6dbceffb2bdcd/34b7bfd4cb2db340.png!q70.webp);
  .header {
    padding: 5vw 0vw 0vw 0vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
      >img{
        width: 10vw;
        height: 10vw;
      }
      // line-height: 15vw;
    }
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