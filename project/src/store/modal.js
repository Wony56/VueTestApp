const state = {
  loginDialog: false,
  signupDialog: false
};

const actions = {
  openLoginDialog() {
    state.loginDialog = true;
  },
  closeLoginDialog() {
    state.loginDialog = false;
  },
  openSignupDialog() {
    state.signupDialog = true;
  },
  closeSignupDialog() {
    state.signupDialog = false;
  }
};

export default {
  state,
  actions
};
