
<template class="order-preview">
  <div class="order-card flex">
    <div class="flex align-center order-right-card">
      <div class="left flex column">
        <div class="guest-details-container flex">
          <div class="content flex column">
            <div :class="order.status">
              {{ order.status }}
            </div>
            <span>Host name: {{ order.host.hostName }}</span>
            <span class="username">{{ order.stay.name }}</span>
            <span>{{ order.totalNight }}</span>
            <span style="font-family: airbnb-medium">Total price: <span>${{ order.totalPrice }}</span></span>
          </div>
        </div>
        <div class="dates">
          <span>Dates: <span style="font-family: airbnb-medium">{{ order.checkin.substring(0, 10) }} - {{
              order.checkout.substring(0, 10)
          }}</span></span>
        </div>
      </div>
    </div>
    <div class="right flex column">
      <img :src="'/img/Images/' + order.stay.imgUrl" alt="" />




    </div>
  </div>
</template>
<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      newOrder: null
    }
  },
  created() {
    this.newOrder = { ...this.order }
    socketService.on('order-change', (newOrder) => {
      this.order.status = newOrder.status
    })
  },
  methods: {
    changeStatus() {
      this.$store.dispatch({
        type: 'changeOrderStatus',
        order: this.newOrder
      })
    },
  },
}

</script>

