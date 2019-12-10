<template>
  <div style="background:#eee;">
    <header>
      <van-icon name="arrow-left" color="white" />
      <van-icon name="ellipsis" color="white" />
    </header>
    <main>
      <van-swipe indicator-color="white">
        <van-swipe-item v-for="i in ary" :key="i">
          <img :src="i" alt="" style="width:100%" />
        </van-swipe-item>
      </van-swipe>
    </main>
    <nav>
      <div class="moneyBox">
        <div class="money-box">
          <span>￥</span>
          <span>158.00</span>
        </div>

        <div class="icon-box">
          <span>
            <van-icon name="gold-coin-o" />
            <p>降价提醒</p>
          </span>
          <span>
            <van-icon name="star-o" />
            <p>收藏</p>
          </span>
        </div>
      </div>
      <div class="descBox">
        <van-tag type="danger">12.12</van-tag>
        <span v-text="str"></span>
      </div>
    </nav>
    <div class="privilege">
      <span>优惠</span>
      <div>
        <van-tag color="#f2826a">满300享9折</van-tag>
        &nbsp;
        <van-tag color="#f2826a">新用户专享</van-tag>
      </div>
      <van-icon name="ellipsis" />
    </div>
    <div class="detailsBox">
      <div>
        <span>已选</span>
        <div>
          <p>HLS912-MT飞鹰刺绣复古色,32码(两尺五),1个</p>
          <p>本商品支持保障服务，点击可选服务</p>
        </div>
        <van-icon name="ellipsis" />
      </div>

      <div class="choose">
        <div class="area">
          <span>送至</span>
          <div>
            <AreaList></AreaList>
            <p>
              <span>现货</span>
              <small
                >今日17:30前完成下单，预计12月10日23:30前发货，12月12日24:00前送达</small
              >
            </p>
          </div>
          <van-icon name="ellipsis" />
        </div>
        <div class="sendMoneye">
          <ul>
            <li>
              <van-icon name="passed" color="red" />
              商家发货&售后
            </li>
            <li>
              <van-icon name="passed" color="red" />
              7天无理由退货
            </li>
            <li>
              <van-icon name="passed" color="red" />
              送运费险
            </li>
            <li>
              <van-icon name="passed" color="red" />
              闪电退款
            </li>
            <li>
              <van-icon name="passed" color="red" />
              急速审核
            </li>
          </ul>
          <van-icon name="ellipsis" />
        </div>
      </div>

      <div></div>
    </div>
    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AreaList from './shopcat/Area.vue'
export default {
  name: "XXX",
  data() {
    return {
      ary: [
        "//m.360buyimg.com/mobilecms/s750x750_jfs/t27475/79/978323336/363684/8d5516b0/5bbe2d16Nb9cc3240.jpg!q80.dpg.webp",
        "//m.360buyimg.com/mobilecms/s843x843_jfs/t25120/317/1911120825/369378/1d386dde/5bbe2d20N029536a5.jpg!q70.dpg.webp",
        "//m.360buyimg.com/mobilecms/s843x843_jfs/t25846/273/1885936292/366385/4c948ebf/5bbe2d16Nf8019937.jpg!q70.dpg.webp"
      ],
      str:
        "suohuang|索皇 2019新款破洞牛仔裤男士复古潮流青年休闲裤刺绣韩版弹力个性修身牛仔长裤 HLS912-MT飞鹰刺绣复古色 32码(两尺五)"
    };
  },
  created() {
    console.log(this.ary);
  },
  components: {
    AreaList
  }
};
</script>
<style lang="less">
header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: transparent;
  border-bottom: none;
  font-size: 25px;
  padding: 2vw 2vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > i {
    border-radius: 50%;
    background: #666;
  }
}
nav {
  width: 100%;
  padding: 2vw 2vw;
  box-sizing: border-box;
  background: #fff;
  .moneyBox {
    display: flex;
    .money-box {
      flex: 1;
      text-align: left;
      color: red;
      line-height: 10vw;
      > span:nth-child(2) {
        font-size: 22px;
      }
    }
    .icon-box {
      flex: 1;
      display: flex;
      font-size: 12px;
      > span {
        flex: 1;
      }
    }
  }
  .descBox {
    > span:nth-child(1) {
      margin-right: 2vw;
    }
    > span:nth-child(2) {
      font-size: 14px;
    }
  }
}
.privilege {
  display: flex;
  height: 12vw;
  background: #fff;
  line-height: 12vw;
  margin: 2vw 0;
  > span {
    flex: 1.5;
  }
  > div {
    flex: 8;
    text-align: left;
  }
  > i {
    flex: 1;
    line-height: 12vw;
  }
}
.detailsBox {
  background: #fff;
  margin-bottom: 2vw;
  > div:nth-child(1) {
    display: flex;
    > span {
      flex: 1;
      font-size:14px;
    }
    > div {
      flex: 8;
      font-size: 14px;
      > p {
        margin: 1vw 0;
        box-sizing: border-box;
      }
      > p:nth-child(2) {
        font-size: 12px;
        color: #aaa;
      }
    }
    > i {
      flex: 1;
    }
  }
  .choose {
    border-top: 1px solid #eee;
    padding: 2vw 0 2vw 3vw;
    box-sizing: border-box;
    .area {
      display: flex;
      > span {
        flex: 1;
        font-size: 14px;
      }
      > div {
        flex: 8;
        > p {
          margin: 1vw 0;
        }
        > p:nth-child(2) {
          font-size: 14px;
          >span{
            color:red;
          }
        }
      }
      > i {
        flex: 1;
      }
    }
  }
  .sendMoneye {
    border-top: 1px solid #eee;
    display: flex;
    padding: 1vw 1vw;
    margin-bottom: 13vw;
    > ul {
      flex: 9;
      text-align: left;
      font-size: 12px;
      > li {
        display: inline;
      }
    }
    > i {
      flex: 1;
    }
  }
}
</style>
