<template>
    <div>
        <div class="row" align="center">
            <div class="col s12">
                <img class="icon_menu" src="../assets/logo.png" alt="Logo_cabane_a_oiseaux">
            </div>
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LoginPage',
  components: {

  },
  props: {
    token: String
  }
}
</script>

<style scoped>
    img {
        margin-top: 23vh;
        margin-bottom: 45px;
        width: 100%;
    }
    .row {
        padding-right: 20%;
        padding-left: 20%;
    }
</style>
