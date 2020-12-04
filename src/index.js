import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Contexts
import ProductProvider from './context/products/product.context'
import UserProvider from './context/users/users.conext'
import AlertProvider from './context/UI/alert.context'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AlertProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AlertProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
