<template>
<div>
  <div class="row">
    <div class="col s12 title_menu">
      <h1>Menu</h1>
    </div>
    <div class="menu col s12 ">

      <div class="row">
        <div class="col s3 offset-s7">
          <a href="#user"><img class="circle portrait" :src="pathImagePortrait" @click="testToken"></a>
        </div>
      </div>
      <ul>
        <li class="valign-wrapper"><img class="icon_menu" src="../assets/icons/menu/carte.png" alt="img_cabane"><router-link to="/"><a>Carte</a></router-link></li>
        <li class="valign-wrapper" @click="callToastNotification"><img class="icon_menu" src="../assets/icons/menu/notification.png" alt="img_cabane"><a class="disable">Notifications</a></li>
        <li class="valign-wrapper" @click="callToastMessagerie"><img class="icon_menu" src="../assets/icons/menu/mail.png" alt="img_cabane"><a class="disable">Messagerie</a></li>
        <li class="valign-wrapper" @click="callToastCalendar"><img class="icon_menu" src="../assets/icons/menu/calendar.png" alt="img_cabane"><a class="disable">Calendrier</a></li>
        <li class="valign-wrapper" @click="testToken"><img class="icon_menu" src="../assets/icons/menu/account.png" alt="img_cabane"><a>Mon compte</a></li>
        <li class="valign-wrapper"><img class="icon_menu" src="../assets/icons/menu/house.png" alt="img_cabane"><router-link to="mescabanes-page"><a>Mes cabanes</a></router-link></li>
        <li class="valign-wrapper"><img class="icon_menu" src="../assets/icons/menu/preferences.png" alt="img_cabane"><router-link to="preferences-page"><a>Préférences</a></router-link></li>
      </ul>
        <div align="center">
            <p class="sedeconnecter" id="deconnection" onclick="javascript:location.reload();">Se déconnecter</p>
        </div>
      </div>
      <div class="col s12" align="center">
        <a class="btn-floating waves-effect waves-light btn_close"><router-link to="/"><i class="material-icons">close</i></router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'

export default {
  name: 'MenuPage',
  components: {
  },
  props: {
    token: String
  },
  data () {
    return {
      pathImagePortrait: ''
      // ../static/img/portrait/portrait2.png
    }
  },
  mounted () {
    if (this.token) {
      axios.get('http://localhost:8000/api/show_user?api_token=' + this.token
      ).then(response => {
        this.pathImagePortrait = '../static/img/portrait/' + response.data.path_photo
      })
    } else {
      this.pathImagePortrait = '../static/img/portrait/avatar-neutre.jpg'
      document.getElementById('deconnection').style.display = 'none'
    }
  },
  methods: {
    testToken () {
      if (this.token) {
        router.push('account-page')
      } else {
        router.push('login-page')
      }
    },
    callToastCalendar () {
      M.toast({html: 'Cette page est en cours de développement<br/><a href="http://localhost:8080/calendar-page">Continuer</a>'})
    },
    callToastNotification () {
      M.toast({html: 'Cette page est en cours de développement<br/><a href="http://localhost:8080/notifications-page">Continuer</a>'})
    },
    callToastMessagerie () {
      M.toast({html: 'Cette page est en cours de développement<br/><a href="http://localhost:8080/messagerie-page">Continuer</a>'})
    }
  }
}
</script>

<style scoped>
    .sedeconnecter {
        color: #7A7A7A;
        text-decoration:underline;
    }
    a {
        color: #4A4A4A;
    }
    .portrait {
        height: 90px;
        width: 90px;
        margin-top: -100px;
    }
    .btn_close {
        background-image:linear-gradient(#7284FF, #84C3DE) !important;
        border-radius: 50px;
        color: white;
        height: 40px;
        width: 40px;
        margin-top:-40px;
    }
    .menu {
      padding: 40px;
      margin-top: -25px;
    }
    h1 {
      font-size: 34px;
      margin: 25px;
      padding-top: 30px;
    }
    .title_menu {
      border-bottom: 1px solid #DDDDE1;
    }
    li {
      margin: 19px;
      font-size: 16,03px;
    }
    .icon_menu {
      width: 34px;
      height: 34px;
      margin-right: 30px;
    }
    .disable {
      color: gray !important;
    }
</style>
