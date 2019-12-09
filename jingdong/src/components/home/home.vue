<template>
    <div class="homepage">
        <swiper></swiper>
        <my-nav></my-nav>
        <seckill></seckill>
        <footprint></footprint>
        <recommend></recommend>
    </div>
</template>
<script>
// @ is an alias to /src
import swiper from './swiper'
import nav from './nav'
import seckill from './seckill'
import footprint from './footprint'
import recommend from '../recommend'
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        swiper,
        "my-nav":nav,
        seckill,
        footprint,
        recommend
    }
}
</script>
<style lang="less">

</style>