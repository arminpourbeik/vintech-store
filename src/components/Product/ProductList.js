import styled from 'styled-components'

import Product from './Product'
import { Title } from '../common'

const ProductListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1.4rem;
  row-gap: 1.4rem;
  margin: 0 auto;
  max-width: 80vw;
  width: 80%;
  padding: 1rem;
`

export default function ProductList({ title, products }) {
  return (
    <>
      <Title>{title}</Title>
      <ProductListContainer>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductListContainer>
    </>
  )
}
