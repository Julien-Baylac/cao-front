<template>
    <div>
        <div class="row">
            <div id='div_cabane' class="col s12">
                <img id="img_cabane" :src="pathImage" alt="img_cabane">
            </div>
        </div>
        <div class="row">
            <div class="col s3 offset-s9">
                <ButtonClose class="btn_close" path="/"/>
            </div>
        </div>
        <div class="row div_content">
            <div class="row div_titres">
              <div class=" col s8">
                  <p class="name_cabane">{{ name }}</p>
                  <p class="type_cabane">{{ type }}</p>
              </div>
              <div class="col s4">
                  <a class="waves-effect waves-light btn-small btn_valider btn-flat right-align"><p style="margin-top:-4px;" @click="update_infos_cabane">Valider</p></a>
              </div>
              <div class="col s12">
                  <p class="description_cabane">{{ description }}</p>
              </div>
            </div>
            <div class="row div_form">
              <div class="row">
                <div class="input-field col s12">
                  <input id="name" type="text" class="validate" v-model="Newname">
                  <label for="name">Nom</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="description" class="materialize-textarea" v-model="Newdescription"></textarea>
                  <label for="description">Description</label>
                </div>
                <div>
                  <select class="browser-default" v-model="Newtype">
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
              </div>
            </div>

            <div class="div_list_badges">
                <p style="margin-bottom:20px">Badges de la cabane parmis ceux qui vous interessent</p>
                <p class="supprimer">Supprimer</p><Badges/>
            </div>

        </div>
    </div>
</template>

<script>
import ButtonClose from '../components/ButtonClose.vue'
import Badges from '../components/Badges.vue'
import axios from 'axios'
import router from '../router'

export default {
  name: 'FicheCabane',
  components: {
    ButtonClose,
    Badges
  },
  data () {
    return {
      pathImage: '',
      name: '',
      type: '',
      description: '',
      Newname: '',
      Newtype: '',
      Newdescription: '',
      nb_design: 0,
      nb_service: 0,
      nb_information: 0
    }
  },
  props: {
    token: String
  },
  mounted () {
    axios.get('http://localhost:8000/api/show_birdhouses?id=' + this.$route.params.id
    ).then(response => {
      this.name = response.data.name
      this.description = response.data.description
      this.pathImage = '../static/img/cabane/' + response.data.image

      if (response.data.id_type == 1) {
        this.type = 'Restaurant'
      } else if (response.data.id_type == 2) {
        this.type = 'Bar'
      } else if (response.data.id_type == 3) {
        this.type = 'Jeux'
      } else if (response.data.id_type == 4) {
        this.type = 'Coiffeur'
      } else if (response.data.id_type == 5) {
        this.type = 'Cinéma'
      } else if (response.data.id_type == 6) {
        this.type = 'Crèche'
      } else if (response.data.id_type == 7) {
        this.type = 'Magasin de vétement'
      } else {
        this.type = 'Type non défini'
      }
    })
  },
  methods: {

    update_infos_cabane () {
      console.log(this.Newname + this.Newdescription + this.Newtype)
      axios.put('http://localhost:8000/api/update_birdhouse/' + this.$route.params.id + '/update', {
        name: this.Newname,
        description: this.Newdescription,
        type: this.Newtype,
        api_token: this.token
      }).then(response => {
        router.push('fiche-cabane/' + this.$route.params.id)
      })
    }

  }
}
</script>

<style scoped>
    .supprimer {
      margin-top: 10px;
    }
    .div_titres {
        border-bottom: 1px solid #979797;
    }
    .nb {
        font-size: 23px;
    }
    span {
        color: #525252;
    }
    p {
        margin: 0px;
    }
    .row {
        margin: 0px;
    }
    #img_cabane {
        width: 100%;
    }
    #div_cabane {
        padding: 0px;
    }
    .btn_close {
        margin-top: -26px;
    }
    .div_content {
        padding-right: 35px;
        padding-left: 35px;
        margin-top: 15px;

    }
    .name_cabane {
        font-size: 14px;
        color: #4A4A4A;
    }
    .type_cabane {
        font-size: 13px;
        color: #9D9D9D;
        margin-bottom: 10px;
    }
    .description_cabane {
        font-size: 11px;
        color: #9D9D9D;
        padding-bottom: 20px;
    }
    .div_form {
        margin-top: 12px;
        color: #919091;
        font-size: 12px;
        padding-bottom: 17px;
        border-bottom: 1px solid #979797;
        padding-bottom: 40px;
    }
    .div_list_badges {
        margin-top: 20px;
        font-size: 12px;
        color: #9D9D9D;
        margin-bottom: 40px;
    }
    .btn_valider {
        background-color: #85ACCA;
        font-size: 10px;
        text-transform: capitalize;
        height: 25px;
        color:white;
        margin-top: 4px;
        margin-left: 10px;
    }
</style>
