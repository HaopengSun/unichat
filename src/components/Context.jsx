import React, { useState, useCallback } from 'react'
import {useHistory} from 'react-router-dom';

export const ThemeContext = React.createContext()

function Display() {
  // Use the Consumer to grab the value from context Notice this component didn't get any props!
  return (
    <ThemeContext.Consumer>
      {value => <div>Children component: The answer is {value ? 'true' : 'false'}.</div>}
    </ThemeContext.Consumer>
  );
}

const Context = function(){
  const history = useHistory();
  const handleOnClick1 = useCallback(() => history.push('/'), [history]);
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = function(){
    setDarkTheme(!darkTheme)
  }

  return (
    <div>
      Context component
      {/* Use the Provider to make a value available to all children and grandchildren */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={() => toggleTheme()}>Toggle Theme (parent component)</button>
        <Display />
      </ThemeContext.Provider>
      <br/><br/>
      <button onClick={handleOnClick1}>Home</button>
    </div>
  )
}


export default Context;