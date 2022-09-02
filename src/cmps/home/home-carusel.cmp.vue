<template>
  <carousel :items-to-show="12">
    <slide v-for="slide in labels.length - 1" :key="slide" class="slide-el flex column">
      <div class="labels-wrapper" @click="loadStays(labels[slide])">
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
  },
  methods: {
    loadStays(label) {

      const filterBy = {
        labels: label
      }
      this.$store.dispatch({ type: 'loadStays', filterBy })
      socketService.emit('filterStays', filterBy)
            console.log(this.date)

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