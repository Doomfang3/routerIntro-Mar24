import { Navigate } from 'react-router-dom'

const isAuthenticated = true

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return children
}

export default PrivateRoute
