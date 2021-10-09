<template lang="">
    <div class='sign-in'>
        <div class='form-auth'>
            <div class='header'>Sign in</div>
            <div class='description'>Sign in and start managing your candidates!</div>
            <div class='form'>
                <InputAuth name='email' type='text' placeholder='Email'/>
                <InputAuth name='password' type='password' placeholder='Password'/>
                <div class='checkbox'>
                    <div>
                        <input type='checkbox' name='remember' v-model="onCheck"/>
                        <div>
                            Remember me
                        </div>
                    </div>
                    <div @click='clickChangePass'>
                      Forgot password?
                    </div>
                </div>
                <div class='other'>
                    <img src='@/assets/images/authentication/google logo.png'/>
                    <img src='@/assets/images/authentication/fb logo.png'/>
                </div>
                <BtnToAuth value='Login' other='Or sign up ?' :func='signIn' @res-status='resStatus'/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie"

export default {
  layout: "auth",
  middleware: 'auth',
  computed: {
    ...mapGetters('auth', ['email', 'remember']),
    onCheck: {
      get(){
        this.$attrs.value
      },
      set(val){
        this.change_value({key: 'remember', value: val})
      }
    }
  },
  methods: {
    ...mapActions("auth", ["signIn", "setToken", "resendEmailConfirmationCode", "change_value"]),
    resStatus(e) {
      var { status } = e.data;
      if (status == 200) {
        this.setToken({ token: e.data.auth_token });
        this.$router.push("/words");
      } else {
        alert("Login False");
      }
    },
    clickChangePass(){
      if(this.email){
        Cookies.set("email", this.email, { expires: 1 })
        this.resendEmailConfirmationCode()
        this.$router.push("/reset-password");
      }
      else {
        alert('Enter your email')
      }
    }
  },
};
</script>
<style lang="" scoped>
</style>