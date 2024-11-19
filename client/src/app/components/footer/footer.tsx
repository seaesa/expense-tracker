import { Link } from 'react-router-dom';
import React from 'react';
import { Separator } from '../ui/separator';
import logo from '@/assets/images/logo.png';
import { footerConfig } from '@/config/path';
import { Facebook, Github, Linkedin } from 'lucide-react';
type ChildContentProps = {
  name: string;
  link: string;
};
type ContentProps = {
  title: string;
  child: ChildContentProps[];
};
const Footer: React.FC = () => {
  return (
    <>
      <div className='container min-h-[250px]'>
        <Separator className='my-4' />
        <div className='grid grid-cols-6 gap-8 auto-rows-auto'>
          <div className='col-span-6 md:col-span-2 flex flex-col space-y-4'>
            <div className='flex items-center'>
              <img src={logo} alt='log.png' />
              <div className='max-w-[80%] ml-4'>
                <span className='text-sm text-foreground'>
                  Making the world a better place through Nosion Workspaces
                </span>
              </div>
            </div>
            <div className='flex space-x-4 mx-4'>
              <Link to='https://github.com/seaesa' target='_blank'>
                <Github />
              </Link>
              <Link to='https://github.com/seaesa' target='_blank'>
                <Facebook />
              </Link>
              <Link to='https://www.linkedin.com/in/ngoc-hai-11a928307/' target='_blank'>
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className='grid col-span-6 grid-cols-2 lg:grid-cols-4 md:col-span-4'>
            {footerConfig.map((content: ContentProps) => (
              <div key={Math.random()} className='grid justify-center'>
                <span className='block my-4 font-bold'>{content.title}</span>
                <div className='flex flex-col'>
                  {content.child.map((child, index) => (
                    <Link
                      className='text-muted-foreground transition-colors hover:text-foreground my-1'
                      key={index}
                      to={child.link}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
