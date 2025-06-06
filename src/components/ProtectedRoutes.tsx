import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/authContext'

export default function ProtectedRoutes() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}