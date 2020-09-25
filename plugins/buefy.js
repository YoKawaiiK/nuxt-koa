import Vue from 'vue'
import { 
    ConfigProgrammatic, 
    Snackbar,
    Dropdown,
    Checkbox
} from 'buefy'

Vue.use(Snackbar)
    .use(Dropdown)
    .use(Checkbox)

ConfigProgrammatic.setOptions({
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
})