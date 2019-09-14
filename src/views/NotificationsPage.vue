<template>
    <div>
        <HeaderPage name="Notifications" description="" path="/menu-page"></HeaderPage>
        <Presentation title="Mes notifications" description="Vous pouvez consulter vos anciennes notification"></Presentation>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Presentation from '../components/Presentation.vue'

export default {
  name: 'MesCabanesPage',
  components: {
    HeaderPage,
    Presentation
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
