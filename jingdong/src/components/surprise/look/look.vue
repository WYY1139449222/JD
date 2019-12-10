<template>
  <div class="classify_Page">
    <header class="classifyhead">
      <van-icon name="arrow-left" @click="classback" />
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <van-icon name="ellipsis" size="20px" />
    </header>
    <navlift :data="classifyList"></navlift>
  </div>
</template>
<script>
// @ is an alias to /src
import navlift from "../../common/navlift";
import { getClassify } from "@/api/index.js";
// import particulars from '@/compnents/classify/particulars'
export default {
  name: "XXX",
  data() {
    return {
      classifyList: [],
      value: ""
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
    classback() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less">
</style>