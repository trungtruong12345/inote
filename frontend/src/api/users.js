import axios from './base.js'

export function signUp ({ nickname, password, password_confirmation, email } ) { 
    axios.post('/auth', { nickname, password, password_confirmation, email } )
    .then(res=>{
        console.log(res);
    })
 }