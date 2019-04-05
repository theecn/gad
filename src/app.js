import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('gad-button',Button)
Vue.component('gad-icon',Icon)

new Vue({
    el:'#app',
    data:{
        message:'hello'
    }
})
