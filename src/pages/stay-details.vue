<template >

  <div v-if="stay" id="photos" class="stay-details main-layout">
    <deatils-sticky-header @scrollTo="scrollTo" :bottom="bottom" :priceSummary="priceSummary" v-if="windowTop > 660" />
    <details-header v-if="stay" :stay="stay" />
    <img-gallery :images="stay.imgUrls" />
    <div class="description-layout flex">
      <details-description :stay="stay" />
      <reservation-details class="res" :stay="stay" />
    </div>
    <details-reviews :stay="stay" />
    <!-- <details-map class="deatils-map" :stay="stay" /> -->
    <!-- <details-reviews :stay="stay" /> -->
    <details-map class="deatils-map" :stay="stay" />
  </div>
  <img v-else class="loader" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="">
    <app-footer />
</template>
<script>
import detailsMap from '../cmps/details-map.cmp.vue';
import imgGallery from '../cmps/details/image-gallery.cmp.vue';
import detailsHeader from '../cmps/details/details-header.cmp.vue';
import reservationDetails from '../cmps/details/reservation-details.cmp.vue';
import detailsDescription from '../cmps/details/details-description.cmp.vue';
import deatilsStickyHeader from '../cmps/details/deatils-sticky-header.cmp.vue';
import detailsReviews from '../cmps/details/details-reviews.cmp.vue';
import appFooter from '../cmps/app-footer.cmp.vue';
export default {
  data() {
    return {
      stay: null,
      images: null,
      windowTop: null,
      priceSummary: {
        price: 0,
        reviewsLength: 0,
        rating: 0
      },
      bottom: null,

    };
  },
  async created() {
    const { stayId } = this.$route.params;
    try {
      await this.$store.dispatch({ type: 'loadById', id: stayId })
      
      if (!stayId) return this.$router.push('/stay');
      this.stay = this.$store.getters.getCurrStay
      this.priceSummary.price = this.stay.price
      this.priceSummary.reviewsLength = this.stay.reviews.length
      this.priceSummary.rating = this.stay.reviewScores.rating
      const page = "stayDetails";
      this.$store.commit({ type: "setCurrPage", page });
    } catch (err) {
      console.log("Error in getById stays (store)", err)
      throw err
    }
    console.log('det:',this.stay)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY
    },
    windowPlace() {
      this.bottom = document.querySelector('.res').getBoundingClientRect().bottom
    },
    scrollTo(refName) {
      console.log(this.$refs)
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("scroll", this.windowPlace)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("scroll", this.windowPlace)
  },
  computed: {},
  unmounted() { },
  components: {
    imgGallery,
    detailsHeader,
    reservationDetails,
    detailsDescription,
    deatilsStickyHeader,
    detailsReviews,
    appFooter,
    detailsMap,
  },
};
</script>
