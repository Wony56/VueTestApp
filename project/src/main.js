import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/vuetify";
import App from "./App.vue";

import { router } from "./router";

import firebase from "firebase";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.state.auth.loggedIn = true;
    store.state.auth.user = user;
  }
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");
});
