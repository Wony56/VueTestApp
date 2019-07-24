import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/vuetify";
import App from "./App.vue";
import Firebase from 'firebase'

import { router } from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  Firebase.auth().onAuthStateChanged(user => {
    if(user){
      store.state.auth.user = user;
      store.state.auth.loggedIn = true;
    }else{
      store.state.auth.loggedIn = false;
    }
  });

  next();
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
