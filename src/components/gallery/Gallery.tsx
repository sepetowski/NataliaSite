import { Link } from 'react-router-dom';
import { Line } from '../common/Line';
import { GalleryItem } from './GalleryItem';
import { Photo } from '../../types/types';
import { motion } from 'framer-motion';
import { galleryAnim } from '../../animations/animations';

interface Props {
	photos: Photo[];
	onPhotoZoom: (id: number) => void;
}

export const Gallery = ({ photos, onPhotoZoom }: Props) => {
	return (
		<>
			<nav className='fixed top-0 left-0 h-16 md:h-20 w-full flex items-center justify-between p-6 md:p-12 bg-white z-50'>
				<Link to='/'>
					<h1 className='font-dancing  text-2xl md:text-3xl  lg:text-4xl transition-[letter-spacing] duration-300 hover:tracking-[0.5rem] pl-4 md:pl-0 '>
						NP Model
					</h1>
				</Link>
				<Link
					className=' text-2xl md:text-3xl lg:text-4xl duration-300 hover:tracking-[0.5rem] cursor-pointer'
					to={'/'}>
					Back
				</Link>
				<Line isHorizontal={false} left='left-7' />
				<Line left='left-0' />
			</nav>
			<main className='min-h-screen w-full flex flex-col  overflow-x-hidden'>
				<div className='h-16 md:h-20 w-full'></div>

				<motion.div
					variants={galleryAnim}
					className='flex-grow w-full p-4 pl-10 pr-10 md:pl-12 md:pr-12 md:p-12 grid grid-cols-1 grid-rows-12 sm:grid-cols-7 gap-5  '>
					{photos.map((photo) => (
						<GalleryItem
							key={photo.id}
							url={photo.url}
							span={photo.span}
							alt={photo.alt}
							onPhotoZoom={onPhotoZoom}
							id={photo.id}
							isZoomIconWhite={photo.isZoomIconWhite}
						/>
					))}
				</motion.div>
			</main>
		</>
	);
};
