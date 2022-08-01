<template >
    <div class="amenities-container">
        <header>
            <h2>What this place offers</h2>
        </header>
        <ul class="clean-list">
            <li class="flex" v-for="amenity in amenities" :key="amenity">
                <!-- src\assets\images\amenities-svg\{{amenitiePics[amenity]}} -->
                <!-- <img :src="'src/assets/images/amenities-svg/' + amenitiePics[amenity]" alt=""> -->
                <img :src="getAmenitieSrc(amenitiePics[amenity])">
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
                "TV": "tv",
                "Sea view": "sea-view",
                "Kitchen": "kitchen",
                "Wifi": "wifi",
                "Dedicated workspace": "dw",
                "Parking": "parking",
                "Shared hot tub": "hot-tub",
                "Washing machine": "washing-machine",
                "Patio or balcony": "balcony",
                "Essentials": "essentials",
                "amenity": "amenity"
            }

        };
    },
    created() { },
    methods: {
        getAmenitieSrc(amenitieName) {
            return new URL(`../../assets/images/amenities-svg/${amenitieName}.svg`, import.meta.url).href;
        }
    },
    computed: {},
    unmounted() { },

};
</script>
<style >
</style>