<template class="orders-page">
    <div class="main-layout orders-container">
        <h1>Orders</h1>
        <!-- <div v-for="order in orders">
            <order-preview :order="order" />
        </div> -->
        <!-- <header-country class="header-country" /> -->
    </div>
</template>
<script>
// import headerCountry from '../cmps/header-map-search.cmp.vue';
// import orderPreview from '../cmps/order-preview.cmp.vue';
export default {
    name: "orders-page",
    data() {
        return {
            orders: this.$store.getters.getOrders,
        };
    },
    created() { },
    methods: {
        order() {
            console.log(orders)
        }
    },
    computed: {},
    unmounted() { },
    components: {
        // orderPreview,
        // headerCountry
    }
};
</script>
<style >
</style>