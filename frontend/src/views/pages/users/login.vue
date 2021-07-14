<template lang="">
    <div class="container">
        <div class='form-login pmd-z-depth-1 shadow-demo'>
            <form @submit="breventDefault()">
                <div class='brand'>
                    Login
                </div>
                <div role="alert" class="alert alert-danger alert-dismissible" v-if="errors" v-html="errors">
    
                </div>
                
                <!-- Email or username -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Username or email</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>
                        <input type="text" class="form-control" spellcheck="false" v-model="username_or_email">
                    </div>
                </div>

                <!-- Password -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Password</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">https</i></div>
                        <input type="password" class="form-control" spellcheck="false" v-model="password">
                    </div>
                </div>
    
                <div class='forgot-pass'>
                    <router-link to="/change_password">Forgot password</router-link>
                </div>
    
                <!-- btn login -->
                <div class='btn-login'>
                    <button type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary" @click="onsubmit">Login</button>
                </div>
    
                <!-- login with -->
                <div class="login-with">
                    <button class="btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">star</i></button>
                    <button class="btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" type="button"><i class="material-icons pmd-sm">add</i></button>
                </div>
    
                <!-- btn-register -->
                <div class='btn-register'>
                    <router-link to="/sign_up">OR SIGN UP</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { signIn } from '../../../api/users'
export default {
    data() {
        return {
            username_or_email: '',
            password: '',
            errors: ''
        }
    },
    methods: {
        onsubmit() {
            signIn({ username_or_email: this.username_or_email, password: this.password })
                .then(()=>{
                    this.errors = ''
                    alert('successful login')
                     window.location.replace(`${window.location.origin}/notes`)
                })
                .catch(() => {
                    this.errors = 'Login failed'
                })
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.form-login {
    width: 400px;
    padding: 15px;
    border-radius: 8px;
    .btn-login {
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
    .brand {
        text-align: center;
        font-size: 33px;
        margin-top: 7px;
        color: #4285f4;
    }
    .forgot-pass {
        text-align: right;
        cursor: pointer;
        font-size: 15px;
        color: #00000085;
        &:hover {
            color: red;
        }
    }
    .login-with {
        display: flex;
        justify-content: center;
        margin-top: 23px;
        .btn {
            margin: 6px;
            width: 44px;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: unset;
        }
    }
    .btn-register {
        margin-top: 33px;
        text-align: center;
        cursor: pointer;
        a {
            color: #898989;
        }
    }
}
</style>