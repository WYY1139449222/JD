<template>
  <main>
    <AreaList></AreaList>
    <div ref="ref" class="redact" @click="redact">
      编辑商品
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
import AreaList from "./Area";
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    AreaList
  },
  methods: {
    redact() {
      console.log(this);
      let str = this.$refs.ref.innerText;
      if (str == "编辑商品") {
        this.$refs.ref.innerText = "完成";
        //点击编辑后，变成‘完成’，同时清空所有复选框，
        //如果前后两次数据没有变化，不改变
        //否则新数据替换旧数据
      } else {
        this.$refs.ref.innerText = "编辑商品";
      }
    }
  }
};
</script>
<style lang="less">
main {
  padding: 2vw 2vw;
  display: flex;
  background: #fff;

  > div:nth-child(1) {
    flex: 8;
  }
  .redact {
    flex: 2.5;
    text-align: right;
  }
}
</style>
