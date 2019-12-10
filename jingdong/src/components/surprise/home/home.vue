<template>
  <div class="main">
    <my-Header>惊喜</my-Header>
    <header-nav></header-nav>
  </div>
</template>
<script>
// @ is an alias to /src
import homeheader from "../../common/header";
import headernav from "./homeheader/header-nav";

export default {
  name: "XXX",

  data() {
    return {};
  },
  components: {
    "my-Header": homeheader,
    "header-nav": headernav
  }
};
</script>
<style lang="less">
.main {
 height: 80vw;
}
</style>