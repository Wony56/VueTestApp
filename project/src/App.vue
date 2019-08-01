<template>
  <v-app>
    <Header />
    <LoginSnackbar />
    <LogoutSnackbar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import LoginSnackbar from "./components/snackbar/LoginSnackbar";
import LogoutSnackbar from "./components/snackbar/LogoutSnackbar";

export default {
  name: "App",
  components: {
    Header,
    LoginSnackbar,
    LogoutSnackbar
  }
};
</script>
