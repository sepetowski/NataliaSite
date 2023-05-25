import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fromRightNavItemsAnim } from '../../animations/animations';

interface Props {
	to: string;
	name: string;
	desktop?: boolean;
	onClick?: () => void;
}

export const NavItem = ({ to, name, onClick, desktop = false }: Props) => {
	return (
		<motion.div variants={fromRightNavItemsAnim} className='w-96'>
			<Link
				onClick={onClick}
				className={`uppercase transition-[letter-spacing] duration-300 text-xl md:hover:tracking-[1rem] ${
					desktop ? 'p-2  bg-black bg-opacity-70 shadow-md' : ''
				}`}
				to={to}>
				{name}
			</Link>
		</motion.div>
	);
};
