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
          <router-link to="account-page-update"><a class="waves-effect waves-light btn-small btn_adherer btn-flat"><p style="margin-top:-4px;">Modifier</p></a></router-link>
      </div>
      </div>
      <div class="row div_nb">
        <div class="col s12" align="center">
            <p class="nb">{{ nb_visite }}</p>
            <p>Badge(s)<br><span>Visite</span></p>
        </div>
      </div>
      <div class="row div_cabanes">
          <p class="annonces">Membre de <span>{{ nb_association }}</span> association(s)<br></p>
            <div class="div_list_cabanes">
            <Cabane name="Les Coccinelles" description="Un descriptif de l'assocation ecrit par le directeur lors de la création de la cabane association" pathImage="../static/img/association/les-coccinelles.jpg"/>
          </div>
      </div>
      <div class="row div_cabanes">
          <p class="annonces">Dirige <span>{{ nb_cabane }}</span> cabane(s)<br></p>
          <div class="row div_cabanes" v-for="data in birdhouses">
                <Cabane :name="data.name" :description="data.description" :pathImage="'../static/img/cabane/'+data.image" :id="data.id" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import ButtonClose from '../components/ButtonClose.vue'
import Cabane from '../components/Cabane.vue'
import axios from 'axios'
import router from '../router'

export default {
  name: 'AccountPage',
  components: {
    HeaderPage,
    ButtonClose,
    Cabane
  },
  props: {
    token: String
  },
  data () {
    return {
      birdhouses: [],
      pathImagePortrait: '',
      name: '',
      ville: '',
      nb_visite: 0,
      nb_association: 1,
      nb_cabane: 0
    }
  },
  mounted () {
    axios.get('http://localhost:8000/api/show_user?api_token=' + this.token

    ).then(response => {
      this.name = response.data.first_name + ' ' + response.data.last_name
      this.ville = response.data.adresse
      this.pathImagePortrait = '../static/img/portrait/' + response.data.path_photo
    })

    axios.get('http://localhost:8000/api/show_all_birdhouses').then(response => {
      this.birdhouses = response.data
      this.nb_cabane = response.data.length
      console.log(this.birdhouses)
    })
  },
  methods: {
    pushFicheCabane (id){
      router.push('fiche-cabane/' + id)
    }
  }

}
</script>

<style scoped>

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
    .nb {
      font-size: 23px;
    }
    span {
      color: #525252;
    }
    .div_nb {
      color: #919091;
      font-size: 12px;
      margin-top: -15px;
      padding-bottom: 10px;
      margin-bottom: 40px;
      border-bottom: 1px solid #DDDDE1;
    }
    .div_cabanes {
      font-size: 13px;
      color: #9D9D9D;
    }
</style>
