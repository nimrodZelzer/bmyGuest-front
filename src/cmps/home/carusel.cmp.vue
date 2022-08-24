<template  >
  <Carousel :wrap-around="false">
    <slide v-for="slide in this.imgArry.length" :key="slide">
      <div v-if="this.imgArry" class="carousel__item animate__backInRight" @mouseover="shouldShow = true" @mouseleave="shouldShow = false">
        <img v-bind:src="'/img/Images/' + imgArry[imgidx]" />
        <div class="image-btn-wraper" v-if="shouldShow">
          <button class="image-btn start" v-bind:class="{ hide: imgidx === 0 }" @click.stop="inc(-1)">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
              focusable="false"
              style="display: block; fill: none; stroke: currentcolor; stroke-width: 4; overflow: visible;">
              <g fill="none">
                <path
                  d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
                </path>
              </g>
            </svg>
          </button>
          <button class="image-btn end" @click.stop="inc(1)">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
              focusable="false" style=" fill: none;  stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
              <g fill="none">
                <path
                  d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932">
                </path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
  name: 'Autoplay',
  props: {
    stay: Object,
  },
  data() {
    return {
      imgArry: [],
      imgidx: 0,
      shouldShow: false,

    }
  },
  methods: {
    inc(dif) {
      var idx = this.imgidx
      idx += dif
      if (idx === this.imgArry.length){
        idx=1
      }
      if (idx < 0) {
        idx = this.imgArry.length - 1
      }
      this.imgidx = idx
    }
  },
  created() {
    this.imgArry = this.stay.imgUrls
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>