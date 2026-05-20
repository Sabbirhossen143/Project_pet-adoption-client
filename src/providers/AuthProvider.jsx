"use client";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logoutUser = () => {
    return signOut(auth);
  };

  // User Observer
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

if (currentUser?.email) {

  axios.post(
    "http://localhost:5000/jwt",
    {
      email: currentUser.email,
    },
    {
      withCredentials: true,
    }
  );

} else {

  axios.post(
    "http://localhost:5000/logout",
    {},
    {
      withCredentials: true,
    }
  );
}

setLoading(false);
    });

    return () => unsubscribe();

  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;