<template>
  <DoughnutChart :chartData="dataSets[0]" />
</template>

<script >
// import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: 'Home',
  props: {
    dataSets: Array
  },
  components: { DoughnutChart },
  created() {
    // console.log(this.dataSets[0].data, "|dataaaaaaaaa")
  },

};
</script>
