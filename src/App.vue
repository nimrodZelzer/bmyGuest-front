
<template>
  <section class="main-app">
    <app-header :stays="stays" />
    <div v-if="stays">
      <router-view />
    </div>

    <user-msg />
  </section>
</template>


<script>
import userMsg from './cmps/user-msg.cmp.vue';
import appFooter from './cmps/app-footer.cmp.vue'

import appHeader from './cmps/home/app-header.cmp.vue'

export default {
  data() {
    return {
      openHeader: false,
    }
  },
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    this.$store.dispatch({ type: 'loadLabels' })
    this.$store.dispatch({ type: 'loadOrders' })
  },
  mounted() { },
  methods: {
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
  },
  components: {
    appFooter,
    appHeader,
    userMsg,

    // headerFilter,
  },
}
</script>


