<template >
    <div class="stay-reserv-preview " @click="goToDetails">
    <h3 class="pink bold">Stay details:</h3>
    <div class="flex stay-container">
         <img :src="'/img/Images/' + stay.imgUrls[0]" alt="">
        <div class="left-container flex column">

            <h3>{{ stay.name }}</h3>
            <h5>{{ stay.roomType }}</h5>

            <div class="bottm-txt flex ">
                <span class="wish-review"><span><i class="fa fa-star red"></i></span>{{ stay.reviewScores.rating / 2 / 10
                }}
                    <span class="gray">({{ stay.reviews.length }} reviews)</span></span>
                <span class="price">${{ stay.price }} &nbsp;</span>
            </div>
        </div>


    </div>
       
    </div>

</template>
<script>
import carusel from '../cmps/home/carusel.cmp.vue';
export default {
    props: {
        stay: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            nights: 0
        };
    },
    created() {

    },
    methods: {
        reservationValue() {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            const utc1 = Date.UTC(this.order.startDate.getFullYear(), this.order.startDate.getMonth(), this.order.startDate.getDate());
            const utc2 = Date.UTC(this.order.endDate.getFullYear(), this.order.endDate.getMonth(), this.order.endDate.getDate());
            this.nights = (Math.floor((utc2 - utc1) / _MS_PER_DAY))
        },
        goToDetails() {
            this.$router.push(`/stay/${this.stay._id}`)
        }
    },
    computed: {},
    unmounted() { },
    components: {
        carusel
    }
};
</script>
<style >
.width {
    width: 100px;
    height: 100px;
    margin: auto;
}
</style>