<template >
    <div class="sticky-detail-header ">
        <div class="sticky-detail-nav">
            <button @click="scrollMeTo('photos')">Photos</button>
            <button @click="scrollMeTo('here')">Amenities</button>
            <button @click="scrollMeTo('reviews')">Reviews</button>
            <button @click="scrollMeTo('mapTop')">Location</button>
        </div>
        <div class="flex row" v-if="bottom <= 0">      
            <div  class="flex column reserve-details-sticky">
                <span><span class="price">${{priceSummary.price}}</span> night</span>
                <span style="font-size:12px; font-family: airbnb-medium;"><i class="fa fa-star"></i> &nbsp;{{(priceSummary.rating / 2 / 10).toFixed(2) }} <span class="dot"></span>
                    <span style="color: gray ; text-decoration: underline; padding-left: 3px;" >{{ priceSummary.reviewsLength }} reviews</span></span>
            </div>
            <btn @click="scrollMeTo('here')" class="reserve-btn" >Reserve</btn>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bottom: {
            type: Number,
            required: true,
        },
          priceSummary: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    created() { },
    methods: {
        log() {
            // console.log(this.bottom)
        },
        scrollMeTo(refName) {
            document.getElementById(refName).scrollIntoView({ behavior: 'smooth' });

        }
    },
    computed: {},
    unmounted() { },
};
</script>
<style >
</style>