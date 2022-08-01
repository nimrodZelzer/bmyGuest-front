<template>
    <section class="home-page" v-if="stays">
        <div class="header-explore">
        </div>
        <labels-select @filterLabels="filterLabels" @filterPrice="filterPrice" v-if="getLebels" :labels="getLebels"
            :stays="stays" />
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
            filterBy: null,
            stays: null
        }

    },
    methods: {
        async addToWishList(stay) {
            let newStay = { ...stay };
            newStay.wished = !newStay.wished
            await this.$store.dispatch({ type: 'saveStay', stay: newStay })
            await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        },
        async filterLabels(label) {
            this.filterBy = { ...this.$store.getters.filterBy }
            this.filterBy.label = label
            this.stays = await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })

        },
        async filterPrice(price) {
            this.filterBy = { ...this.$store.getters.filterBy }
            this.filterBy.price = { ...price }
            this.stays = await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        }
    },
    computed: {
        getLebels() {
            return this.$store.getters.getLebels
        },
        staysToDisplay() {
            return this.stays
        }
    },
    async created() {
        this.filterBy = this.$store.getters.filterBy
        this.stays = await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })


        const page = "homePage";
        this.$store.commit({ type: "setCurrPage", page });
        // this.$store.dispatch({ type: 'loadHostOrders' })
    },

    components: {
        stayList,
        labelsSelect,
        LoginSignup
    },

}
</script>