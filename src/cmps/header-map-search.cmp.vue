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
    data() {
        return {
            searchVal:""
        };
    },
    created() { },
    methods: {
         closeHeader(){
            this.$emit('openHeader', false)
            console.log("here")
            window.scrollBy(100, 0);

        },
        filterTo(){ 
            this.$router.push('/explore')
            this.closeHeader()
            },
        filterToItaly(){ 
            this.$router.push('/explore/Italy')
            this.closeHeader()
            },
        filterToFrance(){ 
            this.$router.push('/explore/France')
            this.closeHeader()
            },
        filterToIsrael(){ 
            this.$router.push('/explore/Israel')
            this.closeHeader()
            },
        filterToSa(){ 
            this.$router.push('/explore/South America')
            this.closeHeader()
            },
        filterToUs(){
             this.$router.push('/explore/United States')
             this.closeHeader()
             }
    },
    computed: {},
    unmounted() { },
};
</script>
<style >
    
</style>