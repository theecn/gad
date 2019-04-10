<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <gad-icon class="icon" v-if="icon && !loading" :name="icon"></gad-icon>
        <gad-icon class="loading icon" v-if="loading" name="loading"></gad-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        // props:['icon','iconPosition']
        components:{
            'gad-icon':Icon
        },
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value === "left" || value === "right"
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 .9em;
        background: var(--button-bg);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content{order: 2}
        > .icon{order: 1;margin-right:.3em;}
        &.icon-right{
            > .content{
                order: 1;
            }
            > .icon{
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
        .loading{
            animation: spin 1.5s linear infinite;
        }
    }
</style>
