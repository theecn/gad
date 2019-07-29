import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, closeButton) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: closeButton
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}