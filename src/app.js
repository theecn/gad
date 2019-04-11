import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'

Vue.component('gad-button',Button)
Vue.component('gad-icon',Icon)
Vue.component('gad-button-group',ButtonGroup)
Vue.component('gad-input',Input)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'hi'
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})