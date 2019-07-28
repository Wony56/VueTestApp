import Firebase from "firebase";
import { router } from "../router";

const firebaseConfig = {
  apiKey: "AIzaSyAH-cHShN1MCm-Mu90BLTARB4qGW73d9n8",
  authDomain: "authtest-209ba.firebaseapp.com",
  databaseURL: "https://authtest-209ba.firebaseio.com",
  projectId: "authtest-209ba",
  storageBucket: "",
  messagingSenderId: "779811635258",
  appId: "1:779811635258:web:a454746d426f40fa"
};

Firebase.initializeApp(firebaseConfig);

export default {
  async signInWithGoogle() {
    let provider = new Firebase.auth.GoogleAuthProvider();
    return Firebase.auth()
      .signInWithPopup(provider)
      .then(result => {
        return result;
      })
      .catch(error => {
        error.message;
        alert(error.message);
      });
  },
  async signOut() {
    await Firebase.auth()
      .signOut()
      .then(() => {
        router.replace("/");
      })
      .catch(error => {
        alert(error.message);
      });
  }
};
