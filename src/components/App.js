import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"
import Context from "./Context"
import GoogleAuth from "./GoogleAuth"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <h3>Unichat course</h3>
      <Router>
        <AuthProvider>
          <Switch>
            {/* When true, will only match if the path matches the location.pathname exactly. */}
            <Route exact path="/" component={Login} />
            <Route path="/chats" component={Chats} />
            <Route path="/context" component={Context} />
            <Route path="/googleAuth" component={GoogleAuth} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
