<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'gad-col',
        props: {
            span: {
                type:[String,Number]
            }
        },
        created() {

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
    }
</style>