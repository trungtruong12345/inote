import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

let auth_token = localStorage.getItem('Authorization')
if(auth_token){
    axios.defaults.headers.common['Authorization'] = auth_token
}


export default axios