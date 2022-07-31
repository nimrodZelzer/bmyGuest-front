<template >
    <div class="amenities-container">
        <header >
            <h2>What this place offers</h2>
        </header>
        <ul class="clean-list">
            <li class="flex" v-for="amenity in amenities" :key="amenity"> &nbsp;&nbsp;&nbsp; {{ amenity }}</li>
        </ul>
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
            amenities: this.stay.amenities,
            isActive: false
        };
    },
    created() { },
    methods: {
        
    },
    computed: {},
    unmounted() { },
};
</script>
<style lang="">
    
</style>