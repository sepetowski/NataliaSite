import { useState } from 'react';
import { MobileNavigationBar } from '../components/navigation/MobileNaviagtionBar';
import { MobileNavigation } from '../components/navigation/MobileNavigation';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { DesktopNavigation } from '../components/navigation/DesktopNavigation';
export const RootLayout = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 992px)');

	const closeNavHanlder = () => {
		setIsNavOpen(false);
	};
	const openNavHandler = () => {
		setIsNavOpen(true);
	};

	return (
		<>
			{isMobile && (
				<>
					<MobileNavigationBar onNavOpen={openNavHandler} />
					<AnimatePresence>
						{isNavOpen && <MobileNavigation onNavClose={closeNavHanlder} />}
					</AnimatePresence>
				</>
			)}
			{!isMobile && <DesktopNavigation />}
			<Outlet />
		</>
	);
};
