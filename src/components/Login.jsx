import React, {useCallback} from "react"

// import two icons
import { GoogleOutlined } from '@ant-design/icons';

import firebase from "firebase/app"
import { auth } from '../firebase'
import {useHistory} from 'react-router-dom';


const Login = function(){
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/context'), [history]);
  const handleOnClick1 = useCallback(() => history.push('/'), [history]);

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
        <br/><br/>
        <div className="login-button google" onClick={handleOnClick1}>Home</div>
      </div>
    </div>
  )
}

export default Login;