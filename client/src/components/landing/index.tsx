// import imageSvg from '@/assets/image-home.svg'
import { Button } from '../core/shadcn/button';
import Cobe from '../core/eldoraui/cobe';
import { Link } from 'react-router-dom';
export function Component() {
  return (
    <div className='screen-content flex min-h-[600px]'>
      <div className='w-[50%]'>
        <Cobe />
      </div>
      <div className='flex flex-col justify-center items-center text-center w-[50%] space-y-3'>
        <h2 className='font-bold text-4xl'>Univerve Space Working</h2>
        <p className='max-w-[60%]'>Every thing you need here with Notion workspace</p>
        <Link to='/login'><Button className='bg-blue-500 hover:bg-blue-600'>Get Started</Button></Link>
      </div>
    </div>
  );
}
