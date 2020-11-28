// React router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductsDetails'
import Error from './pages/404'

// Components
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/products' exact>
          <Products />
        </Route>
        <Route path='/products/:id' children={<ProductDetails />} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
