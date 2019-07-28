import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/vuetify";
import App from "./App.vue";

import { router } from "./router";
import { store } from "./store/store";

import firebase from 'firebase';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  created(){
    if(firebase.auth().currentUser != null){
      store.state.auth.loggedIn = true;
    }else{
      store.state.auth.loggedIn = false;
    }
  },
  render: h => h(App)
}).$mount("#app");
