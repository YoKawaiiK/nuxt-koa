import Vue from 'vue'

// fas icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faBars,
    faHome
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faHome,
    faBars
)

Vue.component('fas', FontAwesomeIcon)