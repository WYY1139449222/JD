<template>
  <div class="singolBox">
    <my-header>我的京东</my-header>
    <div class="mainBox">
      <div class="sinnavBox">
        <img
          src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
          alt
        />
        <div>
          <span>用户名： {{islogin}}</span>
        </div>
        <div>
          <van-icon name="setting" />账户管理
        </div>
        <div class="sinBoxNavL">
          <img
            src="https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png"
            alt
          />
          <p>
            <img
              src="https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png"
              alt
            />
            <span>|</span>
            <span>每月5张运费卷</span>
            <span>立即查看</span>
          </p>
        </div>
      </div>
      <main>
        <img src="./myjd.png" alt />
      </main>
    </div>
    <home-nav></home-nav>
  </div>
</template>
<script>
// @ is an alias to /src
import header from "@/components/common/header.vue";
import { mapState } from "vuex";
import homenav from "@/components/home/homenav";
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    "my-header": header,
    "home-nav": homenav
  },
  computed: {
    ...mapState(["islogin"])
  }
};
</script>
<style lang="less" scoped>
.singolBox {
  background: #eee;
  padding-bottom: 15vw;
  .mainBox {
      width: 100%;
      height: 163vw;
      overflow: scroll;
    .sinnavBox {
      padding: 15vw 5vw 13vw;
      color: #fff;
      font-size: 5vw;
      display: flex;
      align-items: center;
      background: linear-gradient(90deg, #eb3c3c, #ff7459);
      overflow: hidden;
      border-radius: 0 0 10vw 10vw;
      position: relative;
      > img {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
      }
      > div {
        flex: 1;
        &:nth-child(2) {
          flex: 1.6;
        }
        &:nth-child(3) {
            flex: 0.7;
          font-size: 4vw;
          text-align: right;
        }
      }
      .sinBoxNavL {
        position: absolute;
        bottom: -4vw;
        left: 5vw;

        width: 90vw;
        height: 15vw;
        color: #ffe678;
        font-size: 3vw;
        > img {
          width: 100%;
          height: 100%;
        }
        > p {
          margin-top: 3vw;
          vertical-align: sub;
          > img {
            height: 2.5vw;
            width: 14vw;
            float: left;
            margin: 0.5vw 3vw;
          }
          span {
            float: left;
            margin-right: 3vw;
          }
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          span:last-child {
            float: right;
          }
        }
      }
    }
    > main {
      width: 100%;
      margin-top: 5vw;
      img {
        width: 100%;
      }
    }
  }
}
</style>