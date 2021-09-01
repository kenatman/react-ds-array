import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseApp from "./firebase";

class AuthService {
  login(socialName) {
    const auth = getAuth(firebaseApp);
    const provider =
      socialName === `Google`
        ? new GoogleAuthProvider()
        : socialName === `Github`
        ? new GithubAuthProvider()
        : null;

    return signInWithPopup(auth, provider);
  }

  logout() {
    const auth = getAuth(firebaseApp);
    auth.signOut();
  }

  authChanged(cb) {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => cb(user));
  }
}

export default AuthService;
