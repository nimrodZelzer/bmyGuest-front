<template>

  <ul class="order-list" v-if="orders">
    <orderPreview @changeStatus="changeStatus" v-for="order in  orders" :order="order" :key="order._id" />
  </ul>

</template>

<script>

import orderPreview from './order-preview-user.cmp.vue'


export default {
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    }
  },
  components: {
    orderPreview,

  },
  methods: {
  
    }
}

</script>
