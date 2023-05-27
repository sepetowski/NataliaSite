import instargramIcon from '../../assets/svg/instagram.svg';
import hamburgerIcon from '../../assets/svg/hamburger.svg';
import { Line } from '../common/Line';
import { Link, useLocation } from 'react-router-dom';

interface Props {
	onNavOpen: () => void;
}

export const MobileNavigationBar = ({ onNavOpen }: Props) => {
	const { pathname } = useLocation();
	return (
		<div className='fixed top-0 left-0 w-full flex justify-between items-center h-16 md:h-20 z-30'>
			<div className='w-1/2 h-full  flex justify-center items-center relative bg-white'>
				<Link to='/'>
					<h1 className='font-dancing  text-2xl md:text-3xl transition-[letter-spacing] duration-300 hover:tracking-[0.3rem]'>
						NP Model
					</h1>
				</Link>

				<Line isHorizontal={false} left='left-7' />
			</div>
			<div className='w-1/2 bg-black h-full  relative flex items-center'>
				<div className='w-1/2  h-full  flex justify-center items-center'>
					<a href='https://instagram.com/iamnathalie_?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
						<img className='w-10' src={instargramIcon} alt='instagram icon' />
					</a>
				</div>
				<div className='w-1/2 flex justify-center h-full items-center'>
					<button onClick={onNavOpen}>
						<img className='w-10' src={hamburgerIcon} alt='open navigation button' />
					</button>
				</div>

				{pathname !== '/contact' && (
					<Line isHorizontal={false} addTranslate={true} left='left-1/2' />
				)}
			</div>
			<Line left='left-0' />
		</div>
	);
};