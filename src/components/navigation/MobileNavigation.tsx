import { NavItem } from './NavItem';
import closeIcon from '../../assets/svg/close.svg';
import { Line } from '../common/Line';
import { stopPropagationHandler } from '../../utils/utils';

interface Props {
	onNavClose: () => void;
}

const navItems = [
	{
		name: 'home',
		to: '/',
		useRooting: true,
	},
	{
		name: 'about me',
		to: '/',
		useRooting: false,
	},
	{
		name: 'gallery',
		to: '/',
		useRooting: true,
	},
	{
		name: 'contact me',
		to: '/',
		useRooting: true,
	},
];

export const MobileNavigation = ({ onNavClose }: Props) => {
	

	return (
		<nav
			onClick={onNavClose}
			className='fixed top-0 left-0 h-screen w-full bg-black bg-opacity-60 flex justify-end '>
			<div onClick={stopPropagationHandler} className='h-full w-1/2 bg-black text-white  '>
				<div className='h-16  w-full flex pl-4 relative'>
					<button onClick={onNavClose}>
						<img className='w-10' src={closeIcon} alt='close navigation button' />
					</button>
					<Line left='left-0' />
				</div>
				<div className='h-full flex flex-col p-4 mt-10 gap-5'>
					{navItems.map((item) => (
						<NavItem name={item.name} to={item.to} useRooting={item.useRooting} />
					))}
				</div>
			</div>
		</nav>
	);
};
