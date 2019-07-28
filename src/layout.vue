<template>
    <div class="container" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"gadLayout",
        data(){
            return{
              layoutClass:{
                  hasSider:false
              }
            }
        },
        mounted() {
            this.$children.forEach((item)=>{
                if(item.$options.name === 'gadSider'){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang = "scss" scoped>
    .container{
        display: flex;
        flex-grow: 1;
        height: 100vh;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>