import Vue from 'vue'

// fas icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faBars,
    faHome,
    faUser,

    // PostPagination
    faEdit,
    faTrash,
    faPen, 
    faAngleLeft,
    faAngleRight,
    faArchive
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Иконки брендов
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


library.add(
    faSignInAlt,
    faSignOutAlt,
    faUserLock,
    faBars,
    faHome,
    faGoogle,
    faUser,

    faEdit,
    faTrash,
    faPen,
    faAngleLeft,
    faAngleRight,
    faArchive
)

Vue.component('fas', FontAwesomeIcon)