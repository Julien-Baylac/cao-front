<template>
    <div id="app">
        <router-view :token="token" @giveToken="updateToken"></router-view>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      token: ''
    }
  },
  mounted () {

  },
  methods: {
    updateToken (token) {
      this.token = token
    }
  }
}
</script>

<style scoped>
#app {
margin: 0px;
padding: 0px;
}
</style>
