<template>
  <v-toolbar>
    <v-toolbar-title>
      <router-link to="/" class="title">VueTest</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="`/post`">POST</v-btn>
      <v-btn flat :to="`/portfolio`">PORTFOLIO</v-btn>
      <v-btn flat :to="`/user/${user.displayName}`">USER</v-btn>
      <v-btn flat v-if="!loggedIn" @click="SignInWithGoogle">LOG IN</v-btn>
      <v-btn flat v-else @click="SignOut">LOG OUT</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import firebaseService from "../services/firebaseService";
import { mapState } from "vuex";

export default {
  computed: mapState({
    user: state => state.auth.user,
    loggedIn: state => state.auth.loggedIn
  }),
  methods: {
    SignInWithGoogle() {
      firebaseService.signInWithGoogle();
    },
    SignOut() {
      firebaseService.signOut();
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
