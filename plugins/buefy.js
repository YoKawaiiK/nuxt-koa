import Vue from 'vue'
import { 
    ConfigProgrammatic, 
    Snackbar,
    Sidebar,
    Checkbox,

    // not used
    Dropdown
} from 'buefy'

Vue.use(Snackbar)
    .use(Sidebar)
    .use(Checkbox)
    
    .use(Dropdown)

ConfigProgrammatic.setOptions({
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
})