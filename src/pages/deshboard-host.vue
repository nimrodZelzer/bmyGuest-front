
<template>
    <section class="dashboard-host-page main-layout">
        <div class="dash-board-header">
            <h2>pending/accepted</h2>
            <span>{{ this.orders.length }} items</span>
        </div>
        <div class="dash-board-details flex ">
            <order-list @changeStatus='changeStatus' :orders="orders" />
            <div class="dash-board-summary">
                <div class="summary-header flex align-center">
                    <div>
                        <h2>Hosting Summary</h2>
                        <h3>Fantastic job!</h3>
                        <p>guests love what your doing keep up the good work</p>
                        <span>view details</span>
                    </div>
                    <img src="src\assets\images\success-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import orderList from "../cmps/host/order-list.cmp.vue"
import totalPriceChart from "../cmps/host/total-price-chart.cmp.vue"
import orderByMonths from "../cmps/host/order-by-months.cmp.vue"
import stayList from "../cmps/home/stay-list.cmp.vue"
import selectStays from "../cmps/host/select-stays.cmp.vue"
import orderFilter from "../cmps/host/order-filter.cmp.vue"
import { socketService } from "../services/socket.service.js"
export default {
    name: 'deshboard-host',
    props: {
        user: Object,
    },
    data() {
        return {
            orderByMonth: null,
            orders: null,
            stays: null,
            prices: null,
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ],
        }
    },
    async created() {

        try {
            const orders = await this.$store.dispatch({ type: 'getOrderByHost', id: '62e0e9b1dd13b00af4e80283' })
            this.orders = orders
            socketService.on('order-added', this.addOrder)
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
        try {
            const stays = await this.$store.dispatch({ type: 'getStaysByHost', id: '62e0e9b1dd13b00af4e80283' })
            this.stays = stays
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }

        try {
            this.prices = await this.$store.getters.getTotalPrices
            this.datasets[0].data.push(prices)


        } catch (err) {
            console.log(" Error in read orders by price", err)
            throw err
        }
        try {
            this.orderByMonth = await this.$store.getters.getOrderPerMonth
            console.log(this.orderByMonth)
        } catch (err) {
            console.log(" Error in read orders by price", err)
            throw err
        }



    },
    methods: {
        dataset() {
            return [
                {
                    data: this.prices,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ]
        },
        addOrder(order) {
            this.orders.push(order)
        },
        changeStatus(order) {
            this.$store.dispatch({
                type: 'saveOrder',
                order
            })
            console.log(order)
            // this.$store.dispatch({
            //     type: 'getOrderByHost', hostId: "62e0e9b1dd13b00af4e80283"
            // })
        },
    },
    components: {
        orderList,
        totalPriceChart,
        orderByMonths,
        stayList,
        selectStays,
        orderFilter,
    }
}



</script>




