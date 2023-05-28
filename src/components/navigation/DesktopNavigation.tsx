import { InfoBox } from '../common/Info/InfoBox';
import { Line } from '../common/Line';
import instargramIcon from '../../assets/svg/instagram.svg';
import { navItems } from '../../utils/utils';
import { NavItem } from './NavItem';
import { motion } from 'framer-motion';
import { HomeAnim, opacityAnim } from '../../animations/animations';
import { Link } from 'react-router-dom';
import hastags from '../../assets/imgs/desktopNavHashtags.png';

export const DesktopNavigation = () => {
	return (
		<motion.nav
			key='desktopNav'
			variants={HomeAnim}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='fixed top-0 left-0 w-1/3 max-w-sm h-screen flex z-50'>
			<Line isHorizontal={false} left='left-7' />
			<div className='w-full h-full bg-white '>
				<div className='h-20  flex justify-center items-center relative'>
					<Link to='/'>
						<motion.h1
							variants={opacityAnim}
							className='font-dancing  text-4xl transition-[letter-spacing] duration-300 hover:tracking-[0.5rem]'>
							NP Model
						</motion.h1>
					</Link>
					<Line isHorizontal={false} left='left-7' />
					<Line left='left-0' />
				</div>

				<InfoBox />
			</div>
			<div className='w-1/5 h-full  relative'>
				<div className='h-20 w-full  flex justify-center items-center z-10'>
					<motion.a
						variants={opacityAnim}
						href='https://instagram.com/iamnathalie_?igshid=NTc4MTIwNjQ2YQ=='
						target='_blank'>
						<img className='w-10' src={instargramIcon} alt='instagram icon' />
					</motion.a>
				</div>
				<div className='text-white flex flex-col gap-8 mt-10 ml-6 z-20'>
					{navItems.map((item) => (
						<NavItem key={item.id} name={item.name} to={item.to} desktop={true} />
					))}
				</div>
				<img
					className='absolute bottom-0 left-0 w-full h-full object-cover z-[-20]'
					src={hastags}
					alt='hashtags'
				/>
			</div>
		</motion.nav>
	);
};
