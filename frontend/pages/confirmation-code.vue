<template lang="">
    <div class='sign-in'>
        <div class='form-auth'>
            <div class='header'>Sign up</div>
            <div class='description'>Please create your own account</div>
            <div class='form'>
                <InputAuth name='confirmationCode' type='text' placeholder='Confirmation code' />
                <div id='resend-code' @click='resendEmailConfirmationCode'>Resend confirmation code</div>
                <BtnToAuth value='Sign up' other='Or sign in ?' :func='verifyEmailConfirmationCode' @res-status='resStatus'/>
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
    ...mapActions("auth", ["verifyEmailConfirmationCode", "resendEmailConfirmationCode"]),
    resStatus(e) {
      var { status, message } = e.data;
      if (status == 200) {
          this.$router.push("/sign-in");
      } else {
        alert(message);
      }
    },
  },
};
</script>

<style lang="css" scoped>
</style>