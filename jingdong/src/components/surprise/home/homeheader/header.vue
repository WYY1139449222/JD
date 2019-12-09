<template>
    <div class="header">
        <div class="header-left">
           <van-icon name="arrow-left" class="headicon" @click="backFn" /> 
        </div>
        <div>惊喜</div>
        <div class="header-right">...</div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'HOMEheader',
    data() {
        return {
        
        }
    },
    components: {
        
    },methods: {
        backFn(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="less" scoped>
 .header{
    //  padding: 10px;
     font-size: 5vw;
     display: flex;
     justify-content:space-between ;
     text-align: center;
     vertical-align: middle;
     height: 13vw;
     line-height: 13vw;
     padding: 0 5vw;
     .headicon{
           padding-top: 0.5vw;
           line-height: 13vw;
     }
   
//   .header-left{
//       padding: 1.5vw;
//   }
 }
</style>