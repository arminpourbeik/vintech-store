import { createContext, useState, useEffect } from 'react'
import axios from '../../api/base'

import { imageUrl, featuredProducts } from '../../utils/helpers'

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
  // States
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(false)

  const [sorted, setSorted] = useState([])

  // Filters
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getProducts() {
      setLoading(true)
      const response = await axios.get('/products')
      const products = imageUrl(response.data)

      setProducts(products)
      setFeatured(featuredProducts(products))
      setSorted(products)
      setLoading(false)
    }

    getProducts()

    // Cleanup func
    return () => {}
  }, [])

  function updateSearch(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      const newProducts = products.filter((item) => {
        let title = item.title.toLowerCase().trim()
        return title.startsWith(search) ? item : null
      })

      setSorted(newProducts)
    } else {
      setSorted(products)
    }
  }, [search, products])

  return (
    <ProductContext.Provider
      value={{ loading, products, featured, sorted, search, updateSearch }}
    >
      {children}
    </ProductContext.Provider>
  )
}
