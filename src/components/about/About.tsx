import aboutColorImg from '../../assets/imgs/aboutColorImg.jpg';
import aboutGreyImg from '../../assets/imgs/aboutGreyImg.jpg';
import aboutBlackImg from '../../assets/imgs/aboutBlackImg.jpg';

export const About = () => {
	return (
		<main className='min-h-screen w-full flex flex-col lg:flex-row'>
			<div className='w-full h-16 md:h-20 lg:h-screen lg:w-1/3 lg:max-w-sm '></div>
			<div className='flex-grow flex  w-full'>
				<div className='hidden lg:block w-2/3 h-screen '>
					<img className='w-full h-full object-cover' src={aboutColorImg} alt='image of me :)' />
				</div>
				<div className='w-1/2 flex-grow flex i flex-col  p-4 sm:justify-center lg:p-8  '>
					<h2 className='text-xl xsm:text-2xl mt-4 sm:mt-0 sm:text-3xl pl-6 lg:pl-0 lg:text-4xl lg:mt-0'>
						#About
					</h2>
					<p className='pl-6 mt-6 text-sm xsm:text-lg sm:text-2xl lg:pl-0 2xl:text-3xl lg:mt-8'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quidem minus dolorum ab,
						blanditiis maxime similique magnam consectetur eos ex beatae officia doloribus nesciunt
						possimus, pariatur voluptatum.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Amet quidem minus dolorum ab, blanditiis maxime similique
					</p>
				</div>
				<div className='w-1/2 flex-grow flex items-center flex-col justify-center p-4 bg-black lg:hidden'>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-4 sm:mt-0 '
						src={aboutColorImg}
						alt='image of me :)'
					/>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-12'
						src={aboutGreyImg}
						alt='image of me :)'
					/>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 sm:h-64 xsm:h-44 md:h-56 mt-12'
						src={aboutBlackImg}
						alt='image of me :)'
					/>
				</div>
			</div>
		</main>
	);
};
