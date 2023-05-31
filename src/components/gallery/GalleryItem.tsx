import { motion } from 'framer-motion';
import { galleryItemsAnim } from '../../animations/animations';
import zoomBlack from '../../assets/svg/zoom-black.svg';
import zoomWhite from '../../assets/svg/zoom-white.svg';
import { useMediaQuery } from '@react-hook/media-query';

interface Props {
	url: string;
	span: string;
	alt: string;
	id: number;
	isZoomIconWhite: boolean;
	onPhotoZoom: (id: number) => void;
}

export const GalleryItem = ({ url, span, alt, onPhotoZoom, id, isZoomIconWhite }: Props) => {
	const isTablet = useMediaQuery('(min-width: 640px)');

	const onPhotoZoomHandler = () => {
		onPhotoZoom(id);
	};

	return (
		<motion.div
			variants={galleryItemsAnim}
			onClick={onPhotoZoomHandler}
			className={`group  ${isTablet ? span : ''} shadow-sm `}>
			<div className='h-full w-full relative'>
				<div className={`w-full h-full overflow-hidden`}>
					<img
						className='w-full h-full object-cover object-center cursor-pointer duration-700 transition-all group-hover:scale-150'
						src={url}
						alt={alt}
					/>
				</div>
				<div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100 text-white backdrop-blur-sm w-full h-full flex justify-center items-center'>
					<img
						className='w-16 sm:w-10 lg:w-16'
						src={isZoomIconWhite ? zoomWhite : zoomBlack}
						alt='zoom icon'
					/>
				</div>
			</div>
		</motion.div>
	);
};
