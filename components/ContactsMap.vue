<template>
  <div class="c-map">
    <div class="container">
      <div class="c-map-box">
        <div class="c-map-l">
          <div class="c-section-title">Our Offices</div>
          <div class="c-cities-list">
            <!-- eslint-disable -->
            <a v-for="city in citiesGeoData" 
               :key="city.id"
               :class="{ 'active': activeCityIdCpt === city.id }"
               @click="changeActiveCity(city.id)"
               href="javascript:;">{{ city.city }}
            </a>
          </div>
          <div class="c-city-info">
            <div class="c-company-name">{{ activeCityObj.company }}</div>
            <div class="c-company-address">
              <span v-for="(address, key) in activeCityObj.cityInfo" :key="key" class="c-address-line">{{address}}</span>
            </div>
          </div>
        </div>
        <!-- Google map -->
        <div class="c-map-r">
          <g-map :geo-position="activeCityObj.cords" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from '~/components/Map'
export default {
  name: 'ContactsMap',
  components: {
    GMap: Map
  },
  data() {
    return {
      citiesGeoData: [
        {
          id: 0,
          city: 'Kiyv',
          cords: {
            lat: 50.45592,
            lng: 30.608597
          },
          company: 'Global Message Services Ukraine LLC',
          cityInfo: ['Kuiv, Stepan Bandera, 33', '02066', 'Ukraine']
        },
        {
          id: 1,
          city: 'New york',
          cords: {
            lat: 40.736711,
            lng: -74.285975
          },
          company: 'Vintage USA',
          cityInfo: ['New york, New york Bandera, 11', '2221', 'USA']
        },
        {
          id: 2,
          city: 'Guangzhou',
          cords: {
            lat: 23.159033,
            lng: 113.314498
          },
          company: 'Guangzhou Guangzhou',
          cityInfo: ['Guangzhou, 22', '02066', 'China']
        },
        {
          id: 3,
          city: 'Barcelona',
          cords: {
            lat: 41.39164,
            lng: 2.172112
          },
          company: 'Spain Vintage',
          cityInfo: ['Barcelona Bandera, 33', '02066', 'Spain']
        }
      ],
      activeCityId: null
    }
  },
  computed: {
    activeCityIdCpt() {
      return this.activeCityId ? this.activeCityId : this.citiesGeoData[0].id
    },
    activeCityObj() {
      return this.citiesGeoData.filter(city => city.id === this.activeCityIdCpt)[0]
    }
  },
  methods: {
    changeActiveCity(id) {
      this.activeCityId = id
    }
  }
}
</script>
