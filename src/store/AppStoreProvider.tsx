import { useState } from 'react';
import { AppContex } from './appStore';

interface Props {
	children: React.ReactNode;
}

export const AppStoreProvider = ({ children }: Props) => {
	const [activePage, setActivePage] = useState('home');

	const setActivePageHandler = (page: string) => {
		setActivePage(page);
	};

	const ctx = {
		currentActivePage: activePage,
		setCurrentActivePage: setActivePageHandler,
	};

	return <AppContex.Provider value={ctx}>{children}</AppContex.Provider>;
};
