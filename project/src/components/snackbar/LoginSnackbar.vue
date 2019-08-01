<template>
  <v-snackbar
    v-model="$store.state.snackbar.loginBar"
    color="primary"
    :timeout="2000"
    :top="true"
  >{{$store.state.auth.user.displayName}}님 환영합니다.</v-snackbar>
</template>
