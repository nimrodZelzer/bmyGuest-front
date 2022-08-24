<template  >
    <div class="bar-review-container">
        <div class="left-bar-container">
            <div class="rating-container ">
                <span>Communication</span>
                <div class="flex column  bar-preview">
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.communication}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.communication / 2).toFixed(1) }}</span>
                </div>
            </div>
            <div class="rating-container ">
                <span>Cleanliness</span>
                <div class="flex column bar-preview">
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.cleanliness}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.cleanliness / 2).toFixed(1) }}</span>
                </div>
            </div>
            <div class="rating-container ">
                <span>Check-in</span>
                <div class="flex column  bar-preview">
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.checkin}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.checkin / 2).toFixed(1) }}</span>
                </div>
            </div>
        </div>
        <div class="right-bar-container">
            <div class="rating-container ">
                <span>Accuracy</span>
                <div class="flex column  bar-preview"  >
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.accuracy}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.accuracy / 2).toFixed(1) }}</span>
                </div>
            </div>
            <div class="rating-container ">
                <span>Location</span>
                <div class="flex column  bar-preview">
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.location}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.location / 2).toFixed(1) }}</span>
                </div>
            </div>
            <div class="rating-container ">
                <span>Value</span>
                <div class="flex column  bar-preview">
                    <div class="bar-container">
                        <div class="bar" :style="{width:`${precentages.value}%`}"></div>
                    </div>
                    <span>{{ (stay.reviewScores.value / 2).toFixed(1) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        stay: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            precentages:{
                communication:((this.stay.reviewScores.communication / 2).toFixed(1)) * 20,
                cleanliness:((this.stay.reviewScores.cleanliness / 2).toFixed(1)) * 20,
                checkin:((this.stay.reviewScores.checkin / 2).toFixed(1)) * 20,
                accuracy:((this.stay.reviewScores.accuracy / 2).toFixed(1)) * 20,
                location:((this.stay.reviewScores.location / 2).toFixed(1)) * 20,
                value:((this.stay.reviewScores.value / 2).toFixed(1)) * 20,
            }
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
<style lang="">
    
</style>