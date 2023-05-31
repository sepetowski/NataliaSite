import { useContext, useEffect, useState } from 'react';
import { Gallery } from '../components/gallery/Gallery';
import { GalleryOverLay } from '../components/gallery/GalleryOverlay';
import { AnimatePresence, motion } from 'framer-motion';
import { GalleryPageAnim } from '../animations/animations';
import { AppContex } from '../store/appStore';

export const GalleryPage = () => {
	const { photosArray } = useContext(AppContex);
	const [zoomedPhotoUrl, setZoomedPhotoUrl] = useState('');
	const [zoomedPhotoAlt, setZoomedPhotoAlt] = useState('');
	const [zoomedPhotoIsHorizontal, setZoomedPhotoIsHorizontal] = useState(false);
	const [zoomedPhotoId, setZoomedPhotoId] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);

	const zoomPhotoHanlder = (id: number) => {
		const photo = photosArray.filter((photo) => photo.id === id)[0];

		setZoomedPhotoUrl(photo.url);
		setZoomedPhotoAlt(photo.alt);
		setZoomedPhotoId(photo.id);
		setZoomedPhotoIsHorizontal(photo.isHorizontal);
		setIsZoomed(true);
		document.body.style.overflow = 'hidden';
	};

	const nextPhotoHanlder = () => {
		let next;
		if (zoomedPhotoId < photosArray.length) next = zoomedPhotoId + 1;
		else next = 1;

		zoomPhotoHanlder(next);
	};
	const prevPhotoHanlder = () => {
		let prev;
		if (zoomedPhotoId === 1) prev = photosArray.length;
		else prev = zoomedPhotoId - 1;

		zoomPhotoHanlder(prev);
	};

	const closeOverleyHandler = () => {
		setIsZoomed(false);
		document.body.style.overflow = 'auto';
	};

	useEffect(() => {
		document.body.classList.remove('scrollbar-none');
		document.body.classList.add('scrollbar-thin', 'scrollbar-thumb-neutral-400');
	}, []);

	return (
		<motion.div variants={GalleryPageAnim} initial='hidden' animate='visible' exit='exit'>
			{photosArray.length != 0 && <Gallery photos={photosArray} onPhotoZoom={zoomPhotoHanlder} />}
			<AnimatePresence>
				{isZoomed && (
					<GalleryOverLay
						onClose={closeOverleyHandler}
						onNext={nextPhotoHanlder}
						onPrev={prevPhotoHanlder}
						isHorizontal={zoomedPhotoIsHorizontal}
						url={zoomedPhotoUrl}
						alt={zoomedPhotoAlt}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
