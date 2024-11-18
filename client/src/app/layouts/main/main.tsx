import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Sidebar from '@components/sidebar/sidebar';
// type MainProps = {
//   children?: React.ReactNode
// }
const Main = () => {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) navigate('/');
  }, [cookies]);
  return (
    <>
      <div className='flex max-h-screen'>
        <Sidebar />
        <main className='flex-1 overflow-y-scroll'>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Main;
