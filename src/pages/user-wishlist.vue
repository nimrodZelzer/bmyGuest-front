<template >
    <div class="wishlist-container main-layout">
        <h1 @click="show">Wishlist</h1>
        <div v-if="stays" v-for="stay in stays" :key="stay._id">
            <wishlist-preview :stay="stay" />
        </div>
    </div>
</template>

<script>
import wishlistPreview from '../cmps/wishlist-preview.cmp.vue'

export default {
    name: "wish-list-page",
    props: {

    },
    data() {
        return {
            wishedStays: [],
        };
    },
    created() {
        this.$store.commit({ type: 'setCurrPage', page: 'wishlist-container' })
        // if (this.wishedStays) this.wishedStays = this.stays.filter((stay) => stay.wished)
    },
    mounted() {

    },
    methods: {
        show() {
            console.log(this.stays)

        }
    },
    computed: {
        stays() {
            const res = this.$store.getters.stays
            const staysToShow = res.filter((stay) => stay.wished)
            return staysToShow
        },
    },
    unmounted() { },
    components: {
        wishlistPreview
    }
};
</script>
<style >
</style>