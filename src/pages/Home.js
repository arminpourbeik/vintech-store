import PageLayout from '../components/PageLayout'

import Banner from '../components/Hero'
import FeaturedProducts from '../components/Product/FeaturedProducts'

export default function Home() {
  return (
    <PageLayout>
      <Banner />
      <FeaturedProducts />
    </PageLayout>
  )
}
