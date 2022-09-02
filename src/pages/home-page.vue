<template>
    <section class="home-page" v-if="stays">
        <labels-select v-if="getLebels" :labels="getLebels" :stays="stays" />
        <stay-list v-if="stays" :stays="stays" />
    </section>
    <section v-else>No stays for display</section>
</template>
<script>
import labelsSelect from '../cmps/home/labels-select.vue'
import stayList from '../cmps/home/stay-list.cmp.vue'

export default {
    name: 'home-page',
    data() {
        return {

        }
    },
    methods: {
    },
    computed: {
        stays() {
            return this.$store.getters.stays
        },
        getLebels() {
            return this.$store.getters.getLebels
        },
    },
    created() {
        this.$store.commit({ type: "setCurrPage", page: "home-page" });
        this.$store.dispatch({ type: 'loadHostOrders' })
    },

    components: {
        stayList,
        labelsSelect,
    },

}
</script>