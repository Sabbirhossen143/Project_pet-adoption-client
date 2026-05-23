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
  const createUser = async (
  email,
  password,
  name,
  photo
) => {

  const result =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );



  await updateProfile(result.user, {

    displayName: name,

    photoURL: photo,

  });



  return result;

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
    "https://project-pet-adoption-server.onrender.com/jwt",
    {
      email: currentUser.email,
    },
    {
      withCredentials: true,
    }
  );

} else {

  axios.post(
    "https://project-pet-adoption-server.onrender.com/logout",
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