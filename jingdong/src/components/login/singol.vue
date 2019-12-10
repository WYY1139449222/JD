<template>
    <div>
        <my-header>
            我的京东
        </my-header>
        
    </div>
</template>
<script>
// @ is an alias to /src
import header from '@/components/common/header.vue'
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        'my-header':header
    }
}
</script>
<style lang="less">

</style>