<template>
  <div id="map">
    <FlowLayer/>
    <!-- <FileDropper/> -->
  </div>
</template>

<script>
// import L from 'leaflet';
// import FileDropper from "./FileDropper"
// import "leaflet/dist/leaflet.css";

import FlowLayer from "@/components/FlowLayer";

export default {
  name: "Map",
  data: function () {
    return {
      zoom:10,
      center: this.$L.latLng(64.13548, -21.89541),
      url:'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=cc90e25d573f472084b8d227155590b7',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      map: null
    }
  },
  components: {
    // FileDropper
    FlowLayer
  },
  methods: {
    setupMap: function () {
      const mapDiv = this.$L.map("map").setView(this.center, this.zoom);
      this.$L.tileLayer(
          this.url,
          {
            attribution: this.attribution
          }
      ).addTo(mapDiv);
      this.map = mapDiv;
    },
    addLayer: function (layer) {
      // this.map.addLayer(layer);
      layer.addTo(this.map);
    }
  },
  mounted: function () {
    this.setupMap();
  }
}
</script>

<style scoped>
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>
