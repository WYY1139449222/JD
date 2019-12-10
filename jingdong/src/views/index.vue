<template>
  <div class="mainpage">
    <router-view></router-view>
    <nav class="navBox" v-show="isshow">
      <div :class="{cur:iscur=='/home'}">
        <router-link to="/home">
        <van-icon name="fire-o" size="25px"/>
          <div>首页</div>
        </router-link>
      </div>
      <div :class="{cur:iscur=='/classify'}">
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
          <div>{{(islogin?'我的':'未登录')}}</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex';
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
    };
  },
  methods: {
    
  },

  computed: {
    isshow(){
      return !(/^\/surprise/.test(this.$route.fullPath))
    },
    iscur(){
      return this.$route.fullPath=='/'?'/home':this.$route.fullPath
    },
    ...mapState(['islogin'])
  },
  components: {}
};
</script>
<style lang="less" scoped>
.mainpage{
  padding-bottom:15vw;
}
.navBox{
    height: 15vw;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    background: #fff;
    >div{
      &.cur{
        >a{
          color:red
        }
      }
        flex: 1;
        >a{
          display: block;

          color: #aaa;
        }
    }
}
</style>