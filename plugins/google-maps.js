import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCrFpScqO9_Oi8IrRUgJJTqS6ABH5UUWXI'
  }
})
Vue.component('InfoWindow', VueGoogleMaps.InfoWindow)
Vue.component('GmapCluster', GmapCluster)
