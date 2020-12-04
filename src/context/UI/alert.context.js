import { createContext, useState } from 'react'

export const AlertContext = createContext()

export default function AlertProvider({ children }) {
  const [alert, setAlert] = useState({
    message: '',
    show: false,
  })

  function hideAlert() {
    setAlert({ ...alert, show: false })
  }

  function showAlert({ message }) {
    setAlert({ show: true, message })
  }

  return (
    <AlertContext.Provider value={{ alert, hideAlert, showAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
