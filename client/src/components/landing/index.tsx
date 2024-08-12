// import imageSvg from '@/assets/image-home.svg'
import { Button } from '../core/shadcn/button'
import Cobe from '../core/eldoraui/cobe'
export function Component() {
  return (
    <div className="screen-content flex min-h-[600px]">
      <div className='w-[50%]'>
        <Cobe />
      </div>
      <div className='flex flex-col justify-center items-center text-center w-[50%]'>
        <h2 className='font-bold text-4xl my-3'>Univerve Space Working</h2>
        <p className='max-w-[60%] my-2'>Every thing you need here with Notion workspace</p>
        <Button className='bg-blue-500 hover:bg-blue-600'>Get Started</Button>
      </div>
    </div>
  )
} 