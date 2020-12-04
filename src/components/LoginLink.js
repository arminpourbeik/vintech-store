import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { UserContext } from '../context/users/users.conext'

import { MenuItem, StyledLink } from './Header'

export default function LoginLink() {
  const { pathname } = useLocation()
  const { user, userLogout } = useContext(UserContext)

  if (user.token) {
    return (
      <MenuItem>
        <StyledLink to='#' onClick={() => userLogout()}>
          logout
        </StyledLink>
      </MenuItem>
    )
  }

  return (
    <MenuItem>
      <StyledLink to='/login' isActive={pathname === '/login'}>
        login
      </StyledLink>
    </MenuItem>
  )
}
