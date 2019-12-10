<template>
  <div class="classify_Page">
      <header class="classify_head">
          <van-icon name="arrow-left" @click="classback"/>
          <van-search  placeholder="请输入搜索关键词" v-model="value" />
          <van-icon name="ellipsis" size='20px'/>
      </header>
      <section>

      </section>
    <navlift :data='classifyList' ></navlift>
  </div>
</template>
<script>
// @ is an alias to /src
import navlift from "./navlift";

import { getClassify } from "@/api/index.js";
export default {
  name: "XXX",
  data() {
    return {
        classifyList:[],
        value:''
    };
  },
  components: {
    navlift

  },
  created() {
    getClassify().then(data => {
      this.classifyList = data;
    });
  },
  methods: {
      classback(){
          this.$router.back()
      }
  },
};
</script>
<style lang="less" scoped>
.classify_Page {
  width: 100%;
  overflow: hidden;
  padding-top:12vw;
}
.classify_head{
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
    padding:1vw 5vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 12vw;
    .van-search{
        width: 75vw;
        margin:0 3vw;
        height: 10vw;
        >div{
            border-radius: 5vw;
        }
    }
}
</style>