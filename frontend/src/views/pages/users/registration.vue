<template lang="">
    <div class="container">
        <div class='form-login pmd-z-depth-1 shadow-demo' id='form_sign_up'>
            <form @submit="preventDefault()">
                <div class='brand'>
                    SIGN UP
                </div>
                <div role="alert" class="alert alert-danger alert-dismissible" v-if="errors" v-html="errors">
    
                </div>
                <!-- Username -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Username</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>
                        <input type="text" class="form-control" spellcheck="false" v-model="username">
                    </div>
                </div>
                <!-- email -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Email</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">email</i></div>
                        <input type="email" class="form-control" spellcheck="false" v-model="email">
                    </div>
                </div>
                <!-- Password -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Password</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i></div>
                        <input type="password" class="form-control" spellcheck="false" v-model="password">
                    </div>
                </div>
    
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Confirm password</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">https</i></div>
                        <input type="password" class="form-control" spellcheck="false" v-model="password_confirmation">
                    </div>
                </div>
    
                <!-- btn login -->
                <div class='btn-login'>
                    <button type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary" @click="onSubmit">SIGN UP</button>
                </div>
    
                <!-- btn-register -->
                <div class='btn-register'>
                    <router-link to="/sign_in">OR SIGN IN</router-link>
                </div>
    
            </form>
        </div>
        <verify-email></verify-email>
    </div>
</template>

<script>
import VerifyEmail from '../../../components/users/verifyEmail.vue'
import { signUp } from '../../../api/users'
import $ from "jquery";

export default {
    components: { VerifyEmail },
    data() {
        return {
            username: '',
            password: '',
            password_confirmation: '',
            email: '',
            errors: ''
        }
    },
    methods: {
        verify_email_confirmation_code() {
            $('#form_sign_up').addClass('slide-out-bottom')
            $('#form_sign_up').bind('oanimationend animationend webkitAnimationEnd', function() {
                $(this).css('display', 'none')
                $('#verify_email').css('display', 'block')
                $('#verify_email').addClass('slide-in-top')
            })
        },
        onSubmit() {
            signUp({
                username: this.username,
                password: this.password,
                password_confirmation: this.password_confirmation,
                email: this.email
            }).then(res => {
                if (res.data.status == 422) {
                    this.errors = res.data.messages.join('<br/>')
                } else if (res.data.status == 200) {
                    localStorage.removeItem('user_id')
                    localStorage.setItem('user_id', res.data.user_id)
                    this.verify_email_confirmation_code()
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
#form_sign_up {
    // display: none;
}

.alert {
    font-size: 16px;
    padding: 10px;
    margin: 0 auto;
    max-width: 500px;
    position: relative;
    top: 12px;
}

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