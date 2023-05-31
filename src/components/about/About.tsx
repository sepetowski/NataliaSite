import aboutColorImg from '../../assets/imgs/aboutColorImg.jpg';
import aboutColor2Img from '../../assets/imgs/aboutCollorImg2.jpg';
import aboutGreyImg from '../../assets/imgs/aboutGreyImg.jpg';
import aboutGrey2Img from '../../assets/imgs/aboutGreyImg2.jpg';
import aboutBlackImg from '../../assets/imgs/aboutBlackImg.jpg';

export const About = () => {
	return (
		<main className='min-h-screen w-full flex flex-col lg:flex-row '>
			<div className='w-full h-16 md:h-20 lg:h-screen lg:w-1/3 lg:max-w-sm '></div>
			<div className='flex-grow flex  w-full'>
				<div className='hidden lg:block w-2/3 h-screen '>
					<img className='w-full h-full object-cover' src={aboutColorImg} alt='image of me :)' />
				</div>
				<div className='w-1/2 flex-grow flex i flex-col  p-4 sm:justify-center lg:p-8  '>
					<h2 className='text-xl xsm:text-2xl mt-4 sm:mt-0 sm:text-3xl pl-6 lg:pl-0 lg:text-4xl lg:mt-0 uppercase'>
						#About
					</h2>
					<div className='pl-6 mt-6 text-sm xsm:text-base sm:text-xl 2xl:text-2xl lg:pl-0  lg:mt-8'>
						<p>
							Hello, I'm a beginner model who has already participated in outdoor shoots and was
							also a hand and foot model for a beauty salon. I'm ready to gain new experience and
							expand my portfolio. I am interested in both TFP, barter and commercial sessions.
						</p>
						<p className='mt-4'>
							In addition to modeling, I am interested in sports and psychology. I am also a
							second-year nursing student, but despite this, I am rather available time-wise and can
							reconcile many responsibilities.
						</p>
					</div>
				</div>
				<div className='w-1/2 flex-grow flex items-center flex-col justify-center p-4 bg-black lg:hidden'>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-4 sm:mt-0 '
						src={aboutColorImg}
						alt='image of me :)'
					/>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-12 hidden sm:block'
						src={aboutGreyImg}
						alt='image of me :)'
					/>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-12 sm:mt-0 sm:hidden '
						src={aboutColor2Img}
						alt='image of me :)'
					/>
					<img
						className='w-32 xsm:w-44 sm:w-64 md:w-56 object-cover h-32 xsm:h-44 sm:h-64 md:h-56 mt-12 sm:hidden'
						src={aboutGrey2Img}
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
