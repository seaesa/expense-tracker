// import imageSvg from '@/assets/image-home.svg'
import { Button } from '../core/shadcn/button'
import Cobe from '../core/eldoraui/cobe'
const ContentLandingPage = () => {
  return (
    <div className="screen-content flex">
      <div className='w-[50%]'>
        {/* <img src={imageSvg} className='h-full' alt="write.svg" /> */}
        <Cobe />
      </div>
      <div className='flex flex-col justify-center items-center text-center w-[50%]'>
        <h2 className='font-bold text-4xl my-3'>Univerve Space Working</h2>
        <p className='max-w-[60%] text-slate-300 my-2'>Every thing you need here with Notion workspace</p>
        <Button className='bg-blue-500 hover:bg-blue-600'>Get Started</Button>
      </div>
    </div>
  )
}
export default ContentLandingPage
