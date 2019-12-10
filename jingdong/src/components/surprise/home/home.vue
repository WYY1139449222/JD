<template>
    <div class="main">
      <home-header></home-header>
      <header-nav></header-nav>
    </div>
</template>
<script>
// @ is an alias to /src
import homeheader from './homeheader/header'
import headernav from './homeheader/header-nav'

export default {
    name: 'XXX',

    data() {
        return {
        
        }
    },
    components: {
    "home-header": homeheader,
    "header-nav":headernav
    }
}
</script>
<style lang="less">
    .main{
      // padding: 5vw;
    }

</style>