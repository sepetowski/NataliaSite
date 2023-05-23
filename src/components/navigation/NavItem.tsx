import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fromRightNavItemsAnim } from '../../animations/animations';

interface Props {
	to: string;
	name: string;
	useRooting: boolean;
	desktop?: boolean;
	onClick?: () => void;
}

export const NavItem = ({ to, name, useRooting, onClick, desktop = false }: Props) => {
	if (useRooting)
		return (
			<motion.div variants={fromRightNavItemsAnim} className='w-96'>
				<Link
					onClick={onClick}
					className={`uppercase transition-[letter-spacing] duration-300 text-xl hover:tracking-[1rem] ${
						desktop ? 'p-2  bg-black bg-opacity-70 shadow-md' : ''
					}`}
					to={to}>
					{name}
				</Link>
			</motion.div>
		);
	else {
		return (
			<motion.div variants={fromRightNavItemsAnim} className='w-96'>
				<a
					onClick={onClick}
					href='#'
					className={`uppercase transition-[letter-spacing] duration-300 text-xl hover:tracking-[1rem] ${
						desktop ? 'p-2  bg-black bg-opacity-70 shadow-md ' : ''
					}`}>
					{name}
				</a>
			</motion.div>
		);
	}
};
