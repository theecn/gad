<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value)=>{
        let valid = true;
        console.log(value)
        let keys = Object.keys(value)
        console.log(keys)
        keys.forEach((item)=>{
            if (!['span','offset','width'].includes(item)){
                valid = false
            }
        });
        return valid
    }
    export default {
        name: 'gad-col',
        props: {
            span: {
                type:[String,Number]
            },
            offset:{
                type:[String,Number]
            },
            ipad:{
                type:Object,
                validator,
            },
            pc:{
                type:Object,
                validator,
            }
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed:{
            colClass(){
                let {span,offset,ipad,pc}=this
                let pcClass=[]
                let ipadClass=[]
                if(pc){
                    pcClass=[`col-pc-${pc.width}`]
                }
                if (ipad){
                    ipadClass=[`col-ipad-${ipad.width}`]
                }
                return [
                    span&& `col-${span}`,
                    offset&&`offset-${offset}`,
                    ...ipadClass,
                    ...pcClass
                ]
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
        flex-wrap: wrap;
        height: 100px;
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $offset-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media (min-width:576px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
        @media (min-width:950px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
    }
</style>