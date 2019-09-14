<template>
    <div>
      <router-link :to="pathAdd">
        <a class="btn-floating waves-effect waves-light white center-align"><i class="material-icons" style="color: #4A4A4A;">add</i></a>
      </router-link>
    </div>
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
    pathAdd: String
  }
}
</script>

<style scoped>

</style>
