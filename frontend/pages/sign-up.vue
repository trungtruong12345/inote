<template lang="">
    <div class='sign-in'>
        <div class='form-auth'>
            <div class='header'>Sign up</div>
            <div class='description'>Please create your own account</div>
            <div class='form'>
                <formAuth name='email' type='text' placeholder='Email'/>
                <formAuth name='password' type='password' placeholder='Password'/>
                <formAuth name='enterThePassword' type='password' placeholder='Enter the password'/>
                
                <BtnToAuth value='Sign up' other='Or sign in ?' :func='signUp' @res-status='resStatus'/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import Cookies from "js-cookie";

export default {
  layout: "auth",
  middleware: "auth",
  methods: {
    ...mapActions("auth", ["signUp", "change_value"]),
    async resStatus(e) {
      var { status, messages, user_id } = e.data;
      if (status == 200) {
        Cookies.set("user_id", user_id, { expires: 1 });
        await this.change_value({ key: "user_id", value: user_id });
        this.$router.push("/confirmation-code");
      } else {
        alert(messages.toString());
      }
    },
  },
};
</script>
<style lang="css" scoped>
</style>