import Vue from 'vue'
import Router from 'vue-router'
import MenuPage from '../views/MenuPage.vue'
import MapPage from '../views/MapPage.vue'
import FicheAssociation from '../views/FicheAssociation.vue'
import FicheCabane from '../views/FicheCabane.vue'
import LoadingPage from '../views/LoadingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SortPage from '../views/SortPage.vue'
import NotificationsPage from '../views/NotificationsPage.vue'
import PreferencesPage from '../views/PreferencesPage.vue'
import MesCabanesPage from '../views/MesCabanesPage.vue'
import MessageriePage from '../views/MessageriePage.vue'
import AccountPage from '../views/AccountPage.vue'
import CalendarPage from '../views/CalendarPage.vue'
import BadgesSortPage from '../views/BadgesSortPage.vue'
import CreateAccount from '../views/CreateAccount.vue'
import AccountPageUpdate from '../views/AccountPageUpdate.vue'
import FicheCabaneUpdate from '../views/FicheCabaneUpdate.vue'
import CreateCabane from '../views/CreateCabane.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'map-page',
      component: MapPage
    },
    {
      path: '/menu-page',
      name: 'menu-page',
      component: MenuPage
    },
    {
      path: '/fiche-assocation',
      name: 'fiche-assocation',
      component: FicheAssociation
    },
    {
      path: '/fiche-cabane',
      name: 'fiche-cabane',
      component: FicheCabane
    },
    {
      path: '/fiche-cabane/:id',
      name: 'fiche-cabane-show',
      component: FicheCabane
    },
    {
      path: '/fiche-cabane-update/:id',
      name: 'fiche-cabane-update',
      component: FicheCabaneUpdate
    },
    {
      path: '/loading-page',
      name: 'loading-page',
      component: LoadingPage
    },
    {
      path: '/login-page',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/notifications-page',
      name: 'notifications-page',
      component: NotificationsPage
    },
    {
      path: '/preferences-page',
      name: 'preferences-page',
      component: PreferencesPage
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccount
    },
    {
      path: '/mescabanes-page',
      name: 'mescabanes-page',
      component: MesCabanesPage
    },
    {
      path: '/messagerie-page',
      name: 'messagerie-page',
      component: MessageriePage
    },
    {
      path: '/calendar-page',
      name: 'calendar-page',
      component: CalendarPage
    },
    {
      path: '/account-page',
      name: 'account-page',
      component: AccountPage
    },
    {
      path: '/badges-sort-page',
      name: 'badges-sort-page',
      component: BadgesSortPage
    },
    {
      path: '/account-page-update',
      name: 'account-page-update',
      component: AccountPageUpdate
    },
    {
      path: '/fiche-cabane-update',
      name: 'fiche-cabane-update',
      component: FicheCabaneUpdate
    },
    {
      path: '/create-cabane',
      name: 'create-cabane',
      component: CreateCabane
    },
    {
      path: '/sort-page',
      name: 'sort-page',
      component: SortPage
    }
  ]
})
