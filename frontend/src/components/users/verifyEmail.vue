<template lang="">
    <div id='verify_email' class='pmd-z-depth-1 shadow-demo'>
        <div class="form-group">
            <label for="regular1" class="control-label">Verify email confirmation code</label>
            <input type="text" id="regular1" class="form-control" :value="code" @keyup="setVal">
        </div>
        
        <div id='btn-submit'> 
            <button @click='onSubmit' type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-info">Submit</button>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errors">
            {{ errors }}
        </div>
        <div class='resend_email_confirmation_code' @click="resend">
            resend email confirmation code
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import {verify_email_confirmation_code, resend_email_confirmation_code} from '../../api/users.js'

export default {
    data() {
        return {
            val: '',
            errors: ''
        }
    },
    computed: {
        code() {
            return this.val.toUpperCase()
        }
    },
    methods: {
        setVal() {
            let val = $('#verify_email #regular1').val()
            this.val = val
        },
        onSubmit(){
            verify_email_confirmation_code(this.code)
            .then(()=>{
                this.errors = ''
                alert('You have successfully registered, now log in')
                window.location.replace(`${window.location.origin}/sign_in`)
            })
            .catch(()=>{
                this.errors = 'Email verification code is not correct'
            })
        },
        resend(){
            resend_email_confirmation_code()
        }
    },
}
</script>

<style lang="scss" scoped>
#verify_email {
    display: none;
    border-radius: 8px;
    padding: 16px;
    input {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
    #btn-submit {
        display: flex;
        justify-content: center;
    }
    .alert-danger {
        margin-top: 12px;
    }
    .resend_email_confirmation_code {
        text-align: center;
        font-size: 13px;
        width: 100%;
        cursor: pointer;
        &:hover {
            color: red;
        }
    }
}
</style>