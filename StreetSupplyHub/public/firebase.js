// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7hq60ASY6uyZARoDKsAEvk-zJduVoV-4",
  authDomain: "streetsupplyhub.firebaseapp.com",
  projectId: "streetsupplyhub",
  storageBucket: "streetsupplyhub.appspot.com",
  messagingSenderId: "927325148222",
  appId: "1:927325148222:web:19b23fce52adcd9fcc2d6f",
  measurementId: "G-FV6EH210JE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
