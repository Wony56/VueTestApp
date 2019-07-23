<template>
  <v-container justify-center>
    <v-layout column justify-center>
      <v-flex>User</v-flex>
      <v-flex>
        <v-btn :to="`/user/${$route.params.id}/posts`">작성한 글</v-btn>
      </v-flex>
      <v-flex>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(from);
      console.log(to);
    }
  }
};
</script>
