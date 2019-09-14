<template>
    <div>
    <div id="div_disconnected">
      <HeaderPage name="Mes cabanes" description="" path="/menu-page"></HeaderPage>
      <Presentation title="Ma liste de Cabanes" description="Veuillez vous connecter pour voir vos cabanes"></Presentation>
      <div class="button">
        <router-link to="/login-page"><a class="waves-effect waves-light btn btn-grey btn-flat">Se connecter</a></router-link>
      </div>
    </div>
    <div id="div_connected">
        <HeaderPage name="Mes cabanes" description="" path="/menu-page"></HeaderPage>
        <Presentation title="Ma liste de Cabanes" description="Vous pouvez retrouver et modifier vos cabanes"></Presentation>

        <p class="annonces">Vous dirigez <span>{{ nb_cabane }}</span> cabane(s)<br></p>

        <div class="row div_cabanes" :key="index"  v-for="(data, index) in birdhouses">
              <Cabane :name="data.name"
                      :description="data.description"
                      :pathImage="'../static/img/cabane/'+data.image"
                      :id="data.id"
                      v-on:removeCabane="removeCabane(index)"
              />
        </div>

        <div class="col s12 buttonAdd" align='center'>
          <ButtonAddCabane pathAdd="/create-cabane"></ButtonAddCabane>
        </div>
      </div>
    </div>
 </template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Presentation from '../components/Presentation.vue'
import Cabane from '../components/Cabane.vue'
import ButtonAddCabane from '../components/ButtonAddCabane.vue'
import axios from 'axios'
import router from '../router'

export default {
  name: 'MapPage',
  components: {
    HeaderPage,
    Presentation,
    Cabane,
    ButtonAddCabane
  },
  data () {
    return {
      birdhouses: [],
      nb_cabane: 0
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

    axios.get('http://localhost:8000/api/show_all_birdhouses').then(response => {
      this.birdhouses = response.data
      this.nb_cabane = response.data.length
    })
  },

  methods: {
    pushFicheCabane (id) {
      router.push('fiche-cabane/' + id)
    },
    pushFicheCabaneUpdate (id) {
      router.push('fiche-cabane-update/' + id)
    },
    removeCabane (index) {
      this.birdhouses.splice(index, 1)
    }
  }

}
</script>

<style scoped>
    .annonces {
      font-size: 13px;
      color: #9D9D9D;
      margin-left: 30px;
      margin-top: 30px;
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
    .row {
      margin-bottom: 0px;
    }
    .div_cabanes {
      font-size: 13px;
      color: #9D9D9D;
      padding-left: 32px;
      padding-right: 35px;
      margin-bottom: 15px;
    }
    .buttonAdd {
      margin-bottom: 40px;
      margin-top: 15px;
    }
    .button {
      padding-right: 40px;
      padding-left: 40px;
    }
    span {
      color: #525252;
    }
</style>
