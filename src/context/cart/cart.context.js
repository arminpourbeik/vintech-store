import { createContext, useState, useReducer, useEffect } from 'react'

import { ADD, REMOVE, CLEAR_CART, INCREASE, DECREASE } from './cart.actions'
import cartReducer from './cart.reducer'

export const CartContext = createContext()

function getCartFromLocalStorage() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

export default function CartProvider({ children }) {
  //TODO:"Custom hook `LocalStorage`"
  const [cart, dispatch] = useReducer(cartReducer, getCartFromLocalStorage())

  // Count cart items
  const [total, setTotal] = useState(0)

  // Total price
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    // Cart in LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart))

    // Change total items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount)
    }, 0)
    setCartItems(newCartItems)

    // Total price of cart
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price)
    }, 0)
    newTotal = parseFloat(newTotal.toFixed(2))
    setTotal(newTotal)
  }, [cart])

  function removeItem(id) {
    dispatch({ type: REMOVE, payload: id })
  }

  function increaseAmount(id) {
    dispatch({ type: INCREASE, payload: id })
  }

  function decreaseAmount(id, amount) {
    if (amount === 1) dispatch({ type: REMOVE, payload: id })
    else dispatch({ type: DECREASE, payload: id })
  }

  function addToCart(product) {
    let item = [...cart].find((item) => item.id === product.id)
    if (item) dispatch({ type: INCREASE, payload: product.id })
    else dispatch({ type: ADD, payload: product })
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
