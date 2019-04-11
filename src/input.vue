<template>
    <div :class="{error}" :class="{success}" class="wrapper">
        <input type="text" :value= "value" :disabled="disabled" :readOnly="readOnly"
               @blur="$emit('blur',$event.target.value)"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @input="$emit('input',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
<!--        <template v-if="success">-->
<!--            <icon name="success" class="icon-success"></icon>-->
<!--            <span class="successMessage">{{success}}</span>-->
<!--        </template>-->
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components:{Icon},
        name:"gad-input",
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readOnly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            },
            success:{
                type:String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-hover-color:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .wrapper{

        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        margin-top: 20px;
        > :not(:last-child){margin-right: .5em}
        > input{
            height: $height;
            border:1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-hover-color;
            }
            &:active{

            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled]{
                border-color:#bbb;
                color:#666;
                cursor: not-allowed;
            }
            &[readOnly]{
                border-color:#bbb;
                color:#666;
            }
        }
        &.error{
            > input{
                border-color:$red;
            }
        }
        &.success{
            > input{
                border-color: aquamarine;
            }
        }
        .icon-error{
            fill:$red;
        }
        .errorMessage{
            color: $red;
        }
        .icon-success{
            fill:lightseagreen;
        }
        .successMessage{
            color:lightseagreen;
        }
    }
</style>