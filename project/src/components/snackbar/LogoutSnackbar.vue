<template>
  <v-snackbar
    color="primary"
    v-model="$store.state.snackbar.logoutBar"
    :timeout="2000"
    :top="true"
  >로그아웃하셨습니다.</v-snackbar>
</template>
