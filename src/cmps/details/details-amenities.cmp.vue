<template >
    <div class="amenities-container">
        <header>
            <h2>What this place offers</h2>
        </header>
        <ul class="clean-list">
            <li class="flex" v-for="amenity in amenities" :key="amenity">
                <!-- src\assets\images\amenities-svg\{{amenitiePics[amenity]}} -->
                <img :src="'src/assets/images/amenities-svg/' + amenitiePics[amenity]" alt="">
                {{ amenity }}
            </li>
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
            isActive: false,
            amenitiePics:
            {
                "TV": "tv.svg",
                "Sea view": "sea-view.svg",
                "Kitchen": "kitchen.svg",
                "Wifi": "wifi.svg",
                "Dedicated workspace": "dw.svg",
                "Parking": "parking.svg",
                "Shared hot tub": "hot-tub.svg",
                "Washing machine": "washing-machine.svg",
                "Patio or balcony": "balcony.svg",
                "Essentials": "essentials.svg",
                "amenity": "amenity.svg"
            }

        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },

};
</script>
<style >
</style>