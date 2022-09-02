<template>
    <section class="gallery-container">
            <div class="img-gallery-mobile " v-for="pic in stay.imgUrls.length" :key="pic" :class= "addClass(pic)">
                <img v-bind:src="'/img/Images/' + stay.imgUrls[pic - 1]" alt="" />
            </div>


    </section>
</template>

<script>


export default {
    props: {
        stay: {
            type: Object,
            requird: true
        },
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        addClass(pic){
            return 'img_'+pic

        }


    },
    computed: {
    },
    components: {

    }

}
</script>

<style>
</style>