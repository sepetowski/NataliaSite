import React from 'react';
import { Photo } from '../types/types';

const initialState = {
	photosArray: [] as Photo[],
	setPhotosArray: (photos: Photo[]) => {},
};

export const AppContex = React.createContext(initialState);
