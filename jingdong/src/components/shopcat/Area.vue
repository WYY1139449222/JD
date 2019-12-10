<template>
  <div class="Area">
    <div class="areaList">
      <van-icon name="location-o" />&nbsp;
      <span @click="showOption" v-text="aList"></span>
      <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
        <van-area
          @cancel="cancel"
          @confirm="confirm"
          :area-list='AreaList'
          :columns-placeholder="['请选择', '请选择', '请选择']"
          title="选择区域"
        />
      </van-popup>
    </div>
    <div ref="ref" class="redact" @click="reset">
      编辑商品
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AreaList from "./AreaList.js";
export default {
  name: "XXX",
  data() {
    return {
      aList: "请选择区域",
      show: false,
      AreaList
    };
  },
  components: {
  },
  methods: {
    showOption() {
      this.show = !this.show;
    },
    cancel() {
      this.show = !this.show;
    },
    confirm(val) {
      this.aList =
        `${val[0].name}-${val[1].name}-${val[2].name}` || "请选择区域";
      this.show = !this.show;
    },
    reset() {
      let str = this.$refs.ref.innerText;
      this.$refs.ref.innerText = str == "编辑商品" ? "完成" : "编辑商品";
    }
  }
};
</script>
<style lang="less">
.Area {
  background: #fff;
  height: 11.8vw;
  line-height: 11.8vw;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  box-sizing: border-box;
  .areaList {
    flex: 7.5;
    color: #999;
    text-align: left;
    padding-left: 5vw;
  }
  .redact {
    flex: 2.5;
  }
}
</style>
