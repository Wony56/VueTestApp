import FirebaseService from "../services/firebaseService";

const state = {
  user: {},
  loggedIn: false
};

const getters = {};

const mutations = {
  signInWithGoogle: async state => {
    let result = await FirebaseService.signInWithGoogle();
    state.user = result.user;
    state.loggedIn = true;
    console.log(result.additionalUserInfo.providerId);
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
