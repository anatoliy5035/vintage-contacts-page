<template>
  <gmap-map :options="{ styles: customStylesData }" :center="geoPosition" :zoom="12" class="l-map-form">
    <gmap-marker :position="geoPosition" :clickable="true" :draggable="true" :icon="icon"></gmap-marker>
  </gmap-map>
</template>

<script>
import customStyles from '~/static/googleMapStyle.json'
export default {
  name: 'Map',
  props: {
    geoPosition: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      icon: {
        url: 'img/marker.svg',
        size: { width: 34, height: 34, f: 'px', b: 'px' }
      }
    }
  },
  computed: {
    customStylesData() {
      return customStyles
    }
  }
}
</script>
