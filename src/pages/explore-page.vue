<template>
  <section class="explore-app">
    <div class="header-explore">
    </div>
    <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
    <img v-else class="loader" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="">

  </section>
</template>
<script>

import stayList from '../cmps/home/stay-list.cmp.vue'
export default {
  name: 'explore-page',
  async created() {
    const { destination } = this.$route.params
    this.filterBy = this.$store.getters.filterBy 
    this.filterBy.txt = destination
    console.log(this.filterBy)
    await this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        console.log(this.filterBy)
    this.stays = this.$store.getters.stays
    const page = "explore-page";
    this.$store.commit({ type: "setCurrPage", page });
  },
  data() {
    return {
      filterBy: { txt: null },
      stays: null
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
      // console.log(this.$store.getters.stays)
      return this.$store.getters.stays
    },
    countries() {
      return this.$store.getters.staysToShow
    }
  },
  components: {
    stayList,
  },
}
</script>