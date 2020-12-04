import { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { ProductContext } from '../context/products/product.context'
import { CartContext } from '../context/cart/cart.context'

import PageLayout from '../components/PageLayout'
import Loading from '../components/Loading'
import { AnchorButton } from '../components/common'

const ProductDetailsContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  width: 60%;
  max-width: 60vw;
  margin: 6rem auto;
  & img {
    width: 40%;
    margin-right: 2rem;
    padding: 1rem;
    flex-shrink: 1;
  }

  & .product-details {
    flex-shrink: 3;
  }

  & h2 {
    font-family: 'Staatliches', cursive;
    font-size: 3.5rem;
  }
  & h2,
  h3 {
    margin-bottom: 1.5rem;
  }

  & h3 {
    font-size: 2.5rem;
    font-weight: bolder;
  }

  & p {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    & img {
      width: 80%;
    }
  }
`

function ProductDetails() {
  // Product context
  const { products } = useContext(ProductContext)

  // Cart context
  const { addToCart } = useContext(CartContext)

  // URL parameter
  let { id } = useParams()

  // History object
  const history = useHistory()

  // Get product by id
  const product = products.find((p) => p.id === parseInt(id))

  if (products.length === 0) return <Loading />

  const { title, price, image, description } = product

  return (
    <PageLayout>
      <ProductDetailsContainer>
        <img src={image} alt='title' />
        <div className='product-details'>
          <h2>{title}</h2>
          <h3>${price}</h3>
          <p>{description}</p>
          <AnchorButton
            block
            green
            to='#'
            onClick={() => {
              addToCart(product)
              history.push('/cart')
            }}
          >
            add to cart
          </AnchorButton>
        </div>
      </ProductDetailsContainer>
    </PageLayout>
  )
}

export default ProductDetails
