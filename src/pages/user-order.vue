
<<<<<<< HEAD
<template >
=======
<template>
>>>>>>> d1eda8d4cfacd05f43f8205f5b8c9e884e21f5f0
    <section v-if="user" class="orser-page main-layout">
        <div class="dash-board-header">
            <h1>Your Reservation</h1>
            <span>{{ this.orders.length }} items</span>
        </div>
        <div class="dash-board-details flex ">
            <order-list @changeStatus='changeStatus' :orders="orders" />
        </div>
    </section>
</template>

<script>
import orderList from "../cmps/host/order-list.cmp.vue"


export default {
    name: 'deshboard-host',
    props: {
        user: Object,
    },
    data() {
        return {
            user:null,
            orders: null,
    
        }
    },
    async created() {
        try {
            this.user = await this.$store.getters.loggedinUser
            console.log(this.user)
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
        try {
          
             
             this.orders=await this.$store.dispatch({ type: 'getOrderByUser', id: this.user._id})
             console.log(this.orders)
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
    },
    methods: {

    },


    components: {
        orderList,


    },
    computed: {

    },
}
</script>
