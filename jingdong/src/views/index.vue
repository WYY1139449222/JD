<template>
  <div class="mainpage">
    <router-view></router-view>
    <nav class="navBox" v-show="isshow">
      <div>
        <router-link to="/home">
        <van-icon name="fire-o" size="25px"/>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/classify">
          <van-icon name="apps-o" size="25px"/>
          <div>分类</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/home">
          <van-icon name="flower-o" size="25px" />
          <div>京喜</div>
        </router-link>
      </div>
      <div>
        <router-link to="/shopcat">
          <van-icon name="shopping-cart-o" size="25px"  />
          <div>购物车</div>
        </router-link>
      </div>
      <div>
        <router-link to="/login">
        <van-icon name="contact" size="25px"/>
          <div>未登录</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      idshow:''
    };
  },
  methods: {
    fn(){
      console.log(this);
      
    }
  },
  computed: {
    isshow(){
      return !(/^\/surprise/.test(this.$route.fullPath))
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.navBox{
    height: 15vw;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    >div{
        flex: 1;
        >a{
          display: block;

          color: #aaa;
        }
    }
}
</style>