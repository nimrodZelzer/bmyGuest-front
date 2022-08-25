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
    name: 'stay-app',
    data() {
        return {

        }
    },
    methods: {
    },
    computed: {
        stays() {
            return this.$store.getters.totalStays
        },
        getLebels() {
            return this.$store.getters.getLebels
        },
    },
    created() {
        this.$store.commit({ type: "setCurrPage", page: "home-page" });
        this.$store.dispatch({ type: 'loadHostOrders' })

        // const res = this.$store.dispatch({ type: 'loadTotalStays' })
        // this.stays = res
    },

    components: {
        stayList,
        labelsSelect,
    },

}
</script>