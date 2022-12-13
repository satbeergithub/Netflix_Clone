import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import firebase from "firebase";
import auth from "../../firebase";

function SignupScreen() {
  const [signup, setsignup] = useState(true);
  const [loading ,setloading] = useState(false)
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const switchAuthModeHandler = () => {
    setsignup((prevState) => !prevState);
  };

  const register = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(enteredemail, enteredpassword)
      .then((userCredential) => {
        setloading(false)
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
         alert('Please Make sure you enter the correct credential')
       return setloading(false)
      });
  };

const signinhandler=(e)=>{
  e.preventDefault();
  const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true)
    firebase.auth().signInWithEmailAndPassword(
      enteredemail,
      enteredpassword
      )
    .then((userCredential) => {
      setloading(false) 
      console.log(userCredential);
 
    })
    .catch((error) => {
     alert('Please Make sure you enter the correct credential')
     return setloading(false)
    });
}

  return (
    <div className="SignupScreen">
      <form>
        <h1>{signup ? "Sign up" : "Login In"}</h1>
        <input type="text" placeholder="Enter Your Email" ref={emailref}  required/>
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={passwordref}
          required
        />
        {loading && <p>Loading a content....</p>}
     {!loading && signup && <button onClick={register}>Sign Up</button>}  
        {!loading &&!signup && <button onClick={signinhandler}>Login in</button>}

        <h2>
          <span onClick={switchAuthModeHandler}>
            {!signup ? "Sign up" : "Login In"}
          </span>
        </h2>
      </form>
    </div>
  );
}

export default SignupScreen;




{/* <form>
        <h1>{signup ? "Sign up" : "Login In"}</h1>
        <input type="text" placeholder="Enter Your Email" ref={emailref} />
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={passwordref}
        />
        <button onClick={register}>{signup ? "Sign Up" : "Login In"}</button>
        <h2>
          <span onClick={switchAuthModeHandler}>
            {!signup ? "Sign up" : "Login In"}
          </span>
        </h2>
      </form> */}