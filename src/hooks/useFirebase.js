import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.config";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //email-password signUp and login system
  const regEmail = (e) => {
    setEmail(e.target.value);
  };
  const regPassword = (e) => {
    setPassword(e.target.value);
  };
  const regName = (e) => {
    setName(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password Must contain 1 upper case");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        setUserName();
        verifyEmail();
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      alert("Please go to your mail to verify your email address");
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    if (!email) {
      alert("Please type your email address");
      return;
    }
    sendPasswordResetEmail(auth, email).then((result) => {
      alert("please go to your mail account to reset your password");
    });
  };
  // google Login System
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  //facebook login System
  const signInUsingFacebook = () => {
    setIsLoading(true);
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return {
    setIsLoading,
    isLoading,
    user,
    setUser,
    error,
    setError,
    regEmail,
    regPassword,
    regName,
    handleSignUp,
    email,
    password,
    signInUsingGoogle,
    signInUsingFacebook,
    logOut,
    handleResetPassword,
  };
};

export default useFirebase;
