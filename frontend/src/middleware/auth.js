import {check_auth} from '../api/users.js'

function checkHeader() {
    // console.log('checkHeader');
    var Authorization = localStorage.getItem('Authorization')
    if (Authorization) {
        check_auth()
    }
    else {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('user_id')
        window.location.replace(`${window.location.origin}/sign_in`)
        return false
    }
}

export default checkHeader