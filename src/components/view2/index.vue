<template>
  <div id="custom-map">
  </div>
</template>

<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'

  export default {
    name: 'view2',
    data () {
      return {
        map: null
      }
    },
    mounted () {
      let baseTileLayer = L.tileLayer('http://mt3.google.cn/vt/lyrs=y@162000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}')
      this.map = L.map('custom-map', {
        center: [35.267, 108.7],
        zoom: 7
      })
      baseTileLayer.addTo(this.map)
    }
  }
</script>

<style scoped>
  .view2 {
    border: 3px solid cyan;
  }
  
  #custom-map {
    width: 100%;
    height: 100%;
  }
</style>
