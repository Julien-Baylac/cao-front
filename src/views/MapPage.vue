<template>
  <div class="container-fluid" id="mapPage">
    <Map/>
    <div class="fixed-action-btn">
      <router-link to="/menu-page">
        <a class="btn-floating btn-large white">
          <i class="large material-icons">menu</i>
        </a>
      </router-link>
    </div>
  </div>
 </template>

<script>

import Map from '../components/Map.vue'

export default {
  name: 'MapPage',
  components: {
    Map
  },
  mounted () {
  },
  methods: {
  },
  props: {
    token: String
  }
}

</script>

<style scoped>
  i {
    color: #4A4A4A;
  }
  .row {
    margin: 0px;
    padding: 0px;
  }

</style>
