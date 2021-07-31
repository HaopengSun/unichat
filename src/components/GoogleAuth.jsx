import React from 'react'
import googleProvider from '../config/authMethod'
import chatAuth from '../config/authentication'

const GoogleAuth = function(){
  const handleClick =  async function(provider){
    const res = await chatAuth(provider)
    console.log(res)
  }
  return (
    <div>
      <h4>Another method to do google auth</h4>
      <button onClick={() => handleClick(googleProvider)}>google login</button>
    </div>
  )
}

export default GoogleAuth