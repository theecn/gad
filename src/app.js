import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Col from './col'
import Row from './row'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Layout from './layout'
import plugins from './plugin'


Vue.component('gad-button',Button)
Vue.component('gad-icon',Icon)
Vue.component('gad-button-group',ButtonGroup)
Vue.component('gad-input',Input)
Vue.component('gad-col',Col)
Vue.component('gad-row',Row)
Vue.component('gad-layout',Layout)
Vue.component('gad-header',Header)
Vue.component('gad-footer',Footer)
Vue.component('gad-sider',Sider)
Vue.component('gad-content',Content)
Vue.use(plugins)


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
        },
        showToast(){
            this.$toast('车工666')
        }
    }
})