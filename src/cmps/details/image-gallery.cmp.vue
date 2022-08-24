<template >
  <div class="img-gallery" id="photos">
    <img @click="show(image)" v-for="image in images" :src="'/img/Images/' + image" alt="">
    <vue-easy-lightbox :visible="visibleRef" :imgs="imagesForDisplay" :index=imgIdx @hide="onHide"></vue-easy-lightbox>
  </div>
</template>
<script>

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visibleRef: false,
      imagesForDisplay: [],
      imgIdx: 0
    };
  },
  created() {
    this.imagesForDisplay = this.images.map(image => { return `/img/Images/${image}` })
  },
  methods: {
    onHide() {
      this.visibleRef = false
    },
    show(img) {
      this.visibleRef = true
      console.log(img)
      this.imgIdx = this.images.findIndex(image => image === img)


    }
  },
  computed: {
  },
  unmounted() { },
};
</script>
<style >
</style>