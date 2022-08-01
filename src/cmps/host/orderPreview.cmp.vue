
<template class="order-preview" >

  <div class="order-card flex">
    <div class="flex align-center order-right-card">
      <div class="left flex column">
        <div class="guest-details-container flex">
<<<<<<< HEAD
          <img :src="(order.guestsDetails?.imgUrl)?  order.guestsDetails.imgUrl : 'src/assets/images/avatar.png'" alt="">
=======
          <img :src="(order.guest?.imgUrl)?  order.guest.imgUrl : setupImgUrl()" alt="">
>>>>>>> 0af1ca51fda31ca98fcfa2da3cd58acbf4f4b89d
          <div class="content flex column">
            <span class="username">{{order.guestsDetails.guestName}}</span>
            <span>{{(order.guestsDetails?.phone)?  order.guestsDetails.phone : "054-553386323"}}</span>
            <span>{{(order.guestsDetails?.email)?  order.guestsDetails.email : "snfjcw@gmail.com"}}</span>
          </div>
        </div>
        <div class="dates">
          <span>Dates: <span style="font-family: airbnb-medium">{{ order.checkin.substring(0, 10) }} - {{ order.checkout.substring(0, 10) }}</span></span>
        </div>
      </div>
    </div>
      <div class=" right flex column" > 
        <select class="order-status" v-model="newOrder.status" @change="changeStatus" :class="newOrder.status">
          <option v-for="(status, idx) in this.statusArry" :key="idx" :class="status">
            {{ status }}
          </option>
        </select>  
        <span>Total price: <span style="font-family: airbnb-medium">${{ order.totalPrice }}</span></span>
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
      statusArry: [
        'Pending',
        'Confirm',
        'Rejected',
      ],
      newOrder: null
    }
  },
  created() {
   this.newOrder={...this.order}
   console.log('orderr', this.newOrder);
  },
  methods: {
    // changeStatus(){
    //   let newOrder = {...this.order}
    //   newOrder.status = this.currStatus
    //   console.log(newOrder,"new order")
    //   this.$emit('changeStatus',newOrder)
    // }

    changeStatus() {
      console.log(this.order.status)
      this.$store.dispatch({
        type: 'changeOrderStatus',
        order: this.newOrder
      })
    },
<<<<<<< HEAD
=======
    setupImgUrl() {
      return new URL(`../../assets/images/avatar.png`, import.meta.url).href;
    },
>>>>>>> 0af1ca51fda31ca98fcfa2da3cd58acbf4f4b89d
  },
  computed: {
  }
}

</script>

