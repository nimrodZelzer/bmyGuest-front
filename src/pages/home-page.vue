<template>
    <section class="home-page ">
        <div class="header-explore">
        </div>
        <labels-select v-if="getLebels" :labels="getLebels" :stays="stays" />
        <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
        <img v-else class="loader" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="">

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
            console.log(newStay.wished, "newStay")
            newStay.wished = !newStay.wished
            console.log(newStay.wished)

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
        this.$store.dispatch({ type: 'loadStays' })
        this.$store.dispatch({ type: 'loadHostOrders' })
        const page = "homePage";
        this.$store.commit({ type: "setCurrPage", page });
        // this.$store.dispatch({})
    },

    components: {
        stayList,
        labelsSelect,
        LoginSignup
    },

}
</script>