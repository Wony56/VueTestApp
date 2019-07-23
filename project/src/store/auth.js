import FirebaseService from "../services/firebaseService";

const state = {
  user: {},
  loggedIn: false
};

const getters = {};

const mutations = {
  signInWithGoogle: state => {
    FirebaseService.signInWithGoogle().then(result => {
      state.user = result.user;
      state.loggedIn = true;
    });
  },
  signOut: state => {
    FirebaseService.signOut().then(() => {
      state.loggedIn = false;
      state.user = {};
    });
  }
};

export default {
  state,
  mutations
};
