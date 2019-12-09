<template>
  <div>
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Hder from "./header.vue";
import Min from "./main";
import Fter from "./footer";
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    "my-header": Hder,
    "my-main": Min,
    "my-footer": Fter
  },
  methods: {},
  computed: {}
};
</script>
<style lang="less" scope></style>
