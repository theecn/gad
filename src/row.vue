<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
 export default {
     name:'gad-row',
     props:{
         gutter:{
            type:[String,Number]
         }
     },
     computed:{
         rowStyle(){
             let {gutter}= this
             return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
         }
     },
     mounted() {
         this.$children.forEach((vm)=>{
             vm.gutter=this.gutter
         })
     }
 }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
        flex-wrap: wrap;
    }
</style>