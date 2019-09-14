<template>
    <div>
        <HeaderPage name="Créer un compte" description="" path="/menu-page"></HeaderPage>
        <div class="row div_form">
          <form class="col s12">
              <div class="input-field">
                <select class="browser-default" v-model="path_photo">
                  <option value="" disabled selected>Choisissez votre photo de profil</option>
                  <option value="portrait1.png">portrait 1</option>
                  <option value="portrait2.png">portrait 2</option>
                  <option value="portrait3.png">portrait 3</option>
                  <option value="portrait4.png">portrait 4</option>
                </select>
              </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="first_name" type="text" class="validate" v-model="first_name">
                <label for="first_name">Prénom</label>
              </div>
              <div class="input-field col s12">
                <input id="last_name" type="text" class="validate" v-model="last_name">
                <label for="last_name">Nom</label>
              </div>
              <div class="input-field col s12">
                <select class="browser-default" v-model="adresse">
                  <option value="" disabled selected>Choisissez votre ville</option>
                  <option value="rennes">Rennes</option>
                  <option value="marseille">Marseille</option>
                  <option value="toulouse">Toulouse</option>
                  <option value="avignon">Avignon</option>
                  <option value="paris">Paris</option>
                  <option value="lille">Lille</option>
                </select>
              </div>
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" v-model="email">
                <label for="email">Email</label>
              </div>
              <div class="error">{{ error_password }}</div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" v-model="password">
                <label for="password">Mot de passe</label>
              </div>
              <div class="input-field col s12">
                <input id="c_password" type="password" class="validate" v-model="c_password">
                <label for="c_password">Confirmation du mot de passe</label>
              </div>
            </div>
            <a @click="post_infos" class="waves-effect waves-light btn btn-grey btn-flat">Valider</a>
          </form>
        </div>
    </div>
 </template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import AutoCompleteInput from '../components/AutoCompleteInput.vue'
import axios from 'axios'
import router from '../router'

export default {
  name: 'CreateAccount',
  components: {
    HeaderPage,
    AutoCompleteInput
  },
  props: {
    token: String
  },
  mounted () {
  },
  methods: {
    post_infos () {
      if (this.password !== this.c_password) {
        this.error_password = 'Les mots de passe ne correspondent pas.'
      } else {
        axios.post('http://localhost:8000/api/connection', {
          path_photo: this.path_photo,
          first_name: this.first_name,
          last_name: this.last_name,
          adresse: this.adresse,
          email: this.email,
          password: this.password,
          c_password: this.c_password
        }).then(response => {
          router.push('account-page')
          this.$emit('giveToken', response.data.api_token)
        })
      }
    }
  },
  data () {
    return {
      path_photo: '',
      first_name: '',
      last_name: '',
      adresse: '',
      email: '',
      password: '',
      c_password: '',
      error_password: ''
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
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
