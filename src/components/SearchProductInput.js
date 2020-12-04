import { useContext } from 'react'

import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

import { ProductContext } from '../context/products/product.context'

const SearchInput = styled.input`
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.7rem 1.5rem;
  width: 24rem;
  border-radius: 10px;
  border: none;
  outline: none;
`

export default function SearchProductInput() {
  // Product context
  const { search, updateSearch } = useContext(ProductContext)

  return (
    <>
      <SearchInput
        placeholder='search products'
        value={search}
        onChange={updateSearch}
      />
    </>
  )
}
