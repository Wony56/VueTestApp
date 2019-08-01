<template>
  <v-toolbar>
    <v-toolbar-title>
      <router-link to="/" class="title">VueTest</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="`/post`">POST</v-btn>
      <v-btn flat :to="`/portfolio`">PORTFOLIO</v-btn>
      <template v-if="!loggedIn">
        <v-btn flat @click="openLoginDialog">LOG IN</v-btn>
        <v-btn flat>SIGN UP</v-btn>
      </template>
      <template v-else>
        <v-btn flat :to="`/user/${user.displayName}`">USER</v-btn>
        <v-btn flat @click="SignOut">LOG OUT</v-btn>
      </template>
    </v-toolbar-items>

    <LoginModal />
  </v-toolbar>
</template>

<script>
import firebaseService from "../services/firebaseService";
import { mapState, mapActions, mapMutations } from "vuex";

import LoginModal from "@/components/modal/LoginModal";

export default {
  components: {
    LoginModal
  },
  computed: mapState({
    user: state => state.auth.user,
    loggedIn: state => state.auth.loggedIn
  }),
  methods: {
    ...mapActions(["openLoginDialog", "openSignupDialog"]),
    ...mapMutations(["showLogoutBar"]),
    SignOut() {
      firebaseService.signOut().then(() => {
        this.$router.replace("/");
        this.showLogoutBar();
      });
    }
  }
};
</script>


<style>
.title:link {
  text-decoration: none;
  color: black;
}

.title:visited {
  text-decoration: none;
  color: black;
}
</style>
