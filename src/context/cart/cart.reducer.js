import { ADD, REMOVE, CLEAR_CART, INCREASE, DECREASE } from './cart.actions'

function cartReducer(state, action) {
  switch (action.type) {
    case ADD:
      const { id, image, title, price } = action.payload
      const product = { id, image, title, price, amount: 1 }
      return [...state, product]

    case REMOVE:
      return state.filter((item) => item.id !== action.payload)

    case CLEAR_CART:
      return []

    case INCREASE:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      )

    case DECREASE:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      )

    default:
      return state
  }
}

export default cartReducer
