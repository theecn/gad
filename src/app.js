import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('gad-button',Button)
Vue.component('gad-icon',Icon)

new Vue({
    el:'#app',
    data:{
        message:'hello',
        loading1:false,
        loading2:true,
        loading3:false
    }
})
