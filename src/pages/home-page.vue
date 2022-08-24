<template>
    <section class="home-page ">
        <div class="header-explore">
        </div>
        <labels-select v-if="getLebels" :labels="getLebels" :stays="stays" />
        <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
        <!-- <img v-else class="loader" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt=""> -->
        <div v-else class="loader">Loading...</div>

    </section>
</template>
<script>
import labelsSelect from '../cmps/home/labels-select.vue'
import stayList from '../cmps/home/stay-list.cmp.vue'
import LoginSignup from '../cmps/login-signup.cmp.vue'
export default {
    name: 'stay-app',
    data() {
        return {

        }

    },
    methods: {
        addToWishList(stay) {
            let newStay = { ...stay };
            newStay.wished = !newStay.wished
            this.$store.dispatch({ type: 'saveStay', stay: newStay })
            this.$store.dispatch({ type: 'loadStays' })
        }
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
        this.$store.dispatch({ type: 'loadHostOrders' })
        const page = "home-page";
        this.$store.commit({ type: "setCurrPage", page });
    },

    components: {
        stayList,
        labelsSelect,
        LoginSignup
    },

}
</script>