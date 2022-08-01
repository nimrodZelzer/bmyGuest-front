<template class="orders-page">
    <div class="main-layout wishlist-container">
        <h1 @click="show">Wishlist</h1>

        <div v-if="stays" v-for="stay in wishedStays" :key="stay._id">
            <wishlist-preview :stay="stay" />
        </div>

    </div>
</template>
<script>

import wishlistPreview from '../cmps/wishlist-preview.cmp.vue';
export default {
    name: "wish-list-page",
    data() {
        return {
            wishedStays: [],
            stays: []
        };
    },
    created() {
        this.$store.dispatch({ type: 'loadStays' })
        this.stays = this.$store.getters.stays
        console.log(this.stays)

        this.wishedStays = this.stays.filter((stay) => stay.wished)
        console.log(this.wishedStays)
    },
    methods: {
        show() {
            console.log(this.stays)
        }
    },
    computed: {},
    unmounted() { },
    components: {
        wishlistPreview
    }
};
</script>
<style >
</style>