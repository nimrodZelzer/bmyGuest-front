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
// import { ElLoading } from 'element-plus'

export default {
  name: 'explore-page',
  created() {
    this.$store.commit('setCurrPage', { page: 'explore-app' })
    // this.loader = ElLoading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)',
    // })
  },
  data() {
    return {
      loader: null
    }
  },
  methods: {
    async addToWishList(stay) {
      try {
        let newStay = { ...stay }
        // let newStay = structuredClone(stay)
        newStay.wished = !newStay.wished
        this.$store.dispatch({ type: 'saveStay', stay: newStay })
        await this.$store.dispatch({ type: 'loadStays' })
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
    close() {
      return this.loader.close()
    },
    isHeaderOpen() {
      return this.$store.getters.openHeader
    }
  },
  components: {
    stayList,
    mainFilter
  },
}
</script>