<template>
  <div>
      <div>
          <HeaderPage name="Préférences" description="" path="/menu-page"></HeaderPage>
          <Presentation title="Mes Préférences" description="Vous pouvez paramêtrer l'application"></Presentation>
      </div>
      <div class="div_content">
          <div class="row valign-wrapper">
                <div class="col s6">
                  <p style="font-size:14px;">Notifications</p>
                </div>
                <!-- Switch -->
                <div class="switch col s6">
                  <label class="right-align">
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On
                  </label>
                </div>
          </div>
          <div class="row valign-wrapper">
                <div class="col s6">
                  <p style="font-size:12px;">Traduction en <span>facile à lire et à comprendre</span></p>
                </div>
                <!-- Switch -->
                <div class="switch col s6">
                  <label class="right-align">
                    Off
                    <input type="checkbox">
                    <span class="lever"></span>
                    On
                  </label>
                </div>
          </div>
      </div>
      <div>
      <Presentation title="Sytème de tri" description="Faites le tri parmis les badges et les types de cabanes que vous souhaitez voir apparraître sur la carte"></Presentation>
      </div>
      <div class="div_content_tri">
          <div id="div_disconnected">
              <p style="font-size:12px;color: #525252;margin-top:30px;">Vous devez être connecté.e pour accéder au système de tri afin que vos préférences soient sauvegardées</p>
              <router-link to="/login-page"><a class="waves-effect waves-light btn btn-grey btn-flat">Se connecter</a></router-link>
          </div>
          <div id="div_connected">
              <div v-for="(n,index) in name" :key="n" class="div_list_selectors" >
                  <Selector :name="n" :description="description[index]" :pathImage="pathImage[index]" :route="route[index]"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Presentation from '../components/Presentation.vue'
import axios from 'axios'
import router from '../router'
import Selector from '../components/Selector.vue'

export default {
  name: 'PreferencesPage',
  components: {
    HeaderPage,
    Presentation,
    Selector
  },
  data () {
    return {
      name: [
        'Types',
        'Design',
        'Services',
        'Informations'
      ],
      description: [
        'Choisir les types des cabanes qui m\'interessent',
        'Choisir les badges de design qui m\'interessent',
        'Choisir les badges de service qui m\'interessent',
        'Choisir les badges d\'information qui m\'interessent'
      ],
      pathImage: [
        '../static/icons/badges/birdhouse.svg',
        '../static/icons/badges/design.svg',
        '../static/icons/badges/service.svg',
        '../static/icons/badges/information.svg'
      ],
      route: [
        '/',
        '/',
        '/',
        '/'
      ]
    }
  },
  props: {
    token: String
  },
  mounted () {
    if (this.token) {
      axios.get('http://localhost:8000/api/show_user?api_token=' + this.token
      ).then(response => {
        this.pathImagePortrait = '../static/img/portrait/' + response.data.path_photo
      })
      document.getElementById('div_disconnected').style.display = 'none'
    } else {
      this.pathImagePortrait = '../static/img/portrait/avatar-neutre.jpg'
      document.getElementById('div_connected').style.display = 'none'
    };
  }
}
</script>

<style scoped>
  #div_connected {
    padding-top: 15px;
    padding-bottom: 35px;
  }
  .btn {
    margin-top: 10px;
    width: 100%;
    background-color: #C6CBD4;
    color: #333333;
    text-transform: capitalize;
    box-shadow: #E4E4E9 !important;
  }
  .div_content {
    padding-left: 30px;
    padding-right: 30px;
  }
  .div_content_tri {
    padding-left: 40px;
    padding-right: 40px;
  }
  .switch label input[type=checkbox]:checked+.lever {
    background-color: #85ACCA;
  }

  .switch label input[type=checkbox]:checked+.lever:after {
    background-color: #85ACCA;
  }
  .row {
      font-size: 16px;
      color: #9D9D9D;
  }
  span {
      color: #525252;
    }
</style>
