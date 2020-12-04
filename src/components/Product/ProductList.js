import { useLocation } from 'react-router-dom'

import styled from 'styled-components'

import Product from './Product'
import SearchProductInput from '../SearchProductInput'
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
const ProductListHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function ProductList({ title, products }) {
  // pathname
  const { pathname } = useLocation()

  return (
    <>
      <ProductListHeader>
        <Title>{title}</Title>
        {pathname === '/products' && <SearchProductInput />}
      </ProductListHeader>
      <ProductListContainer>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductListContainer>
    </>
  )
}
