<template>
  <div>
    <header class="classifyhead">
      <van-icon name="arrow-left" @click="classback" class="headleft" />
      <div class="slotBox">
        <slot></slot>
      </div>
      <van-icon name="ellipsis" size="20px" class="headright" @touchend="isNav" />
    </header>
    <section class="outnav" v-show="isShow">
      <ul>
        <li>
          <router-link to="/home">
            <van-icon size="5vw" name="wap-home-o" />
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/classify">
            <van-icon size="5vw" name="search" />
            <span>分类搜索</span>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcat">
            <van-icon size="5vw" name="shopping-cart-o" />
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <van-icon size="5vw" name="manager-o" />
            <span class="lastspan">我的京东</span>
          </router-link>
        </li>
      </ul>
      <div class="xsj"></div>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    classback() {
      this.$router.back();
    },
    isNav() {
      this.isShow = !this.isShow;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
 .classifyhead {
      width: 100%;
      height:13vw;
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      box-sizing: border-box;
      line-height: 14.5vw;
      padding-left: 1.5vw;
    
      a {
         color: #fff;
           display: flex;
           align-items: center;
        > span {
          text-align: left;
          display: inline-block;
          width: 25vw;
          // box-sizing: border-box;
          // padding-bottom: 1vw;
          // padding-left: 2vw;
          margin-left: 3vw;
          border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
        }
      }

      .lastspan {
        border-bottom: none;
      }
    }
  
</style>