import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import error from '../assets/lotties/404Error.json';
import { useScrollbarNone } from '../hooks/useScrollbarNone';

export const ErrorPage = () => {
	useScrollbarNone();
	return (
		<div className='flex flex-col justify-center items-center h-screen w-full relative max-w-7xl mx-auto p-4'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center'>
				Sorry, that page could not be find
			</h1>
			<Player autoplay loop src={error} style={{ height: '100%', width: '100%' }}></Player>
			<Link to='/' className=' mt-2 text-xl md:text-2xl lg:text-3xl '>
				BACK HOME
			</Link>
		</div>
	);
};
