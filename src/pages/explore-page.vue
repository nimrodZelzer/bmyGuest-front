<template>
  <section class="explore-app">
    <div class="header-explore">
    </div>
    <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
    <div v-else>Loading...</div>
  </section>
</template>

<script>
import stayList from '../cmps/home/stay-list.cmp.vue'

export default {
  name: 'explore-page',
  created() {
    this.$store.commit('setCurrPage', { page: 'explore-app' })
  },
  data() {
    return {
      // filterBy: { txt: null },
      // stays: null
    }
  },
  methods: {
    async addToWishList(stay) {
      try {
        let newStay = { ...stay };
        newStay.wished = !newStay.wished
        this.$store.dispatch({ type: 'saveStay', stay: newStay })
        await this.$store.dispatch({ type: 'loadStays' })
      } catch (err) {
        console.log(err)
      }

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