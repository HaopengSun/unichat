import React, {useCallback} from "react"

// import two icons
import { GoogleOutlined } from '@ant-design/icons';

import firebase from "firebase/app"
import { auth } from '../firebase'
import {useHistory} from 'react-router-dom';

const Login = function(){
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/context'), [history]);

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to unichat!</h2>
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign in Google
        </div>
        
        <br/><br/>
        <div className="login-button google" onClick={handleOnClick}>useContext example</div>
      </div>
    </div>
  )
}

export default Login;


// The useHistory hook gives you access to the history instance that you may use to navigate.
// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }