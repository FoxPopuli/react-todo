import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import TaskContext from "./task-context";

const AuthContext = createContext({
  currentUser: null,
  signUp: (email, password, username) => {},
  logIn: (email, password) => {},
  signUserOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  const taskCtx = useContext(TaskContext);

  const signUp = (email, password, username) => {
    taskCtx.setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        user.displayName = username;
        console.log(user);
        taskCtx.setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        taskCtx.setIsLoading(false);
      });
  };

  const logIn = (email, password) => {
    taskCtx.setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log(user);
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
  };

  return (
    <AuthContext.Provider value={context}>
      {!taskCtx.getIsLoading() && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
