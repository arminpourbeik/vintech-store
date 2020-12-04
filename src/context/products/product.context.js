import { createContext, useState, useEffect } from 'react'
import axios from '../../api/base'

import { imageUrl, featuredProducts } from '../../utils/helpers'

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
  // States
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getProducts() {
      setLoading(true)
      const response = await axios.get('/products')
      const products = imageUrl(response.data)

      setProducts(products)
      setFeatured(featuredProducts(products))
      setLoading(false)
    }

    getProducts()

    // Cleanup func
    return () => {}
  }, [])

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}
