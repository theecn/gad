import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'

Vue.component('gad-button',Button)
Vue.component('gad-icon',Icon)
Vue.component('gad-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})
//以下为测试代码
import Chai from 'chai'
const expect = Chai.expect
//测试button的icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
//测试loaing
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
//测试icon-position
{
    const Constructor = Vue.extend(Button)
    const  div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}


{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)

    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    vm.on('click',function(){
        expect(1).to.eq(1)
    })
    let button = vm.$el
    button.click()
}