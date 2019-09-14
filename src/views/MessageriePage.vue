<template>
    <div>
        <HeaderPage name="Messagerie" description="Discutez et prennez vos rendez-vous" path="/menu-page"></HeaderPage>
    </div>
</template>

<script>

import HeaderPage from '../components/HeaderPage.vue'

export default {
  name: 'MessageriePage',
  components: {
    HeaderPage
  },
  props: {
    token: String
  }
}
</script>

<style scoped>
    img {
        margin-top: 20vh;
        margin-bottom: 45px;
        width: 70%;
    }
</style>
