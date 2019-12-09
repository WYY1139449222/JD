<template>
  <div>
    <header>
      <div><van-icon name="arrow-left" @click="back" /></div>
      <div>购物车</div>
      <div><van-icon name="ellipsis" @click="isMenu" /></div>
    </header>

    <div class="menu" v-show="menu">
      <router-link to="/" tag="p">
        <van-icon name="wap-home-o" />
        首页
      </router-link>
      <router-link to="/" tag="p">
        <van-icon name="search" />
        搜索
      </router-link>
      <router-link to="/shopcat" tag="p">
        <van-icon name="shopping-cart-o" />
        购物车
      </router-link>
      <router-link to="/" tag="p">
        <van-icon name="contact" />
        我的
      </router-link>
      <router-link to="/" tag="p">
        <van-icon name="todo-list-o" />
        浏览记录
      </router-link>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      menu: false
    };
  },
  components: {},
  methods: {
    back() {
      this.$router.back();
    },
    isMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>
<style lang="less">
header {
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid #eee;
  > div {
    height: 11.8vw;
    line-height: 11.8vw;
  }
  > div:nth-child(1) {
    flex: 1.5;
  }
  > div:nth-child(2) {
    flex: 7;
  }
  > div:nth-child(3) {
    flex: 1.5;
  }
}
.menu {
  z-index: 30;
  position: absolute;
  top: 10vw;
  right: 0;
  width: 30vw;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  border-radius: 10px;
  > p {
    margin-left: 3vw;
    display: block;
    border-bottom: 1px solid #eee;
    height: 7vw;
    line-height: 7vw;
  }
}
</style>
