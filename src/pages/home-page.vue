<template>
    <section class="home-page ">
        <div class="header-explore">
        </div>
        <labels-select @filterLabels="filterLabels" v-if="getLebels" :labels="getLebels" :stays="stays" />
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
        addToWishList(stay) {
            let newStay = { ...stay };
            newStay.wished = !newStay.wished
            this.$store.dispatch({ type: 'saveStay', stay: newStay })
            this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        },
        async filterLabels(label){
            this.filterBy = {...this.$store.getters.filterBy}
            this.filterBy.label = label
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
        await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        this.stays = this.$store.getters.stays
        this.getLebels
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