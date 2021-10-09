<template lang="">
    <div class='sign-in'>
        <div class='form-auth'>
            <div class='header'>Reset password</div>
            <div class='description'>Change the password</div>
            <div class='form'>
                <InputAuth name='confirmationCode' type='text' placeholder='Confirmation code' />
                <InputAuth name='newPassword' type='password' placeholder='Reset Password' />
                <div id='resend-code' @click='resendEmailConfirmationCode'>Resend confirmation code</div>
                <BtnToAuth value='Sign up' other='Or sign in ?' :func='changePassword' @res-status='resStatus' />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    layout: "auth",
    middleware: 'auth',
    methods: {
        ...mapActions('auth', ['changePassword', 'resendEmailConfirmationCode']),
        resStatus(e) {
            var { status } = e.data
            if (status == 200) {
                alert("Success")
                this.$router.push("/sign-in");
            } else {
                alert("Email verification code or password is not correct")
            }
        }
    }
};
</script>

<style lang="css" scoped>
.header {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 40px !important;
    line-height: 50px !important;
    text-align: center !important;
    color: #224957 !important;
    height: unset !important;
}

.description {
    margin-top: 36px !important;
}

.btn {
    margin-top: 35px;
}
</style>