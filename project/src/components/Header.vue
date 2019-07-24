<template>
  <v-toolbar>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="`/post`">POST</v-btn>
      <v-btn flat :to="`/portfolio`">PORTFOLIO</v-btn>
      <v-btn flat :to="`/user/${user.email}`">USER</v-btn>
      <v-btn flat v-show="!loggedIn" @click="signInWithGoogle">LOG IN</v-btn>
      <v-btn flat v-show="loggedIn" @click="signOut">LOG OUT</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({
    user: state => state.auth.user,
    loggedIn: state => state.auth.loggedIn
  }),
  methods: mapMutations({
    signInWithGoogle: "signInWithGoogle",
    signOut: "signOut"
  })
};
</script>
