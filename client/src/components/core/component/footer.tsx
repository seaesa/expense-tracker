import { InstagramLogoIcon, TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom';
import React from 'react';
import { Separator } from '../shadcn/separator';
const contentFooter = [
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
]
type ChildContentProps = {
  name: string,
  link: string
}
type ContentProps = {
  title: string,
  child: ChildContentProps[]
}
type SocialProps = {
  children: React.ReactNode
}
const IconSocial: React.FC<SocialProps> = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <div className='text-muted-foreground hover:text-foreground cursor-pointer text-xl mx-2'>
              {child}
            </div>
          )
        }
      })
      }
    </>
  )
}
const Footer: React.FC = () => {
  return (
    <>
      <div className='container min-h-[250px]'>
        <Separator className='my-4' />
        <div className='grid grid-cols-6 gap-8 auto-rows-auto'>
          <div className='col-span-2 flex flex-col justify-between h-full'>
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <div className='max-w-[80%] ml-4'>
              <span className='text-sm text-foreground'>Making the world a better place through Nosion Workspaces</span>
            </div>
            <div className='flex'>
              <IconSocial>
                <Link to='https://github.com/seaesa'>
                  <GitHubLogoIcon />
                </Link>
                <TwitterLogoIcon />
                <InstagramLogoIcon />
              </IconSocial>
            </div>
          </div>
          <div className='grid col-span-4 grid-flow-col'>
            {contentFooter.map((content: ContentProps) => (
              <div key={Math.random()}>
                <span className='block my-4 font-bold'>{content.title}</span>
                <div className='flex flex-col'>
                  {content.child.map((child, index) => (
                    <Link className='text-muted-foreground transition-colors hover:text-foreground my-1' key={index} to={child.link}>{child.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer