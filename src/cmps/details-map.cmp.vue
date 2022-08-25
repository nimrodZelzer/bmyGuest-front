<template>
  <div id="mapTop" v-if="stay">
    <h2>Where you'll be</h2>
    <GMapMap :options="options" :center="center" :zoom="9" map-type-id="terrain" style=" height: 480px">
      <GMapCluster>
        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
          :draggable="false" @click="center = m.position" :icon='{
            url: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/house-icon.png",
            scaledSize: { width: 40, height: 40 },
            labelOrigin: { x: 16, y: -10 }
          }' />
      </GMapCluster>
    </GMapMap>
  </div>
</template>
<script>

export default {
  name: 'details-map',
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.center.lat = this.stay.loc.location.lat
    this.center.lng = this.stay.loc.location.lan
    this.markers[0].position.lat = this.stay.loc.location.lat
    this.markers[0].position.lng = this.stay.loc.location.lan
  },
  data() {
    return {
      center: { lat: 100, lng: 100 },
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ],
      options: {
        mapId: 'my style'
      }
    }
  }
}
</script>