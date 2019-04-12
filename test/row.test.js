const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Row).to.exist
    });
    it('接受 gutter 属性',(done)=>{
        Vue.component('gad-row',Row)
        Vue.component('gad-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=
            `
            <gad-row gutter="20">
                <gad-col span="12"></gad-col>
                <gad-col span="12"></gad-col>
            </gad-row>
        `
        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            const rows = vm.$el.querySelector('.row')
            expect(getComputedStyle(rows).marginLeft).to.eq('-10px')
            expect(getComputedStyle(rows).marginRight).to.eq('-10px')
            done()
        },1500)
    })

})