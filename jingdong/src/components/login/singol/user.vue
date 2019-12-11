<template>
  <div class="main">
    <my-header>我的京东</my-header>
    <div class="body">
      <span class="account">管理我的账号</span>
      <div class="body_user">
        <img class="usericon" src="//img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
        <span class="log">当前登陆</span>
        <span class="username">
              <p class='user'>{{islogin}}</p>
        <span>用户名:{{islogin}}</span>
        </span>
      </div>
      <div class="body_nav">
        <ul>
          <li class="body_addm">
            <span>收获地址管理</span>
            <span>
              管理我的收获地址
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>实名认证</span>
            <span>
              已实名认证
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>修改手机号</span>
            <span>
              184*****479
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>登陆账号密码</span>
            <span>
              定期修改更安全
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>京东支付密码</span>
            <span>
              已设置
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>关联邮箱</span>
            <span>7674******@qq.com</span>
          </li>
          <li>
            <span>关联账号</span>
            <span>
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>联系客服</span>
            <span>
              即使解答用户疑点
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <span>切换站点</span>
            <span>
              <van-icon name="arrow" />
            </span>
          </li>
        </ul>
      </div>
      <div class="body_footer">
        <div>意见反馈</div>
        <div>京东客户端</div>
        <div>
          <span @click="singout">退出登陆</span>
        </div>
      </div>
      <div>
        <img src alt />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import header from "@/components/common/header.vue";
import { mapState } from 'vuex';
export default {
  name: "XXX",
  data() {
    return {
    };
  },

  methods: {
    singout() {
      this.$store.dispatch("changeSingOut");
    }
  },
  computed: {
      ...mapState(['islogin'])
  },
  components: {
    "my-header": header
  }
};
</script>
<style lang="less" scoped>
.main {
  background: #eee;
}
.body {
  // box-sizing: border-box;
  padding-top: 14vw;
  text-align: left;
  background: #fff;
  padding: 3vw;
  border-top: 1px solid #eeeeee;
  .account {
    display: inline-block;
    padding-bottom: 3vw;
  }
  .body_user {
    background: #fff9f9;
    border: 1px solid red;
    padding: 5vw;
    border-radius: 5px;
    height: 20vw;
    position: relative;
    
    .usericon{
        width: 20vw;
        height: 20vw;
    }
    .username{
        position: absolute;
        top:9vw;
        left:30vw;
        .user{
            padding-bottom: 2vw;
        }
    }
    .log {
    //   box-sizing: border-box;
      width: 18vw;
      position: absolute;
      top: 0vw;
      right: 0vw;
      font-size: 3.5vw;
      color: #e2231a;
      background: #ffa9a9;
      padding: 1vw;
      text-indent: 0.4em;
      border-radius: 10px 0px 0px 10px ;
      //   opacity: .3 ;
    }
    //    width: 90%;
  }
  .body_nav {
    > ul {
      padding-top: 3vw;
      > li {
        height: 13vw;
        line-height: 13vw;
        background: #fff;
        // padding-bottom: 4vw;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span:nth-child(2) {
          font-size: 4vw;
          color: #999;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .body_footer {
    padding: 5vw;
    display: flex;
    justify-content: space-between;
    font-size: 4vw;
    color: #999;
  }
}
</style>