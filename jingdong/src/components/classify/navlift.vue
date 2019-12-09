<template>
  <div class="classify">
    <div class="navLiftBox">
      <van-sidebar v-model="activeKey" class="navLift">
        <van-sidebar-item
          :title="item.title"
          v-for="(item,index) in data.title"
          :key="index"
          :class="{cur:activeKey==index}"
          @click="changelist"
        />
      </van-sidebar>
    </div>
    <particulars :data='data.details'></particulars>
  </div>
</template>
<script>
// @ is an alias to /src
import particulars from "./particulars";
export default {
  name: "XXX",
  data() {
    return {
      activeKey: 0
    };
  },
  props: ["data"],
  components: {
      particulars
  },
  methods: {
    changelist() {
        this.particularsList.sort((a,b)=>{
            return Math.random()-0.5
        })
    }
  },
  computed: {
      particularsList(){
          return this.data.details
      }
  },
};
</script>
<style lang="less" scoped>
.classify{
    width: 100%;
    overflow: hidden;
}
.navLiftBox {
  width: 25vw;
  height: 160vw;
  overflow: scroll;
  float: left;
}
.navLift {
  width: 25vw;
  > li {
    height: 15vw;
  }
}
.cur {
  color: red;
}
</style>