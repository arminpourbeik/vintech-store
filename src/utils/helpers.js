import URL from './URL'

export function imageUrl(products) {
  return products.map((product) => ({
    ...product,
    image: `${URL}${product.image.url}`,
  }))
}

export function featuredProducts(products) {
  return products.filter((product) => product.featured === true)
}
