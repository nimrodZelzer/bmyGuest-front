<template>
  <carousel style="width: 75vw;"   :items-to-show="12">
    <slide v-for="slide in labels.length - 1" :key="slide" class="slide-el flex column">
      <div @click="getLabel(labels[slide])" class="labels-wrapper">
        <img v-bind:src="'/img/lebels/' + labels[slide] + '.jpg'" class="labels-img" />
        <span class="now-rap">{{ labels[slide] }}</span>
      </div>
    </slide>
    <template #addons>
      <navigation />

    </template>
  </carousel>
</template>
 
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  props: {
    labelsArry: Object,
  },
  data() {
    return {
      labels: [],
      filterBy: {},
    }
  },
  created() {
    this.labels = this.labelsArry
    // console.log(this.labels)
  },
  methods: {
    async getLabel(newlabel){
      this.$emit('filterLabels',newlabel)
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>