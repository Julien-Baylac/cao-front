<template>
    <div>
        <HeaderPage name="Calendrier" description="" path="/menu-page"></HeaderPage>
        <Calendar></Calendar>
    </div>
</template>

<script>

import HeaderPage from '../components/HeaderPage.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'CalendarPage',
  components: {
    HeaderPage,
    Calendar
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
