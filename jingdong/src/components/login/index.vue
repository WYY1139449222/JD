<template>
  <div>
    <nologin v-if="!islogin"></nologin>
    <singol v-else></singol>
  </div>
</template>
<script>
// @ is an alias to /src
import nologin from './nologin'
import singol from './singol/index'
import {mapState} from 'vuex'
export default {
  
  data() {
    return {
      username: "",
      psw: "",
      isPsw: "password"
    };
  },
  components:{
    nologin,
    singol
  },
  computed: {
   ...mapState(['islogin'])
  },
}
</script>
<style lang="less" scoped>

</style>