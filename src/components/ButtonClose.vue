<template>
    <div><router-link :to="path"><a class="btn-floating waves-effect waves-light button_close"><i class="material-icons">close</i></a></router-link></div>
</template>

<script>
export default {
  name: 'ButtonClose',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {

  },
  props: {
    path: String
  }
}
</script>

<style scoped>
  .button_close {
        background-image:linear-gradient(#7284FF, #84C3DE) !important;
        color: white;
        height: 40px;
        width: 40px;
  }
</style>
