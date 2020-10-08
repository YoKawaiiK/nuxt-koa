import Vue from 'vue'

// fas icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faBars,
    faAngleLeft,
    faHome,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Иконки брендов
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


library.add(
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faAngleLeft,
    faBars,
    faHome,
    faGoogle,
    faUser
)

Vue.component('fas', FontAwesomeIcon)