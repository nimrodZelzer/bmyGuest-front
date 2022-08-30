<template>
    <section class="reservation-details-mobile">
        <h1>Your trip</h1>
        <div class="dates">
            <!-- <date-picker :dates="dates" /> -->
            <Datepicker v-model="dates" modelType="dd.MM.yyyy" @update:modelValue="handleDate" range
                calendarClassName="calendar" hideInputIcon calendarWidth="100" menuClassName="menu-dp">
                <template #trigger>
                    <section class="date-container-mb-det">
                        <div class="checkin-mb">
                            <span class="top">CHECK-IN</span> <br />
                            <span>{{ dates[0] }}</span>
                        </div>
                        <div class="checkout-mb">
                            <span class="top">CHECKOUT</span> <br />
                            <span>{{ dates[1] }}</span>
                        </div>
                    </section>
                </template>
            </Datepicker>
        </div>
        <div class="guests-mb-det" @click="isGuestsOpen = !isGuestsOpen">
            <span class="top">GUESTS</span>
            <span class="guests-bottom">{{ `${guestsCount} guests` }}</span>
        </div>
        <div class="container-btn-goexp">
            <button class="reserve-btn goexplore-det-btn" @click="reserveOrder">Reserve </button>
        </div>

        <guests-modal @guestsAmount="handleGuests" v-if="isGuestsOpen" />
    </section>
</template>

<script>
import guestsModal from '../guests-modal.cmp.vue';

export default {
    props: {
        stay: {
            type: Object,
            requird: true
        },
    },
    data() {
        return {
            dates: ['10.08.2022', '11.08.2022'],
            isGuestsOpen: false,
            children: 0,
            adults: 0,
            guestsCount: 0,
        }
    },
    created() { },
    methods: {
        handleDate(val) {
            console.log(val)
        },
        getCreateAt() {
            let hours = new Date().getHours()
            let min = new Date().getMinutes()
            let day = new Date().getDate();
            let munth = new Date().getMonth()
            let createAt = `${day}/${munth}  ${hours}:${min}`
            return createAt
        },
        async reserveOrder() {
            const orderDet = {
                checkin: this.dates[0],
                checkout: this.dates[1],
                guests: this.guestsCount,
                // guestsDetails: {
                //     guestId: this.loggedinUser._id,
                //     guestName: this.loggedinUser.fullname,
                //     imgUrl: this.loggedinUser.imgUrl,
                //     phone: this.loggedinUser.phone,
                //     email: this.loggedinUser.email
                // },
                price: this.stay.price,
                totalPrice: this.totalPrice,
                stayId: this.stay._id,
                totalNight: this.nights,
                host: {
                    hostId: this.stay.host.id,
                    hostName: this.stay.host.fullname,
                },
                stay: {
                    name: this.stay.name,
                    imgUrl: this.stay.imgUrls[0]
                },
                status: 'pending',
                createAt: this.getCreateAt(),
            }
            this.$store.dispatch({ type: 'saveOrder', order: orderDet })
            socketService.emit('order-added', orderDet)
            this.$router.push('/')
        },
        handleGuests(val) {
            console.log(val)
            this.guestsCount = val
        }

    },
    computed: {
    },
    components: {
        guestsModal
    }

}
</script>

<style>
.dp__selection_preview {
    display: none;
}
</style>