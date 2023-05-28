import { useState } from 'react';
import { AppContex } from './appStore';
import { Photo } from '../types/types';

interface Props {
	children: React.ReactNode;
}

export const AppStoreProvider = ({ children }: Props) => {
	const [photosArray, setPhotosArray] = useState<Photo[]>([]);

	const setPhotosArrayHandler = (photos: Photo[]) => {
		setPhotosArray(photos);
	};

	const ctx = {
		photosArray: photosArray,
		setPhotosArray: setPhotosArrayHandler,
	};

	return <AppContex.Provider value={ctx}>{children}</AppContex.Provider>;
};
