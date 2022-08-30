<template>
    <div class="header-map-container">
        <h5>search by region</h5>
        <div class="map-image-container-header">
            <div @click="filterTo">
                <img src="/img/country-map/all-world.jpg" alt="all over the world'">
                <span>Im flexibale</span>
            </div>
            <div @click="filterToFrance">
                <img src="/img/country-map/france.webp" alt="france">
                <span>France</span>
            </div>
            <div @click="filterToIsrael">
                <img src="/img/country-map/israel.webp" alt="israel">
                <span>Israel</span>
            </div>
            <div @click="filterToSa">
                <img src="/img/country-map/south-america.webp" alt="south-america">
                <span>South America</span>
            </div>
            <div @click="filterToUs">
                <img src="/img/country-map/US.webp" alt="us">
                <span>United States</span>
            </div>
            <div @click="filterToItaly">
                <img src="/img/country-map/italy.webp" alt="italy">
                <span>Italy</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'header-map-search',
    props: {
        modelValue: String // previously was `value: String`
    },
    emits: ['update:modelValue'],
    data() {
        return {
        };
    },
    created() { },
    methods: {
        filterTo() {
            console.log('yay')
            this.$emit('update:modelValue', 'canada')

        },
        filterToItaly() {
            this.$emit('update:modelValue', 'Italy')

        },
        filterToFrance() {
            this.$emit('update:modelValue', 'France')

        },
        filterToIsrael() {
            this.$emit('update:modelValue', 'Israel')

        },
        filterToSa() {
            this.$emit('update:modelValue', 'South America')

        },
        filterToUs() {
            this.$emit('update:modelValue', 'United States')
        }
    },
    computed: {},
    unmounted() { },
};
</script>
<style >
</style>