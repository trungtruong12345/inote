import axios from './base.js'

export function check_auth() {
    return axios.get('/api/auth')
        .catch(() => {
            window.location.replace(`${window.location.origin}/sign_in`)
        })
}

export function signUp({ password, password_confirmation, username, email }) {
    return axios.post('/api/sign_up', { username, password, password_confirmation, email })
}

export function signIn({ username_or_email, password }) {
    return axios.post('/api/sign_in', { username_or_email, password })
        .then(res => {
            let token = res.data.auth_token
            localStorage.removeItem('Authorization')
            localStorage.setItem('Authorization', token)
        })
}

export function verify_email_confirmation_code(confirmation_code) {
    return axios.get(`/api/verify_email_confirmation_code?user_id=${localStorage.getItem('user_id')}&confirmation_code=${confirmation_code}`)
}

export function resend_email_confirmation_code(email = null) {
    if (email == null) {
        return axios.get(`/api/resend_email_confirmation_code?user_id=${localStorage.getItem('user_id')}`)
    }
    else {
        return axios.get(`/api/resend_email_confirmation_code?&email=${email}`)
    }
}

// input { password, password_confirmation, email_confirmation_code }
export function change_password(data = {}) { 
    data.email = localStorage.getItem('email')
    return axios.post(`/api/change_password`, data)
}