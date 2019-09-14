<template>
    <div class="component_cabane">
      <div class="div_crud"><a class="col s4 link_crud" @click="deleteCabane(id)" v-on:click="$emit('removeCabane')">Supprimer</a>
                            <a @click="pushFicheCabaneUpdate(id)" class="link_crud">Modifier</a></div>
          <div class="row cabane left-align" @click="pushFicheCabane(id)">
            <img class="img_cabane" :src="pathImage" alt="img_cabane">
            <div class="col s12">
                <p class=""><span>{{ name }}</span></p>
                <p class="">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Cabane',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    pathImage: String,
    name: String,
    description: String,
    id: Number
  },

  mounted () {
  },

  methods: {
    pushFicheCabane (id) {
      router.push('fiche-cabane/' + id)
    },

    deleteCabane: function (id) {
      axios.delete('http://localhost:8000/api/show_birdhouses/' + id + '/delete')
    },

    pushFicheCabaneUpdate (id) {
      router.push('fiche-cabane-update/' + id)
    }
  }
}
</script>

<style scoped>
    .div_crud {
      margin-bottom:5px;
      margin-left: 3px;
    }
    .link_crud {
      padding: 0px;
      color: #7A7A7A;
      text-decoration:underline;
    }
    span {
      color: #525252;
    }
    p {
      margin: 4px;
    }
    .cabane {
      border: 1px solid #DCD6D6;
      border-radius: 7px;
    }
    .img_cabane {
      width: 100%;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
</style>
