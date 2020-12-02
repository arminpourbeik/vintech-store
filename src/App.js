import { useState } from 'react'

// React router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Styled - components global styles
import { GlobalStyle } from './themes/global'
import { ThemeProvider } from 'styled-components'

// Themes
import LightTheme from './themes/light'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Error from './pages/404'
import Login from './pages/Login'

export default function App() {
  // Theme state
  const [theme] = useState(LightTheme)

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Router>
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
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/products/:id' children={<ProductDetails />} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
