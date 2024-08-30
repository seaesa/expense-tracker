import { Link } from 'react-router-dom';
import { Button } from '../shadcn/button';
import { Separator } from '../shadcn/separator';
import SwitchTheme from '@/components/switch-theme';
import logo from '@/assets/images/logo.png';
const navBar = [
	{
		href: '/',
		title: 'Home',
	},
	{
		href: '/',
		title: 'Products',
	},
	{
		href: '/',
		title: 'Features',
	},
	{
		href: '/',
		title: 'Contact',
	},
];
export default function Header() {
	return (
		<>
			<div className='flex screen-header items-center justify-between mx-2 my-1'>
				<div className='mx-2'>
					<Link to='/' className='flex items-center'>
						<img src={logo} alt='logo.png' className='w-[50px] h-[50px] object-contain' />
						<span className='mx-2 text-lg font-extrabold font-playwrite'>NOSION</span>
					</Link>
				</div>
				<div className='flex flex-1 mx-5'>
					{navBar.map((nav, index) => (
						<nav
							key={index}
							className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'
						>
							<Field title={nav.title} href={nav.href} />
						</nav>
					))}
				</div>
				<div className='flex mx-2'>
					<SwitchTheme />
					<div className='flex items-center'>
						<Button asChild variant='ghost' className='hover:bg-none!'>
							<Link to='login'>Login</Link>
						</Button>
						<Separator orientation='vertical' className='h-6 mr-4' />
						<Button asChild>
							<Link to='/signup'>Get Nosion Free</Link>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

const Field = ({ href = '', title = '' }) => {
	return (
		<>
			<div className='mx-2'>
				<Link to={href} className='text-muted-foreground transition-colors hover:text-foreground'>
					{title}
				</Link>
			</div>
		</>
	);
};
