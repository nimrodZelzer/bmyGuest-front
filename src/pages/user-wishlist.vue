<template >
    <div class="wishlist-container main-layout">
        <h1 @click="show">Wishlist</h1>
        <div v-if="stays" v-for="stay in wishedStays" :key="stay._id">
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
            stays: [],
        };
    },
    created() {
        this.show()
        const page = 'wishlist-container'
        // this.$store.commit({ type: 'setCurrPage', page })
        this.$store.commit('setCurrPage', { page })
        console.log(page)
        // // this.$store.dispatch({ type: 'loadStays' })
        // this.stays = this.$store.getters.stays

        this.wishedStays = this.stays.filter((stay) => stay.wished)
    },
    methods: {
        show() {
            console.log(this.$route.params)
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