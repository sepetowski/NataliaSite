import instargramIcon from '../../assets/svg/instagram.svg';
import hamburgerIcon from '../../assets/svg/hamburger.svg';
import { Line } from '../common/Line';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeAnim, opacityAnim } from '../../animations/animations';

interface Props {
	onNavOpen: () => void;
}

export const MobileNavigationBar = ({ onNavOpen }: Props) => {
	const { pathname } = useLocation();
	return (
		<motion.div
			variants={HomeAnim}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='fixed top-0 left-0 w-full flex justify-between items-center h-16 md:h-20 z-30'>
			<div className='w-1/2 h-full  flex justify-center items-center relative bg-white'>
				<Link to='/'>
					<motion.h1
						variants={opacityAnim}
						className='font-dancing  text-2xl md:text-3xl transition-[letter-spacing] duration-300 hover:tracking-[0.3rem]'>
						NP Model
					</motion.h1>
				</Link>

				<Line isHorizontal={false} left='left-7' />
			</div>
			<div className='w-1/2 bg-black h-full  relative flex items-center'>
				<div className='w-1/2  h-full  flex justify-center items-center'>
					<motion.a variants={opacityAnim} href='https://instagram.com/iamnathalie_?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
						<img className='w-10' src={instargramIcon} alt='instagram icon' />
					</motion.a>
				</div>
				<div className='w-1/2 flex justify-center h-full items-center'>
					<motion.button variants={opacityAnim} onClick={onNavOpen}>
						<img className='w-10' src={hamburgerIcon} alt='open navigation button' />
					</motion.button>
				</div>

				{pathname !== '/contact' && (
					<Line isHorizontal={false} addTranslate={true} left='left-1/2' />
				)}
			</div>
			<Line left='left-0' />
		</motion.div>
	);
};
