import { useState, createContext, useContext, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import TaskContext from "./task-context";

const AuthContext = createContext({
  currentUser: null,
  signUp: (email, password, username) => {},
  logIn: (email, password) => {},
  signUserOut: () => {},
  signUpWithGoogle: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const taskCtx = useContext(TaskContext);

  const signUp = async (email, password) => {
    taskCtx.setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }

    taskCtx.setIsLoading(false);
  };

  const signUpWithGoogle = async () => {
    taskCtx.setIsLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }

    taskCtx.setIsLoading(false);
  };

  const logIn = (email, password) => {
    taskCtx.setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log(user);
        taskCtx.fetchData();
        taskCtx.setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        taskCtx.setIsLoading(false);
      });
  };

  const signUserOut = () => {
    taskCtx.setIsLoading(true);
    signOut(auth).then(() => {
      console.log(`${currentUser.displayName} signed out.`);
      setCurrentUser(null);
      taskCtx.setIsLoading(false);
    });
  };

  useEffect(() => {
    taskCtx.setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      taskCtx.setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const context = {
    currentUser,
    signUp,
    logIn,
    signUserOut,
    signUpWithGoogle,
  };

  return (
    <AuthContext.Provider value={context}>
      {!taskCtx.getIsLoading() && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
