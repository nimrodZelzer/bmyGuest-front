<template>
  <main-filter :stays="stays" />
  <section class="explore-app" v-if="stays">
    <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
    <div v-else class="loader">Loading...</div>
  </section>
  <section v-else>No stays for display</section>
</template>

<script>
import stayList from '../cmps/home/stay-list.cmp.vue'
import mainFilter from '../cmps/filter.cmp.vue'

export default {
  name: 'explore-page',
  created() {
    this.$store.commit('setCurrPage', { page: 'explore-app' })
  },
  data() {
    return {
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
      return this.$store.getters.stays
    },
  },
  components: {
    stayList,
    mainFilter
  },
}
</script>