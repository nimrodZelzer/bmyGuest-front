<template >
    <div class="description-container-right">
        <header class="flex">
            <div class="txt-container" >
                <h3>{{stay.propertyType}} hosted by {{stay.host.fullname}}</h3>
                <p>{{stay.capacity.guests}}  guests  <span class="dot"></span> {{stay.capacity.bedrooms}} bedrooms <span class="dot"></span>  
                    {{stay.capacity.beds}} beds <span class="dot"></span> {{stay.capacity.bathrooms}} bathrooms</p>
            </div>
            <div>
                <img :src="'/img/peopleImages/' + this.avatarImg" class="avatar" alt="">
            </div>
        </header>
         <extras-details />
         <div class="summary-container" id="here">
             <p>{{stay.description}}</p>
         </div>
         <amenities-details :stay="stay" id="reviews" />
    </div>
</template>
<script>

import  extrasDetails  from "./extras-details.cmp.vue";
import  amenitiesDetails  from "./details-amenities.cmp.vue";


export default {
     props: {
        stay: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            avatarImg: this.stay.host.pictureUrl
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components:{
        extrasDetails,
        amenitiesDetails
    }
};
</script>
<style >
</style>