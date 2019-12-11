<template >
  <div class="shop">
    <van-checkbox v-model="data.isSelect" checked-color="red"></van-checkbox>
    <div style="overflow:hidden;">
      <van-card
        :price="data.price"
        :desc="data.title"
        :title="data.title"
        :thumb="data.image"
        @click="changeIsSelect(data.isSelect)"
      >
        <div slot="tags">
          <van-tag plain type="danger">{{data.color[date]}}</van-tag>
        </div>
        <div slot="footer">
          <van-stepper v-model="count" />
          <van-button size="mini" style="margin-top:2vw;" @click="Delete">删除</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props:['data','date'],
  data() {
    return {
      value: 1,
    };
  },
  created() {
  },
  methods: {
    changeIsSelect(val){
      this.$emit('change',val)
    },
    Delete(){

    }
  },
  components: {},
  computed: {
    count:{
      get(){
        return this.data.length
      },
      set(val){
      }
    }

  },
  
};
</script>
<style lang="less" scope>
.shop {
  display: flex;
  > div:nth-child(1) {
    flex: 1;
    padding-left: 3vw;
    box-sizing: border-box;
  }
  > div:nth-child(2) {
    flex: 8;
    > div {
      padding: 2vw;
      margin-bottom: 3vw;
      text-align: left;
    }
  }
}
</style>
