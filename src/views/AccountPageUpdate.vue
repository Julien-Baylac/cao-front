<template>
  <div class="row">
    <div class="col s12 title_menu">
      <h1></h1>
    </div>
    <div class="menu col s12 ">
      <div class="row">
        <div class="col s3 offset-s2">
          <a href="#user"><img class="circle portrait" :src="pathImagePortrait"></a>
        </div>
        <div class="col s2 offset-s9">
            <ButtonClose class="btn_close" path="menu-page"></ButtonClose>
        </div>
      </div>
    </div>
    <div class="div_content">
      <div class="row description">
      <div class=" col s9">
          <p class="name_account">{{ name }}</p>
          <p class="city_account">{{ ville }}</p>
      </div>
      <div class="col s3">
          <router-link to="account-page"><a class="waves-effect waves-light btn-small btn_adherer btn-flat"><p style="margin-top:-4px;">Valider</p></a></router-link>
      </div>
      </div>
        <div class="row div_form">
          <form class="col s12">
              <div class="input-field">
                <select class="browser-default">
                  <option value="" disabled selected>Choisissez votre photo de profil</option>
                  <option value="portrait1.png">portrait 1</option>
                  <option value="portrait2.png">portrait 2</option>
                  <option value="portrait3.png">portrait 3</option>
                  <option value="portrait4.png">portrait 4</option>
                </select>
              </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Prénom</label>
              </div>
              <div class="input-field col s12">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Nom</label>
              </div>
              <div class="input-field col s12">
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate">
                <label for="password">Mot de passe</label>
              </div>
              <div class="input-field col s12">
                <select class="browser-default">
                  <option value="" disabled selected>Choisissez votre ville</option>
                  <option value="1">Rennes</option>
                  <option value="2">Marseille</option>
                  <option value="3">Toulouse</option>
                  <option value="4">Avignon</option>
                  <option value="3">Paris</option>
                  <option value="4">Lille</option>
                </select>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import ButtonClose from '../components/ButtonClose.vue'
import Cabane from '../components/Cabane.vue'
import ButtonAddCabane from '../components/ButtonAddCabane.vue'
import axios from 'axios'

export default {
  name: 'AccountPage',
  components: {
    HeaderPage,
    ButtonClose,
    Cabane,
    ButtonAddCabane
  },
  props: {
    token: String
  },
  data () {
    return {
      pathImagePortrait: '',
      pathImage: '../static/img/cabane/petit-chaudron.png',
      name: '',
      ville: '',
      nb_association: 1,
      nb_cabane: 2
    }
  },
  mounted () {
    axios.get('http://localhost:8000/api/show_user?api_token=' + this.token

    ).then(response => {
      this.name = response.data.first_name + ' ' + response.data.last_name
      this.ville = response.data.adresse
      this.pathImagePortrait = '../static/img/portrait/' + response.data.path_photo
    })
  }
}
</script>

<style scoped>
    .btn_add {
      border-bottom: 1px solid #DDDDE1;
    }
    .btn_img {
        color:white !important;
        background-color: #85ACCA;
        font-size: 10px;
        text-transform: capitalize;
    }
    .btn_adherer {
        background-color: #85ACCA;
        font-size: 10px;
        text-transform: capitalize;
        height: 25px;
        color:white;
        margin-top: 4px;
    }
    p {
      margin: 0px;
    }
    a {
      color: #4A4A4A;
    }
    .annonces {
      margin-bottom: 10px;
    }
    .portrait {
      height: 120px;
      width: 120px;
      margin-top: -70px;
    }
    .btn_close {
      margin-top: -75px;
    }
    .title_menu {
      border-bottom: 1px solid #DDDDE1;
      height: 100px;
    }
    .name_account {
      font-size: 14px;
      color: #4A4A4A;
    }
    .city_account {
      font-size: 13px;
      color: #9D9D9D;
      margin-bottom: 10px;
    }
    .description {
      padding-bottom: 10px;
      border-bottom: 1px solid #DDDDE1;
    }
    .div_content {
      padding-left: 35px;
      padding-right: 35px;
    }
    span {
      color: #525252;
    }
    .div_cabanes {
      font-size: 13px;
      color: #9D9D9D;
    }
    .div_form {
      padding-right: 7px;
    }
</style>
