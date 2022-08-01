
<template class="order-preview" >

  <div class="order-card flex">
    <div class="flex align-center order-right-card">
      <!-- <img class="avatar " src="../../assets/images/avatar.png" alt=""> -->
      <div class="flex column">
        <h3>Requseted by: Nimrod Zelzer</h3>
        <span>Sent at:<span style="font-family: airbnb-medium">{{ order.createAt }}</span></span>
        <div class="flex column">
          <span>checkin: <span style="font-family: airbnb-medium">{{order.checkin.substring(0,10)}}</span></span>
          <span>checkout: <span style="font-family: airbnb-medium">{{order.checkout.substring(0,10)}}</span></span>
          <span>total price: <span style="font-family: airbnb-medium">${{order.totalPrice}}</span></span>
        </div>
      </div>
    </div>
    <img v-if="currStatus !== 'pending'" class="pending-svg" src="https://ouch-cdn2.icons8.com/vOhq1BA56sI6L8UjqxMz65PyBbu4kljDOa8nX_eI6ak/rs:fit:256:405/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzE2/LzY2MmEzZDQ4LWM5/MGQtNDM5MS05ZTAw/LTQ0YjcxMjZiNTI4/Ni5zdmc.png" alt="">
    <img v-else class="accepted-svg" src="https://ouch-cdn2.icons8.com/n38LLKzoHSwJuJM7c0yCzBmlFjxU0vrZljG97Nifg8E/rs:fit:256:365/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzQx/LzNjNTM3NGM4LTg5/MzYtNDdhOC1iNjU4/LTgwNzg3YmQwNWVi/Ni5zdmc.png" alt="">
    <select class="order-status" :v-model="currStatus"  @change="changeStatus">
      <option v-for="(status, idx) in this.statusArry" :key="idx">
        {{ status }}
      </option>
    </select>
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
      // currOrder: {
      //   _id: this.order._id,
      //   name: this.order.stay.name,
      //   checkIn: new Date(this.order.checkin).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" }),
      //   chackOut: new Date(this.order.checkout).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" }),
      //   guest: this.order.guestsDetails.guestName,
      //   totalPrice: this.order.totalPrice,
      //   status: this.order.status,
      // },
      statusArry: [
        'pending',
        'Confirm',
        'Rejected',
      ],
      currStatus: this.order.status
    }
  },
  created() {
    // console.log(this.currOrder)
  },
  methods: {
    // changeStatus(){
    //   let newOrder = {...this.order}
    //   newOrder.status = this.currStatus
    //   console.log(newOrder,"new order")
    //   this.$emit('changeStatus',newOrder)
    // }
    changeStat(){

    },
        changeStatus() {
      this.$store.dispatch({
        type: 'changeOrderStatus',
        order: this.order
      })
    },




  },
}

</script>

