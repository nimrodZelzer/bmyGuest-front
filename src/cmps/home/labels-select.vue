<template>
    <!-- :class="{'sticky' : stickingLabels}" -->
    <section class="labels-select main-layout ">
        <div class="labels-list">
            <homeCaruselCmp v-if="labels" :labelsArry="labels" />
        </div>
        <button @click="openFilter = !openFilter" class="filter-btn clickable"><svg viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                style="display: block; height: 14px; width: 14px; fill: currentcolor;">
                <path
                    d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                </path>
            </svg><span>Filters</span>
        </button>
    </section>
    <headerFilter v-if="openFilter" :stays="stays" />

    <div v-if="openFilter" class="overlay"></div>
</template>

<script>
import homeCaruselCmp from './home-carusel.cmp.vue'
import headerFilter from "./header-filter.cmp.vue"
// import priceRange from '../price-range.cmp.vue'

export default {
    props: {
        labels: {
            type: Array,
        },
        stays: {
            type: Array,
            // required: true,
        }
    },
    data() {
        return {
            windowPos: 0,
            openFilter: false
        }
    },
    created() {

    },
    mounted() {
        window.addEventListener("scroll", this.stickingLabels)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.stickingLabels)

    },
    methods: {
        getPos() {
            this.windowPos = window.top.scrollY
        },
        stickingLabels() {
            // console.log((this.windowPos > 120))
            return (this.windowPos > 100)
        }

    },
    computed: {},
    components: {
        homeCaruselCmp,
        headerFilter,
        // priceRange

    },
}
</script>

