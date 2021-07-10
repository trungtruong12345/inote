<template lang="">
    <div class="container">
        <div class='form-login pmd-z-depth-1 shadow-demo'>
            <form>
                <div class='brand'>
                    SIGN UP
                </div>
                <!-- Username -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Username</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>
                        <input type="text" class="form-control" spellcheck="false">
                    </div>
                </div>
                <!-- email -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Email</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">email</i></div>
                        <input type="email" class="form-control" spellcheck="false">
                    </div>
                </div>
                <!-- Password -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Password</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i></div>
                        <input type="password" class="form-control" spellcheck="false">
                    </div>
                </div>

                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="inputError1" class="control-label pmd-input-group-label">Confirm password</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">https</i></div>
                        <input type="password" class="form-control" spellcheck="false">
                    </div>
                </div>

                <!-- btn login -->
                <div class='btn-login'>
                    <button type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary">SIGN UP</button>
                </div>
    
                <!-- btn-register -->
                <div class='btn-register'>
                    <router-link to="/login">OR SIGN IN</router-link>    
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
export default {

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