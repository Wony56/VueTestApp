import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import modal from "./modal";
import snackbar from "./snackbar";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    modal,
    snackbar
  }
});
