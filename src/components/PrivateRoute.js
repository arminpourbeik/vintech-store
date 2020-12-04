import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../context/users/users.conext'

export default function PrivateRoute({ children, ...props }) {
  const { user } = useContext(UserContext)
  return (
    <Route
      {...props}
      render={() => (user.token ? children : <Redirect to='/login' />)}
    ></Route>
  )
}
