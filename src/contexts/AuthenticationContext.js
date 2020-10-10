import React, { createContext, useState } from "react"

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState(null)
 
  const login = (username, password) => {
    // return auth.login(username, password).then((data) => {
    //   setUser(data.data)
    // })
  }


  return (
    <AuthenticationContext.Provider
      value={{
        user,
        login,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  )
}

export { AuthenticationContextProvider }
