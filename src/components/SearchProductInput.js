import { useContext } from 'react'

import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

import { ProductContext } from '../context/products/product.context'

const SearchContainer = styled.div`
  width: 24rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;

  & svg {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    padding: 0;
    font-size: 1.2rem;
  }
`

const SearchInput = styled.input`
  padding: 1rem 1.5rem;
  border: none;
  line-height: 0;
  outline: none;
  width: 100%;
`

export default function SearchProductInput() {
  // Product context
  const { search, updateSearch } = useContext(ProductContext)

  return (
    <>
      <SearchContainer>
        <SearchInput
          placeholder='search products'
          value={search}
          onChange={updateSearch}
        />
        <FaSearch />
      </SearchContainer>
    </>
  )
}
