import { useContext } from 'react'
import styled from 'styled-components'

import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

import { CartContext } from '../../context/cart/cart.context'

const SingleCartItem = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  & img {
    width: 5rem;
  }

  & h4 {
    font-size: 0.85rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }

  & h5 {
    margin: 0.5rem 0;
  }

  & .item-amount {
    text-align: center;
    margin-bottom: 0;
  }

  & .cart-btn {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  & .remove-btn {
    color: ${(p) => p.theme.darkGrey};
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  & .amount-btn {
    color: ${(p) => p.theme.primaryColor};
    font-size: 1rem;
  }
`

export default function CartItem({ id, image, title, price, amount }) {
  // Cart context
  const { removeItem, increaseAmount, decreaseAmount } = useContext(CartContext)

  return (
    <SingleCartItem>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type='button'
          className='cart-btn remove-btn'
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type='button'
          className='cart-btn amount-btn'
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <p className='item-amount'>{amount}</p>
        <button
          type='button'
          className='cart-btn amount-btn'
          onClick={() => decreaseAmount(id, amount)}
        >
          <FaAngleDown />
        </button>
      </div>
    </SingleCartItem>
  )
}
