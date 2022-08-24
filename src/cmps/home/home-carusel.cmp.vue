<template>
  <Carousel :items-to-show="12">
    <Slide v-for="slide in labels.length - 1" :key="slide">
      <div class="labels-wrapper carousel__item">
        <img v-bind:src="'/img/lebels/' + labels[slide] + '.jpg'" class="labels-img" />
        <span class="now-rap">{{ labels[slide] }}</span>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
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
    }
  },
  created() {
    this.labels = this.labelsArry
    // console.log(this.labels)
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>