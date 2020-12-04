import { useContext } from 'react'
import styled from 'styled-components'

import PageLayout from '../components/PageLayout'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import { Section, Title } from '../components/common'

import { CartContext } from '../context/cart/cart.context'

const CartSection = styled(Section)`
  width: 50%;
  margin: 0 auto;

  & h2 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
`

export default function Cart() {
  // Cart context
  const { cart, total } = useContext(CartContext)

  return (
    <PageLayout>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartSection>
          <Title>your cart</Title>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <h2>total: {total}</h2>
        </CartSection>
      )}
    </PageLayout>
  )
}
