<template>
  <div class="mainpage">
    <router-view></router-view>
    <homenav v-show="isshow"></homenav>
  </div>
</template>
<script>

import homenav from '@/components/home/homenav'
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
    };
  },
  methods: {
    
  },
  computed: {
    isshow(){
      return /^\/(home)|(classify)/.test(this.$route.fullPath)
    },
  },
  
  components: {
    homenav
  }
};
</script>
<style lang="less" scoped>
.mainpage{
  padding-bottom:15vw;
}

</style>