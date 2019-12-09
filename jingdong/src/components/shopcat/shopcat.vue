<template>
  <div>
    <header>
      <div><van-icon name="arrow-left" @click="back" /></div>
      <div>购物车</div>
      <div><van-icon name="ellipsis" @click="isMenu"/></div>
    </header>
    <main>
      <div class="Area">
        <div class="areaList">
          <van-icon name="location-o" />
          <span @click="showOption" v-text="aList"></span>
          <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '60%' }"
          >
            <van-area
              @cancel="cancel"
              @confirm="confirm"
              :area-list="values"
              :columns-placeholder="['请选择', '请选择', '请选择']"
              title="选择区域"
            />
          </van-popup>
        </div>
        <div ref="ref" class="redact" @click="reset">
          编辑商品
        </div>
      </div>

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
    <footer>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </footer>
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
import AreaList from "./AreaList.js";
export default {
  name: "XXX",
  data() {
    return {
      values: AreaList,
      value: true,
      aList: "请选择区域",
      show: false,
      checked: [],
      num: "",
      menu:false
    };
  },
  created() {},
  components: {},
  methods: {
    showOption() {
      this.show = !this.show;
    },
    cancel() {
      this.show = !this.show;
    },
    confirm(val) {
      this.aList =
        `${val[0].name}-${val[1].name}-${val[2].name}` || "请选择区域";
      this.show = !this.show;
    },
    onSubmit() {},
    reset() {
      let str = this.$refs.ref.innerText;
      this.$refs.ref.innerText = str == "编辑商品" ? "完成" : "编辑商品";
    },
    back() {
      this.$router.back();
    },
    isMenu(){
        this.menu = !this.menu
    }
  },
  computed: {
    date() {}
  }
};
</script>
<style lang="less" scope>
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
.Area {
  background: #fff;
  height: 11.8vw;
  line-height: 11.8vw;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  box-sizing: border-box;
  .areaList {
    flex: 7.5;
    color: #999;
    text-align: left;
    padding-left: 5vw;
  }
  .redact {
    flex: 2.5;
  }
}
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
footer {
  z-index: 999;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .van-checkbox {
    margin-left: 3vw;
  }
}
.menu {
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
