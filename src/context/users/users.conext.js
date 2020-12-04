import { createContext, useState } from 'react'

export const UserContext = createContext()

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null }
}

export default function UserProvider({ children }) {
  // State
  const [user, setUser] = useState(getUserFromLocalStorage())

  // user state and save in locastorage
  function userLogin(user) {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  // user state and remove from LocalStorage
  function userLogout() {
    setUser({ username: null, token: null })
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}
