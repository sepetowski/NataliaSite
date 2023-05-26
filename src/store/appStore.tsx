import React from 'react';

const initialState = {
	currentActivePage: '',

	setCurrentActivePage: (page: string) => {},
};

export const AppContex = React.createContext(initialState);
