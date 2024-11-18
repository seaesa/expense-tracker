import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from '@/app/components/footer/footer';

const Landing = () => {
  return (
    <>
      <div className='flex flex-col container'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Landing;
