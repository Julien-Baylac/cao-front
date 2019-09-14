<template>
  <div class="sort-div">
      <div>
          <HeaderPage name="Filtres" description=""></HeaderPage>
          <Presentation title="Type d’établissement" description="Selectionner ce que vous souhaitez voir apparraitre sur la carte"></Presentation>
      </div>
      <div v-for="(n,index) in name" :key="n" class="div_list_selectors" >
          <Selector :name="n" :description="description[index]" :pathImage="pathImage[index]" :route="route[index]"/>
      </div>
  </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Presentation from '../components/Presentation.vue'
import Selector from '../components/Selector.vue'

export default {
  name: 'SortPage',
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
        'Choisir le type des cabanes qui m\'interessent',
        'Choisir les badges de design qui m\'interessent',
        'Choisir les badges de service qui m\'interessent',
        'Choisir les badges d\'information qui m\'interessent'
      ],
      pathImage: [
        '../static/icons/badges/lotus-flower.svg',
        '../static/icons/badges/lotus-flower.svg',
        '../static/icons/badges/lotus-flower.svg',
        '../static/icons/badges/lotus-flower.svg'
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
  }
}
</script>

<style scoped>
    .presentation {
      margin-bottom: 30px;
    }
    .div_list_selectors {
        margin-top: 12px;
        font-size: 12px;
        color: #9D9D9D;
    }

</style>
