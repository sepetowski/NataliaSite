import { AnimatePresence, motion } from 'framer-motion';
import { galleryOpacityAnim, zoomedPhotoAnim } from '../../animations/animations';
import { useState } from 'react';
import arrowRight from '../../assets/svg/arrowRight.svg';
import arrowLeft from '../../assets/svg/arrowLeft.svg';
import arrowBack from '../../assets/svg/arrowBack.svg';

interface Props {
	url: string;
	alt: string;
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
	isHorizontal: boolean;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export const GalleryOverLay = ({ isHorizontal, url, alt, onClose, onPrev, onNext }: Props) => {
	const [direction, setDirection] = useState(1);

	const nextImgHandler = () => {
		setDirection(1);
		onNext();
	};
	const prevImgHandler = () => {
		setDirection(-1);
		onPrev();
	};
	return (
		<motion.div
			variants={galleryOpacityAnim}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='fixed top-0 left-0 h-screen w-full z-[100] bg-black   flex justify-center items-center'>
			<AnimatePresence initial={false} custom={direction}>
				<div className={`bg-whitec ${isHorizontal ? 'sm:w-10/12 sm:h-full' : ''} `}>
					<motion.img
						key={url}
						variants={zoomedPhotoAnim}
						custom={direction}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 250, damping: 50 },
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								onNext();
								setDirection(1);
							} else if (swipe > swipeConfidenceThreshold) {
								onPrev();
								setDirection(-1);
							}
						}}
						className='w-full h-full object-cover '
						src={url}
						alt={alt}
					/>
				</div>
			</AnimatePresence>

			
			<button
				onClick={onClose}
				className='absolute top-5 left-2 md:left-8 bg-black transition-colors duration-300 rounded-full shadow-md flex justify-center items-center w-10 h-10 md:h-16 md:w-16 hover:bg-neutral-900'>
				<img className='w-1/2' src={arrowBack} alt='arrow back icon' />
			</button>

			
			<button
				onClick={prevImgHandler}
				className='absolute top-1/2 translate-y-[-50%] left-2 md:left-8 bg-black transition-colors duration-300 rounded-full shadow-md flex justify-center items-center w-10 h-10 md:h-16 md:w-16 hover:bg-neutral-900'>
				<img className='w-1/2' src={arrowLeft} alt='arrow left icon' />
			</button>

			<button
				onClick={nextImgHandler}
				className='absolute top-1/2 translate-y-[-50%] right-2 md:right-8 bg-black transition-colors duration-300 rounded-full shadow-md flex justify-center items-center w-10 h-10 md:h-16 md:w-16 hover:bg-neutral-900'>
				<img className='w-1/2' src={arrowRight} alt='arrow right icon' />
			</button>
		</motion.div>
	);
};
