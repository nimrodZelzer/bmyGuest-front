import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import store from "./store"
import "element-plus/dist/index.css"
import VueEasyLightbox from "vue-easy-lightbox"

import { clickOutsideDirective } from "./directives/index.js"

import HistogramSlider from "vue3-histogram-slider"
import "vue3-histogram-slider/dist/histogram-slider.css"
import "./assets/styles/styles.scss"
import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp(App)
app.directive("click-outside", clickOutsideDirective)
// app.component('VueSlider', VueSlider)
app.component(HistogramSlider.name, HistogramSlider)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueEasyLightbox)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDfKxMv5OjVCUjDlsEf-Q9pwSSBqv-brDw',
    },
})
app.mount("#app")
