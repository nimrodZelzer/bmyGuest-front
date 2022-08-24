import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import store from "./store"
import "element-plus/dist/index.css"
import VueEasyLightbox from "vue-easy-lightbox"

// import { clickOutsideDirective } from "./directives/index.js"

import HistogramSlider from "vue3-histogram-slider"
import "vue3-histogram-slider/dist/histogram-slider.css"
import "./assets/styles/styles.scss"
import VueGoogleMaps from "@fawmi/vue-google-maps"

import Datepicker from "@vuepic/vue-datepicker"
// import "@vuepic/vue-datepicker/dist/main.css"
// import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss"

const app = createApp(App)
// app.directive("click-outside", clickOutsideDirective)
app.component(HistogramSlider.name, HistogramSlider)
app.component("Datepicker", Datepicker)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueEasyLightbox)
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyARPmS2dhjKdP2WVF_7L5yKt4Alzdzfe38",
  },
})
app.mount("#app")
