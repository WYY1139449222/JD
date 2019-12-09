<template>
  <div class="surprise" v-show='isshow'>
      <div>
          <router-view></router-view>
      </div>
    <nav class="surpriseNav" >
      <div>
        <router-link to="/surprise/home/decoration">
          <van-icon name="flower-o" size="25px" />
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/look/look">
          <van-icon name="shopping-cart-o" size="25px" />
          <div>找东西</div>
        </router-link>
      </div>
      <div>
        <router-link to="/login">
          <van-icon name="contact" size="25px" />
          <div>未登录</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
// @ is an alias to /src
//home 文件夹中的vue文件全部导入到modules里面
const path = require("path");
const files = require.context("./", false, /\.vue$/);
const modules = {};
files.keys().forEach(key => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
console.log(modules);

export default {
  name: "XXX",
  data() {
    return {};
  },
  computed: {
      isshow(){
           return /^\/surprise/.test(this.$route.fullPath)
      }
  },
  components: {
    //解构modules
    ...modules
  }
};
</script>
<style lang="less" scoped>
.surprise {
  width: 100%;
  height: 100%;
  .surpriseNav {
    height: 15vw;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: #fff;
    align-items: center;
    > div {
      flex: 1;
      >a{
          color:#aaa;
      }
    }
  }
}
</style>