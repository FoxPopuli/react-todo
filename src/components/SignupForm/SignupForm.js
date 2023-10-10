import classes from "./SignupForm.module.css";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const SignupForm = () => {

    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

  return (
    <Card>
      <form>
        <h2>Add New Task</h2>
        <div className={classes.formSection}>
          <label htmlFor="email">E-mail</label>
          <input type="email" required ref={titleInputRef}></input>
        </div>
        <div className={classes.formSection}>
          <label htmlFor="password">E-mail</label>
          <input type="password" required ref={titleInputRef}></input>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;