<template>
    <div>

        <div class="row">
            <div class="col s12" align="center">
                <img class="icon_menu" src="../assets/logo.png" alt="Logo_cabane_a_oiseaux">
            </div>
        </div>

        <div class="form">
            <p class="err right-align">{{ error_message }}</p>

            <div class="input-field col s12">
                <input id="email" type="email" class="validate" v-model="email">
                <label for="email">Email</label>
            </div>
            <div class="input-field col s12">
                <input id="password" type="password" class="validate" v-model="password">
                <label for="password">Mot de passe</label>
            </div>
            <a class="waves-effect waves-light btn btn-flat" @click="post_login">Se connecter</a>
            <router-link to="/create-account"><a class="waves-effect waves-light btn btn-grey btn-flat">S'enregistrer</a></router-link>
        </div>
        <div align="center">
            <p class="mdp">Mot de passe oublié ?</p>
        </div>

        <div class="col s12 " align="center">
          <a class=" close btn-floating waves-effect waves-light btn_close"><router-link to="/menu-page"><i class="material-icons">close</i></router-link></a>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'LoginPage',
  components: {

  },
  data () {
    return {
      email: '',
      password: '',
      error_message: ''
    }
  },
  methods: {
    post_login () {
      axios.post('http://localhost:8000/api/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        if (response.data == 'non connecté') {
          this.error_message = 'Email ou mot de passe incorrect'
        } else {
          router.push('account-page')
          this.$emit('giveToken', response.data)
        }
      })
    }
  },
  props: {
    token: String
  }

}
</script>

<style scoped>
    .mdp {
        color: #7A7A7A;
        text-decoration:underline;
    }
    .btn-grey {
        background-color: #E4E4E9 !important;
    }
    .btn {
        margin-top: 10px;
        width: 100%;
        background-color: #C6CBD4;
        color: #333333;
        text-transform: capitalize;
        box-shadow: #E4E4E9 !important;
    }
    .input-field {
        margin: 0px;
        margin-top: 10px;
    }
    .row {
        margin: 0px;
        padding-left: 30px;
        padding-right: 30px;
    }
    img {
        margin-top: 45px;
        margin-bottom: 20px;
        width: 70%;
    }
    .form {
        padding-right: 40px;
        padding-left: 40px;
    }
    .close {
      background-image:linear-gradient(#7284FF, #84C3DE) !important;
      margin-top: 30px;
    }
    .err {
      color: #42a2cc;

    }
</style>
