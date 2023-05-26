import { Link, useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	const toPrevSiteHandler = () => {
		navigate(-1);
	};
	return (
		<>
			<nav className='fixed top-0 left-0 h-16 md:h-20 w-full flex items-center justify-between p-12 bg-white z-50'>
				<Link to='/'>
					<h1 className='font-dancing  text-4xl transition-[letter-spacing] duration-300 hover:tracking-[0.5rem] '>
						NP Model
					</h1>
				</Link>
				<p
					onClick={toPrevSiteHandler}
					className='text-4xl duration-300 hover:tracking-[0.5rem] cursor-pointer'>
					Back
				</p>
				<Line isHorizontal={false} left='left-7' />
				<Line left='left-0' />
			</nav>
			<main className='min-h-screen w-full flex flex-col'>
				<div className='h-16 md:h-20 w-full'></div>

				<motion.div
					variants={galleryAnim}
					className='flex-grow w-full  p-12 grid grid-cols-1 sm:grid-cols-6  gap-5 '>
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
