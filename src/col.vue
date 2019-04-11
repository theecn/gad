<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'gad-col',
        props: {
            span: {
                type:[String,Number]
            },
            offset:{
                type:[String,Number]
            }
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed:{
            colClass(){
                let {span,offset}=this
                return [`col-${span}`,offset&&`offset-${offset}`]
            },
            colStyle(){
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        display: flex;
        height: 100px;
        width: 50%;
        border: 1px solid darkgrey;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $offset-prefix: offset-;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
</style>