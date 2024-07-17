import imageSvg from '@/assets/image-home.svg'
import { Button } from '../core/shadcn/button'
const ContentLandingPage = () => {
  return (
    <div className="screen-content flex">
      <div className='w-[50%]'>
        <img src={imageSvg} className='h-full' alt="write.svg" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='font-bold text-4xl my-3'>Write,plan,organize,play</h2>
        <p className='max-w-[50%]'>Every thing you need here with Notion workspace</p>
        <Button className='bg-blue-500 hover:bg-blue-600'>Get Started</Button>
      </div>
    </div>
  )
}
export default ContentLandingPage