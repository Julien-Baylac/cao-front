<template>
        <div class="map" id="map"></div>
</template>

<script>
import axios from 'axios'
import router from '../router'

/* eslint-disable */
export default {
name: 'Map',
components: {
},
data() {
  return {
    myBirdhouses:[],
    birdhouses:[],
    map: null,
    tileLayer: null,
    layers: [],
    }
  },
  mounted() {
    this.initMap();
    this.initLayers();
    this.locateUser();
    this.fetchData();
  },
  methods: {

    initLayers() {
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter(feature => feature.type === 'marker');

        markerFeatures.forEach((feature) => {
          feature.leafletObject = L.marker(feature.coords)
            .bindPopup(feature.name);
          //console.log(feature)
        });
      });
    },

    initMarker (lat,long,iconId,nameBirdhouses,birdhousesId) {
        var icon = L.icon({
            iconUrl: '../static/icons/types/'+iconId+'.png',

            iconSize:     [38, 57], // size of the icon
            iconAnchor:   [22, 70], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([lat, long], {icon: icon}).addTo(this.map).bindPopup("<b>"+nameBirdhouses+"</b><br/>"+"<a style='color: #7A7A7A;text-decoration:underline;' href='http://localhost:8080/fiche-cabane/"+birdhousesId+"'>voir la fiche</a>").openPopup();
    },

    fetchData() {
      axios.get('http://localhost:8000/api/show_all_birdhouses').then(response=>{
        this.birdhouses=response.data;
        this.initIcons();
      })
    },

    initIcons() {
      //création des icones sur la map

      var birdhousesId;
      var iconId;
      var lat;
      var long;
      var nameBirdhouses;

      for (let index = 0; index < this.birdhouses.length; index++) {

        birdhousesId = this.birdhouses[index].id;
        nameBirdhouses = this.birdhouses[index].name;
        iconId = this.birdhouses[index].id_type;
        lat = this.birdhouses[index].latitude;
        long = this.birdhouses[index].longitude;

        console.log(birdhousesId + ' / ' + nameBirdhouses + ' / ' + iconId +' / ' + lat + ' / '+ long);

        this.initMarker(lat,long,iconId,nameBirdhouses,birdhousesId);
      }
    },

    pushFicheCabane(id) {
      router.push("fiche-cabane/"+id);
    },

    initMap() {
      var options = {
        zoom : 16
      };
      var osmUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
          osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors',
          osm = new L.TileLayer(osmUrl,
            {
              maxZoom: 16,
              attribution: osmAttribution
            });
      var mapLayer = new L.TileLayer(osmUrl);

      this.map = new L.Map('map', options).addLayer(mapLayer);
      },

      locateUser() {
        this.map.locate(
          {
            setView : true,
            maxZoom: 16
          }
        );
        this.map.on('locationfound', function(e) {
            /* $('.jsLeafLoc').removeClass('hidden')
            */
        });
        },

  }
}
</script>

<style scoped>
  #map {
    height: 100vh;
  }
  .row {
    margin: 0px;
    padding: 0px;
  }
</style>
