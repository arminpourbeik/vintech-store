import { useContext } from 'react'

import { ProductContext } from '../../context/products/product.context'

import ProductList from './ProductList'
import Loading from '../Loading'

export default function FeaturedProducts() {
  // Product context
  const { loading, featured } = useContext(ProductContext)

  if (loading) return <Loading />

  return <ProductList products={featured} title='featured products' />
}
