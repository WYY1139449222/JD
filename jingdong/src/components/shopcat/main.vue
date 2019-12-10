<template>
  <main>
    <MyArea></MyArea>
    <span class="isLogin">
      登录后可同步账户购物车中的商品
      <van-button type="warning" size="small" color="red">登录</van-button>
    </span>

    <div class="Shopping">
      <div class="Shop-title">
        <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
        <van-icon name="shop-o" />
        <span>男装店</span>
        <van-icon name="arrow" />
      </div>

      <div class="Shop-desc">
        <van-tag type="danger">满减</van-tag>
        <span>购满258元，可减18元，还差90元</span>
        <span>去凑单 > </span>
      </div>

      <div class="Shop">
        <div class="checkout_">
          <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
        </div>
        <van-card
          price="168"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag
              plain
              type="danger"
              style="max-width:20vw;
        overflow: hidden"
              >标签</van-tag
            >
            <van-tag plain type="danger">选服务 > </van-tag>
          </div>
          <div slot="footer">
            <van-stepper v-model="value" />
            <van-button size="mini" class="Delete_">删除</van-button>
          </div>
        </van-card>
      </div>
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
import MyArea from './Area'
export default {
  name: "XXX",
  data() {
    return {
      value: true,
      checked: [],
      num: "",
      menu: false
    };
  },
  components: {
    MyArea
  },
};
</script>
<style lang="less">
.isLogin {
  background: #fff;
  display: block;
  height: 16vw;
  line-height: 16vw;
  > button {
    width: 50px;
    display: inline-block;
    font-size: 20px;
  }
}
.Shopping {
  overflow: hidden;
  margin-bottom: 5vw;
  .Shop-title {
    background: #fff;
    width: 100%;
    height: 12vw;
    line-height: 12vw;
    text-align: left;
    > div:nth-child(1) {
      display: inline-block;
      margin: 0 3vw 0 5vw;
    }
    > i {
      font-size: 22px;
      margin: 0 3vw;
    }
    > span {
      font-size: 18px;
      font-weight: 800;
    }
  }
  .Shop-desc {
    background: #fff;
    > span:nth-child(2) {
      padding: 0 3vw;
      box-sizing: border-box;
    }
    > span:nth-child(3) {
      font-size: 12px;
      color: #bbb;
      float: right;
      margin-right: 3vw;
    }
  }
  .Shop {
    position: relative;
    > div {
      > div:nth-child(1) {
        .van-card__content {
          text-align: left;
          padding: 0 0 0 6vw;
        }
        > a {
          > div {
            > img {
              margin: 5vw 0 0 8vw;
            }
          }
        }
      }
    }
    .Delete_ {
      margin-top: 2vw;
      box-sizing: border-box;
    }
    .checkout_ {
      position: absolute;
      top: 35%;
      left: 5vw;
      z-index: 20;
    }
    .van-card:not(:first-child) {
      margin-top: 0px;
    }
  }
}
main {
  background: #ddd;
}
</style>
