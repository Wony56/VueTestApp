<template>
  <v-toolbar>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="`/post`">POST</v-btn>
      <v-btn flat :to="`/portfolio`">PORTFOLIO</v-btn>
      <v-btn flat :to="`/user/lee`">USER</v-btn>
      <v-btn flat v-if="!loggedIn" @click="signInWithGoogle">LOG IN</v-btn>
      <v-btn flat v-else @click="$store.state.loggedIn = false">LOG OUT</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({"loggedIn": state => state.auth.loggedIn}),
  methods: {
    ...mapMutations([
      'signInWithGoogle'
    ])
  }
};
</script>
