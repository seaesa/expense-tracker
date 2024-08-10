import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
interface protectedProps {
  children: React.ReactNode
}
const ProtectedRoute: React.FC<protectedProps> = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.token) {
      navigate('/dashboard')
    }
  }, [cookies])
  return (
    <>
      {children}
    </>
  )
}
export default ProtectedRoute