import { useContext } from 'react'
import { ProductContext } from '../context/products/product.context'

import PageLayout from '../components/PageLayout'
import Loading from '../components/Loading'
import ProductList from '../components/Product/ProductList'

export default function Products() {
  const { loading, sorted } = useContext(ProductContext)

  return (
    <PageLayout>
      {loading ? (
        <Loading />
      ) : (
        <ProductList products={sorted} title='our products' />
      )}
    </PageLayout>
  )
}
