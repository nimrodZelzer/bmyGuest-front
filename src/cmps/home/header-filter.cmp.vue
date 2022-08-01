<template >
  <div class="modal-overlay fixed-body" v-if="!openModal"></div>
  <section class="range-filter" style="z-index:50" v-if="!openModal">
    <div class="price-filter-container">
      <div class="top-of-filter">
        <div>Filters</div>
        <svg class="clickable" @click="closeModal" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true" role="presentation" focusable="false"
          style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;">
          <path d="m6 6 20 20"></path>
          <path d="m26 6-20 20"></path>
        </svg>
      </div>
      <div class="body-modal">
        <h2 class="filter-headline">Price range</h2>
        <h3 class="avg">
          The average nightly price is {{ getPricesAvg }}
        </h3>
        <div class="price-filter">
          <HistogramSlider :bar-height="100" :data="pricesToShow" :barWidth="11" :hideFromTo="true" :keyboard="true"
            :min="10" :max="4000" :grid="false" :lineHeight="2" :clip="false" :primaryColor="histogramMainColor"
            :holderColor="histogramSecondaryColor" @finish="sliderChanged" />
        </div>
        <div class="price-select-container">
          <div class="price-select">
            <div class="label">min price</div>
            <div class="price-change">
              <div class="dollar">$</div>
              <input v-model="filterBy.price.min" />

            </div>
          </div>
          <h3>–</h3>
          <div class="price-select">
            <div class="label">max price</div>
            <div class="price-change">
              <div class="dollar">$</div>
              <input v-model="filterBy.price.max" />
            </div>
          </div>
        </div>
      </div>
      <!-- {{ pricesToShow }} -->
      <div class="price-save">
        <button class="clear" @click="clearPriceRange">Clear all</button>
        <button class="save" @click="savePrices">Show {{ stays.length }} stays</button>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'header-filter',
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: {
        price: {
          min: 10,
          max: 4700 + "+",
        },
      },
      histogramMainColor: "#b0b0b0",
      histogramSecondaryColor: "#dddddd",
      activeBtn: "",
      openModal: false,
      // isPriceShown: false,
      isPriceRange: false,

      priceRange: "",
    }
  },
  created() {
  },
  computed: {
    pricesToShow() {
      return this.stays.map(stay => stay.price)
    },
    getPricesAvg() {
      if (!this.pricesToShow) return "0$";
      var avgsSum = this.pricesToShow.reduce((a, b) => a + b);
      avgsSum = avgsSum / this.pricesToShow.length;
      avgsSum = avgsSum.toFixed(1);
      return avgsSum + "$";
    },
    filteredPrices() {

    },
  },
  methods: {
    loadStays() {

      this.filterBy.min = this.filterBy.price.min
      this.filterBy.max = this.filterBy.price.max
      this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
      this.openModal = true



    },
    sliderChanged(values) {
      console.log(values)
      const valueMin = values.from;
      const valueMax = values.to;
      this.filterBy.price.min = valueMin;
      this.filterBy.price.max = valueMax;
    },
    clearPriceRange() {
      this.filterBy.price.min = 0;
      this.filterBy.price.max = 3000;
    },
    closeModal() {
      this.openModal = true
    },
    async savePrices() {
      this.loadStays()

    }
  },

}
</script>
