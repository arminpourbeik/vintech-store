import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/images/logo.svg'

const Logo = styled.img`
  margin: 0 auto;
  padding: 2rem;
  width: 60%;
  max-width: 200px;
`

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Menu = styled.ul`
  display: flex;
  width: 50vw;
  max-width: 500px;
  justify-content: space-between;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

const MenuSection = styled.div`
  display: flex;
`

const MenuItem = styled.li`
  margin: 0 8px;
  font-family: 'Staatliches', cursive;
`

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  margin: auto 0;
  color: ${(p) => (p.isActive ? p.theme.mainBlue : 'black')};
  font-family: 'Staatliches', cursive;
`

export default function Header() {
  const { pathname } = useLocation()

  return (
    <HeaderWrapper>
      <Logo src={logo} alt='logo' />
      <Menu>
        <MenuSection>
          <MenuItem>
            <StyledLink to='/' isActive={pathname === '/'}>
              home
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to='/about' isActive={pathname === '/about'}>
              about
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to='/products' isActive={pathname === '/products'}>
              products
            </StyledLink>
          </MenuItem>
        </MenuSection>
        <MenuSection>
          <MenuItem>
            <StyledLink to='/login' isActive={pathname === '/login'}>
              login
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to='/cart' isActive={pathname === '/cart'}>
              cart
            </StyledLink>
          </MenuItem>
        </MenuSection>
      </Menu>
    </HeaderWrapper>
  )
}
