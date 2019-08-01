<template>
  <v-dialog v-model="$store.state.modal.loginDialog" persistent max-width="300px">
    <v-card>
      <v-card-title>
        <span class="headline">Log in</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-flex xs12 sm12 md12>
            <v-text-field label="Email" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-text-field label="Password" type="password" required></v-text-field>
          </v-flex>
          <v-layout>
            <v-flex>
              <v-btn block dark @click="signInWithGoogle">Email</v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-btn block color="error" @click="signInWithGoogle">Google</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-layout wrap>
            <v-btn block color="blue darken-1" flat @click="closeLoginDialog">SIGN UP</v-btn>
            <v-btn block color="blue darken-1" flat @click="closeLoginDialog">CLOSE</v-btn>
          </v-layout>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebaseService from "@/services/firebaseService";
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions(["closeLoginDialog"]),
    ...mapMutations(["showLoginBar"]),
    signInWithGoogle() {
      firebaseService.signInWithGoogle().then(() => {
        this.closeLoginDialog();
        this.showLoginBar();
      });
    }
  }
};
</script>