<template>
    <div>
        <nav >
      <div>
        <router-link to="/surprise/home/appliances">
        <van-icon name="fire-o" size="25px"/>
          <div>家电</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/home/book">
          <van-icon name="apps-o" size="25px"/>
          <div>书</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/home/decoration">
          <van-icon name="flower-o" size="25px" />
          <div>京喜</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/home/nurse">
          <van-icon name="shopping-cart-o" size="25px"  />
          <div>购物车</div>
        </router-link>
      </div>
      <div>
        <router-link to="/surprise/home/onerap">
        <van-icon name="contact" size="25px"/>
          <div>1元购</div>
        </router-link>

        <!-- 视图 -->
        <router-view></router-view>
      </div>
    </nav>
    </div>
</template>
<script>
// @ is an alias to /src


export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
     
    }
}
</script>
<style lang="less">

</style>