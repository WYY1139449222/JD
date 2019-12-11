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
  background: #fff;
  box-sizing: border-box;
  z-index: 999;
  padding: 1vw 3vw;
  display: flex;
  align-items: center;
  // border-bottom: 1px solid #eee;
  justify-content: space-between;
  height: 12vw;
  //   .headleft{
  //      width: 5vw;
  //   }
  //   .headright{
  //      width: 5vw;
  //   }
  .slotBox {
    flex: 1;
  }
}
.outnav {
  position: fixed;
  top: 17vw;
  right: 2vw;
  background: rgba(0, 0, 0, 0.8);
  height: 58vw;
  width: 35vw;
  z-index: 999;
  border-radius: 5px;
  font-size: 4vw;
  .xsj {
    height: 0;
    width: 0;
    border-bottom: 1.5vw solid rgba(0, 0, 0, 0.8);
    border-top: 1.5vw solid transparent;
    border-left: 2vw solid transparent;
    border-right: 2vw solid transparent;
    position: absolute;
    top: -3vw;
    right: 1vw;
  }
  > ul {
    // display: flex;
    > li {
      color: #fff;
      height: 14.5vw;
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
  }
}
</style>