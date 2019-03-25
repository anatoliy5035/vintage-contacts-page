import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCOzPCEfNQP9wCt0p9UHRcU5PObcxNYtlU'
  }
})
Vue.component('InfoWindow', VueGoogleMaps.InfoWindow)
Vue.component('GmapCluster', GmapCluster)
