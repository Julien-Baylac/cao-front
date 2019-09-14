<template>
    <div>
        <HeaderPage name="Créer une cabane" description="Remplir les champs" path="mescabanes-page"></HeaderPage>
        <div class="row div_form">
          <form class="col s12">
                <div>
                  <select class="browser-default" v-model="pathImage">
                    <option value="" disabled selected style="color: #919091;">Photo de la cabane</option>
                    <option value="petit-chaudron.png">Restaurant 1</option>
                    <option value="restaurant2.png">Restaurant 2</option>
                    <option value="restaurant3.jpg">Restaurant 3</option>
                  </select>
                </div>
            <div class="row">
                <div class="input-field col s12">
                  <input id="name" type="text" class="validate" v-model="name">
                  <label for="name">Nom</label>
                </div>

                <div class="input-field col s12">
                  <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
                  <label for="description">Description</label>
                </div>
                <div>
                  <select class="browser-default" v-model="type">
                    <option value="" disabled selected style="color: #919091;">Type de cabane</option>
                    <option value="1">Restaurant</option>
                    <option value="2">Bar</option>
                    <option value="3">Jeux</option>
                    <option value="4">Coiffeur</option>
                    <option value="5">Cinéma</option>
                    <option value="6">Crêche</option>
                    <option value="7">Magasin de vétement</option>
                  </select>
                </div>
                <div class="input-field">
                  <select class="browser-default" v-model="ville">
                    <option value="" disabled selected>Choisissez votre ville</option>
                    <option value="Rennes">Rennes</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Toulouse">Toulouse</option>
                    <option value="Avignon">Avignon</option>
                    <option value="Paris">Paris</option>
                    <option value="Lille">Lille</option>
                  </select>
                </div>
                <div class="input-field col s12">
                  <textarea id="Latitude" class="materialize-textarea" v-model="latitude"></textarea>
                  <label for="Latitude">Latitude</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="Longitude" class="materialize-textarea" v-model="longitude"></textarea>
                  <label for="Longitude">Longitude</label>
                </div>
            </div>
            <a class="waves-effect waves-light btn btn-grey btn-flat" @click="post_infos_cabane">Valider</a>
          </form>
        </div>
    </div>
 </template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import axios from 'axios'
import router from '../router'

export default {
  name: 'CreateAccount',
  components: {
    HeaderPage
  },
  props: {
    token: String
  },
  data () {
    return {
      pathImage: '',
      name: '',
      description: '',
      ville: '',
      type: '',
      latitude: '',
      longitude: ''
    }
  },

  methods: {
    post_infos_cabane () {
      axios.post('http://localhost:8000/api/create_birdhouses', {
        pathImage: this.pathImage,
        name: this.name,
        description: this.description,
        ville: this.ville,
        type: this.type,
        latitude: this.latitude,
        longitude: this.longitude,
        api_token: this.token
      }).then(response => {
        router.push('fiche-cabane/' + response.data)
      })
    }
  }

}
</script>

<style scoped>
  .div_form {
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 35px;
    margin-bottom: 50px;
  }
  .btn-grey {
    background-color: #E4E4E9 !important;
  }
  .btn {
      margin-top: 10px;
      width: 100%;
      background-color: #C6CBD4;
      color: #333333;
      text-transform: capitalize;
      box-shadow: #E4E4E9 !important;
  }
</style>
