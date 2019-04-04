<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        background: var(--button-bg);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }
</style>
