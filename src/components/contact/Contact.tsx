import location from '../../assets/svg/location.svg';
import contactModelImg from '../../assets/imgs/contactImage.jpg';
export const Contact = () => {
	return (
		<main className='min-h-screen w-full flex flex-col lg:flex-row'>
			<div className='w-full h-16 md:h-20 lg:h-screen lg:w-1/3 lg:max-w-sm '></div>
			<div className='flex-grow flex  w-full'>
				<div className='hidden sm:block w-1/2 lg:w-2/3 flex-grow lg:h-screen'>
					<img className='w-full h-full object-cover object-right' src={contactModelImg} alt='image of me :)' />
				</div>
				<div className='w-1/2 flex-grow flex i flex-col  p-4  lg:justify-center lg:p-8  '>
					<h2 className='text-xl xsm:text-2xl mt-4  sm:text-3xl pl-6 sm:pl-0 lg:text-4xl lg:mt-0 uppercase'>
						#Contact
					</h2>
					<div className='mt-20 text-sm xsm:text-lg sm:text-xl 2xl:text-2xl'>
						<div className='flex justify-center items-center mb-3 mt-6'>
							<img className='w-6 md:w-8 lg:w-10 ' src={location} alt='location icon' />
						</div>
						<p className='uppercase text-center'>katowice</p>
						<p className='uppercase text-center mt-2'>warszawa</p>

						<p className='pl-6  sm:pl-0 mt-10 text-center'>
							You can find me within the above-mentioned cities, but I can also reach other places.
							Contact me by email{' '}
							<span className='underline text-neutral-600'>nathalia.ann@vp.pl</span> or using my
							instagram to arrange your session!
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};
