const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    });
    let vm;
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    afterEach(()=>{
        div.remove()
    })
    it('接收span 参数', ()=>{
        vm = new Constructor({
            propsData:{
                span:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.equal(true)
    });
    it('接收offset 参数', ()=>{
        vm = new Constructor({
            propsData:{
                offset:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.equal(true)
    });
    it('接收 ipad 参数', ()=>{
        vm = new Constructor({
            propsData:{
                ipad:{
                    width:10
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-10')).to.equal(true)
    });
})