import { useState } from 'react';
import { MobileNavigationBar } from '../components/navigation/MobileNaviagtionBar';
import { MobileNavigation } from '../components/navigation/MobileNavigation';
export const Root = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prev) => !prev);
	};

	return (
		<>
			<MobileNavigationBar onNavOpen={toggleNavHandler} />
			{isNavOpen && <MobileNavigation onNavClose={toggleNavHandler} />}
		</>
	);
};
