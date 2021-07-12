export function logout() {
    localStorage.removeItem('Authorization')
    localStorage.removeItem('user_id')
    window.location.replace(`${window.location.origin}/sign_in`)
}