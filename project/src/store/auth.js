import FirebaseService from "../services/firebaseService";

const state = {
  user: '',
  loggedIn: false
};

const mutations = {
  signInWithGoogle: async state => {
    let result = await FirebaseService.signInWithGoogle();

    state.user = result.user;
    state.loggedIn = true;
  },
  signOut: state => {
    FirebaseService.signOut();
    state.loggedIn = false;
  }
};

export default {
  state,
  mutations
};
