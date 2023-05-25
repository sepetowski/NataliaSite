import { useState } from 'react';
import { MobileNavigationBar } from '../components/navigation/MobileNaviagtionBar';
import { MobileNavigation } from '../components/navigation/MobileNavigation';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AnimatePresence } from 'framer-motion';
import { DesktopNavigation } from '../components/navigation/DesktopNavigation';

export const RootLayout = () => {

	const [isNavOpen, setIsNavOpen] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	

	const closeNavHanlder = () => {
		setIsNavOpen(false);
	};
	const openNavHandler = () => {
		setIsNavOpen(true);
	};

	return (
		<>
			{!isDesktop && (
				<>
					<MobileNavigationBar onNavOpen={openNavHandler} />
					<AnimatePresence>
						{isNavOpen && <MobileNavigation onNavClose={closeNavHanlder} />}
					</AnimatePresence>
				</>
			)}
			{isDesktop && <DesktopNavigation />}
		</>
	);
};
