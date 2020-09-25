import {SnackbarProgrammatic as Snackbar} from 'buefy'

export default {
    actions: {
        async lookMessage() {
            Snackbar.open({
                message: 'message',
                type: 'is-danger'
            })
        }
    }
}