// script.js

import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get user role from Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          const role = userSnap.data().role;

          // Redirect based on role
          if (role === "admin") {
            window.location.href = "admin.html";
          } else if (role === "seller") {
            window.location.href = "seller.html";
          } else if (role === "buyer") {
            window.location.href = "buyer.html";
          } else {
            errorMsg.textContent = "Unknown role!";
            errorMsg.classList.remove("hidden");
          }
        } else {
          errorMsg.textContent = "No user data found!";
          errorMsg.classList.remove("hidden");
        }
      } catch (error) {
        console.error("Login error:", error.message);
        errorMsg.textContent = "Login failed. Please check your email and password.";
        errorMsg.classList.remove("hidden");
      }
    });
  }
});
