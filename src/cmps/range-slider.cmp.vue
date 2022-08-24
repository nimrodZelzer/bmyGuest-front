<template>
  <div class="range-slider">
    <HistogramSlider style="margin: 200px auto" :width="600" :prettify="prettify" :bar-height="100" :data="stays.price"
      :force-edges="false" :drag-interval="true" :colors="['#4facfe', '#00f2fe']" :min="0" :max="10000" />
    {{ prices }}
  </div>
</template>

<script>

export default {
  name: "price-range",
  props: {
    stays: { type: Array }
  },
  data() {
    return {
      data: this.stays.map((stay => stay.price)),
      prettify: function (ts) {
        return new Date(ts).toLocaleDateString("en", {
          price: "numeric",
        });
      }
    }
  },

  created() {
    // console.log(this.stays)
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
    staysPrice() {
      const stayPrices = this.stays.filter((stay => {
        stay === stay.price
      }))
      // console.log(stayPrices)
      // this.data.price = stayPrices
      return stayPrices
    },

  }
};
</script>
<style>
</style>

<!-- <template>
  <div>
    <h2>Price range</h2>
    <p>The average nightly price is $300</p>
    <HistogramSlider style="margin: 200px auto" :width="600" :bar-height="100" :prices="prices" :drag-interval="true"
      :force-edges="false" :colors="['#4facfe', '#00f2fe']" :min=0 :max=10000 />
  </div>
</template>

<script>


export default {
  name: "App",
  props: {
    prices: { type: Array }
  },
  data() {
    return {

    };
  }
};
</script> -->