<template lang="">
    <div class="container">
        <div class='form-login pmd-z-depth-1 shadow-demo' id='form_input_email'>
            <form @submit.prevent='sendMail'>
                <div class='brand'>
                    Enter your email
                </div>
                <div role="alert" class="alert alert-danger alert-dismissible" v-if="inputEmail.error" v-html="inputEmail.error">
    
                </div>
    
                <div class="form-group pmd-textfield form-group-lg">
                    <input type="email" id="regular1" class="form-control input-group-lg" spellcheck="false" autocomplete="off" v-model="inputEmail.email">
                </div>
    
                <div class='d-flex-center'>
                    <button class="btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-info" type="submit"><i class="material-icons pmd-sm">keyboard_arrow_right</i></button>
                </div>
            </form>
        </div>
    
    
        <div class='form-login pmd-z-depth-1 shadow-demo d-none' id='form_change_password'>
            <form @submit.prevent='onChangePassword'>
                <div class='brand'>
                    Change password
                </div>
                <div role="alert" class="alert alert-danger alert-dismissible" v-if="inputNewPass.errors" v-html="inputNewPass.errors">
                </div>
    
                <div class="form-group pmd-textfield form-group-lg">
                    <label for="Large" class="control-label" spellcheck="false">Email comfirmation code</label>
                    <input type="Large" id="regular1" class="form-control input-group-lg" v-model="inputNewPass.email_confirmation_code">
                </div>
    
                <div class="form-group pmd-textfield form-group-lg">
                    <label for="Large" class="control-label">New password</label>
                    <input type="password" id="regular1" class="form-control input-group-lg" v-model="inputNewPass.password">
                </div>
    
                <div class="form-group pmd-textfield form-group-lg">
                    <label for="Large" class="control-label">Password confirmation</label>
                    <input type="password" id="regular1" class="form-control input-group-lg" v-model="inputNewPass.password_confirmation">
                </div>
    
                <div class='d-flex-center'>
                    <button class="btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-info" type="submit"><i class="material-icons pmd-sm">check</i></button>
                </div>
    
            </form>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import { validateEmail } from "../../../helpers/lib.js";
import {
    resend_email_confirmation_code,
    change_password,
} from "../../../api/users.js";

export default {
    data() {
        return {
            inputEmail: {
                email: "",
                error: "",
            },
            inputNewPass: {
                email_confirmation_code: "",
                password: "",
                password_confirmation: "",
                errors: "",
            },
        };
    },
    methods: {
        animation() {
            $("#form_input_email").addClass("slide-out-left");
            $("#form_input_email").bind(
                "oanimationend animationend webkitAnimationEnd",
                function() {
                    $(this).addClass("d-none");
                    $("#form_change_password").removeClass("d-none");
                    $("#form_change_password").addClass("slide-in-right");
                }
            );
        },
        sendMail() {
            this.inputEmail.error = "";
            if (validateEmail(this.inputEmail.email)) {
                resend_email_confirmation_code(this.inputEmail.email)
                    .then(() => {
                        localStorage.setItem("email", this.inputEmail.email);
                        this.animation();
                    })
                    .catch(() => {
                        this.inputEmail.error = "Account does not exist";
                    });
            } else {
                this.inputEmail.error = "Email is not correct";
            }
        },
        isValidate() {
            var result = true
            if (!this.inputNewPass.email_confirmation_code) {
                this.inputNewPass.errors += "Email confirmation code can't be blank <br/>"
                result = false
            }
            if (this.inputNewPass.password_confirmation != this.inputNewPass.password) {
                this.inputNewPass.errors += "Password confirmation doesn't match <br/>"
                result = false
            }
            if (!this.inputNewPass.password) {
                this.inputNewPass.errors += "Password can't be blank"
                result = false
            }
            return result
        },
        onChangePassword() {
            this.inputNewPass.errors = ''
            if (this.isValidate()) {
                change_password(this.inputNewPass)
                    .then((res) => {
                        var { message, status } = res.data
                        if (status != 200) {
                            this.inputNewPass.errors = message.join("<br/>")
                        } else {
                            alert("Password changed successfully, now log in")
                            window.location.replace(`${window.location.origin}/sign_in`)
                        }
                    })
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.d-flex-center {
    display: flex;
    justify-content: center;
    margin-top: 28px;
}

.d-none {
    display: none;
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
        margin-bottom: 23px;
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