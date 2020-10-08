import {SnackbarProgrammatic as Snackbar} from 'buefy'

export default {
    actions: {
        async deleteCookies() {
            Snackbar.open({
                message: 'Вы вышли.',
                type: 'is-success'
            })
        },
        async error() {
            Snackbar.open({
                message: 'Возникла ошибка при выполнении действия.',
                type: 'is-danger'
            })
        },
        async setLoginLenght() {
            Snackbar.open({
                message: 'Логин должен быть не больше 25 символов.',
                type: 'is-warning'
            })
        },
        async setLoginTrue() {
            Snackbar.open({
                message: 'Логин Установлен.',
                type: 'is-success'
            })
        }
    }
}