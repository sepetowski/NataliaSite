import { useState } from 'react';
import { MobileNavigationBar } from '../components/navigation/MobileNaviagtionBar';
import { MobileNavigation } from '../components/navigation/MobileNavigation';
import { AnimatePresence } from 'framer-motion';
import { DesktopNavigation } from '../components/navigation/DesktopNavigation';
import { useMediaQuery } from '@react-hook/media-query';

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
			{isDesktop && (
				<AnimatePresence >
					<DesktopNavigation />
				</AnimatePresence>
			)}
		</>
	);
};
