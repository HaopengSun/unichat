import React from "react"
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

const Chats = function(){
  const history = useHistory()

  const handleLogout = async () => {
    await auth.signOut()
    history.push('/')
  }

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div className="logout-tab" onClick={handleLogout}>Logout</div>
      </div>
      <ChatEngine 
        userName='haopeng'
        userSecret='123456'
        projectID="a5da4989-8b4e-402f-bfe3-a5c0ef254cef"
        height="calc(100vh - 66px)"
      />
    </div>
  )
}

export default Chats 