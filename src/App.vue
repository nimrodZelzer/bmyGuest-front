
<template>
  <section class="main-app" :class="{ 'fixed-body': fixedBody }">
    <app-header @openHeader="toggle" @login="toggle" />
    <router-view :class="{ 'overlay': openHeader }" />

    <user-msg />
  </section>
</template>


<script>
import { RouterView } from 'vue-router'
import userMsg from './cmps/user-msg.cmp.vue';
import appFooter from './cmps/app-footer.cmp.vue'
import appHeader from './cmps/home/app-header.cmp.vue'
import headerFilter from './cmps/home/header-filter.cmp.vue'
import { socketService } from './services/socket.service'

export default {
  data() {
    return {
      openHeader: false,
      fixedBody: false,

    }
  },
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadStays',filterBy:null })
    this.$store.dispatch({ type: 'loadLabels' })
  



    socketService.on('something-changed', this.alertSomethingChanged)

  },
  methods: {
    toggle(isshown) {
      this.openHeader = isshown
    },
    alertSomethingChanged() {
      console.log('Admin has updated the store...')
    },

  },
  computed: {},
  components: {
    appFooter,
    appHeader,
    userMsg,
    headerFilter,
  },
}
</script>


