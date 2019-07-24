import Firebase from "firebase";

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
    return await Firebase.auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(error => {
        console.log(error.message);
      });
  },
  async signOut() {
    await Firebase.auth()
      .signOut()
      .then(() => {
        console.log("SingOut Success!");
      })
      .catch(error => {
        console.log(error.message);
      });
  }
};
