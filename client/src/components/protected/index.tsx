import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Outlet, useNavigate } from 'react-router-dom';
// interface protectedProps {
//   children: React.ReactNode
// }
const ProtectedRoute: React.FC = () => {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.token) {
      navigate('/dashboard')
    }
  }, [cookies])
  return (
    <>
      <Outlet />
    </>
  )
}
export default ProtectedRoute