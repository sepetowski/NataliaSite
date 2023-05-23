import { NavItem } from './NavItem';
import closeIcon from '../../assets/svg/close.svg';
import { Line } from '../common/Line';
import { navItems, stopPropagationHandler } from '../../utils/utils';
import { motion } from 'framer-motion';
import {
	fromRightNavItemsAnim,
	navAnim,
	navOpacityAnim,
	staggerChildren,
} from '../../animations/animations';

interface Props {
	onNavClose: () => void;
}



export const MobileNavigation = ({ onNavClose }: Props) => {
	return (
		<motion.nav
			variants={navOpacityAnim}
			initial='hidden'
			animate='visible'
			exit='exit'
			key={'nav'}
			onClick={onNavClose}
			className='fixed top-0 left-0 h-screen w-full bg-black bg-opacity-60 flex justify-end '>
			<motion.div
				variants={navAnim}
				onClick={stopPropagationHandler}
				className='h-full w-1/2 bg-black text-white  '>
				<div className='h-16  w-full flex pl-4 relative'>
					<motion.button variants={fromRightNavItemsAnim} onClick={onNavClose}>
						<img className='w-10' src={closeIcon} alt='close navigation button' />
					</motion.button>
					<Line left='left-0' />
				</div>
				<motion.div
					variants={staggerChildren}
					className='h-full w-full flex flex-col p-4 mt-10 gap-5'>
					{navItems.map((item) => (
						<NavItem
							key={item.id}
							name={item.name}
							to={item.to}
							useRooting={item.useRooting}
							onClick={onNavClose}
						/>
					))}
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};
