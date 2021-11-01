<template lang="">
    <div class='header-default sticky-top'>
        <!-- Desktop -->
        <div class='desktop-header'>
            <div class="dropdown">
                <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' />    
                <div class="dropdown-content">
                    <a @click='onSignOut'>Logout</a>
                </div>
            </div>
            <div class='desktop-header-username'>
                {{ name }}
            </div>
            <div class='desktop-header-note'>
                <nuxt-link to="/notes">Notes</nuxt-link>
            </div>
            <div class='desktop-header-word'>
                <nuxt-link to="/words">Words</nuxt-link>
            </div>
            <div class='desktop-header-todo'>
                <nuxt-link to="Todo">Todo</nuxt-link>
            </div>
        </div>
        <!-- Desktop -->
    
        <!-- Mobile -->
        <div class='menu-left-icon'>
            <img src='@/assets/images/header/menu.png' @click="toggleMenuLeft" />
        </div>
    
        <div :class="showMenuLeft ? '' : 'd-none'">
            <MenuLeft />
        </div>
        <!-- Mobile -->
    
        <div :class="'default ' + (showFormSearch ? 'd-none' : '' )">
            <div @click='toggleFormSearch'>
                <img src='@/assets/images/header/search.png' />
            </div>
        </div>
    
        <div :class="'form-search ' + (showFormSearch ? '' : 'd-none')">
            <FormSearch />
        </div>
    
        <div class='add' @click='isShowFormInput'>
            <img src='@/assets/images/header/Group.png' />
        </div>
    
        <!-- start model -->
        <div :class="'model ' + (showFormInput ? '' : 'd-none')">
            <InputVocabulary v-if="this.$route.path == '/words'" :key='keyModel' />
            <InputNote v-if="this.$route.path == '/notes'" :key='keyModel' />
        </div>
        <!-- end model -->
    
        <div :class="'bg_dark ' + (modelFade ? '' : 'd-none')" @click="toggleModelFade"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      keyModel: 11,
    };
  },
  computed: {
    ...mapGetters("headerDefault", [
      "modelFade",
      "showMenuLeft",
      "showFormInput",
      "showFormSearch",
    ]),
    ...mapGetters("auth", ["name"]),
  },
  methods: {
    ...mapActions("headerDefault", [
      "toggleModelFade",
      "toggleMenuLeft",
      "toggleFormInput",
      "toggleFormSearch",
    ]),
    ...mapActions("auth", ["signOut"]),
    onSignOut() {
      this.signOut();
      this.$router.push("/sign-in");
    },
    async resetData() {
      await this.$store.dispatch("vocabularyWord/resetData");
      await this.$store.dispatch("note/resetData");
    },

    async isShowFormInput() {
      this.keyModel = Math.floor(Math.random() * 10);
      await this.resetData();
      await this.toggleFormInput();
    },
  },
  created() {
    this.resetData();
  },
};
</script>

<style lang="css" scoped>
.model {
  top: 61px;
  z-index: 6;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.add,
img {
  cursor: pointer;
}

.desktop-header a.nuxt-link-active {
  color: #95a5a6;
}

.desktop-header a:hover {
  text-decoration: none;
}

.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  padding: 0 !important;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin: 0 !important;
  padding: 0 !important;
}

.dropdown-content a {
  color: black !important;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>