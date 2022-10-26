import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider ,
  signInWithPopup
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
export const mycontext = createContext();
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loadding, setloadding] = useState(true);

  const getNameAndPhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const registration = (email, password) => {
    setloadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setloadding(true);
    return signOut(auth);
  };

  const googleSignin =() =>{
    return signInWithPopup(auth, provider)
  }

  const logIn = (email, password) => {
    setloadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloadding(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    registration,
    getNameAndPhoto,
    user,
    logout,
    logIn,
    loadding,
    googleSignin,
  };
  return (
    <mycontext.Provider value={contextValue}>{children}</mycontext.Provider>
  );
};

export default UserContext;
