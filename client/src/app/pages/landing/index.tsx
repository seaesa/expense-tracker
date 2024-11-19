import { Button } from '../../components/ui/button';
import Cobe from '../../components/cobe';
import { Link } from 'react-router-dom';
export function Component() {
  return (
    <div className='flex flex-col md:flex-row min-h-[600px] items-center'>
      <div className='w-3/4 md:w-2/4 order-2'>
        <Cobe />
      </div>
      <div className='flex flex-col justify-center items-center text-center space-y-3 shrink-0 m-10 md:order-2'>
        <h2 className='font-bold text-3xl md:text-4xl'>Univerve Space Working</h2>
        <p className=''>Every thing you need here with Notion workspace</p>
        <Link to='/signup'>
          <Button >Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
