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

  return <UserContext.Provider>{children}</UserContext.Provider>
}
