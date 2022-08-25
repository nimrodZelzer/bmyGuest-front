<template>
    <!-- :class="{'sticky' : stickingLabels}" -->
    <section class="labels-select main-layout ">
        <div class="labels-list">
            <homeCaruselCmp v-if="labels" :labelsArry="labels" />
        </div>
    </section>
</template>

<script>
import homeCaruselCmp from './home-carusel.cmp.vue'

export default {
    props: {
        labels: {
            type: Array,
        },
        stays: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            windowPos: 0,
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
            return (this.windowPos > 100)
        }

    },
    computed: {},
    components: {
        homeCaruselCmp,
    },
}
</script>

