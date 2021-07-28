import React, { useState } from 'react'

export const ThemeContext = React.createContext()

function Display() {
  // Use the Consumer to grab the value from context Notice this component didn't get any props!
  return (
    <ThemeContext.Consumer>
      {value => <div>The answer is {value ? 'true' : 'false'}.</div>}
    </ThemeContext.Consumer>
  );
}

const Context = function(){
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = function(){
    setDarkTheme(!darkTheme)
  }

  return (
    <div>
      Context component
      {/* Use the Provider to make a value available to all children and grandchildren */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={() => toggleTheme()}>Toggle Theme</button>
        <Display />
      </ThemeContext.Provider>
    </div>
  )
}


export default Context;