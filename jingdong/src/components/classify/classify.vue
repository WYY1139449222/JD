<template>
  <div class="classify_Page">
    <my-Header>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </my-Header>
    <navlift :data="classifyList"></navlift>
  </div>
</template>
<script>
// @ is an alias to /src
import navlift from "../common/navlift";
import myheader from "../common/header";

import { getClassify } from "@/api/index.js";
export default {
  name: "XXX",
  data() {
    return {
      classifyList: [],
      value: ""
    };
  },
  components: {
    navlift,
    "my-Header": myheader
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
