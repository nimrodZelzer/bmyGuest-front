<template>
    <section class="main-filter">

        <div @click="openFilter = !openFilter">
            <filter-btn />
        </div>
        <headerFilter v-if="openFilter" :stays="stays" />
        <div v-if="openFilter" class="overlay"></div>
    </section>
</template>

<script>
import headerFilter from './home/header-filter.cmp.vue';
import filterBtn from './filter-btn.cmp.vue';
export default {
    name: 'main-filter',
    props: {
        stays: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            openFilter: false
        }
    },
    created() {

    },
    methods: {
    },
    computed: {},
    components: {
        headerFilter,
        filterBtn
    },
}
</script>