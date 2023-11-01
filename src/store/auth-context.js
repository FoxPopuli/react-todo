import { useState, createContext, useContext, useEffect } from "react";
// import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext({
  //   currentUser,
  signUp: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }
    );
  };

  //   auth.createUserWithEmailAndPassword;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const context = {
    currentUser,
    signUp,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
