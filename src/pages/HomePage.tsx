import { motion } from 'framer-motion';
import { desktopPageAnim, mobilePageAnim } from '../animations/animations';
import { DesktopHeader } from '../components/home/desktopHeader/DesktopHeader';
import { MobileHeader } from '../components/home/mobileHeader/MobileHeader';
import { useMediaQuery } from '@react-hook/media-query';
import { useScrollbarNone } from '../hooks/useScrollbarNone';

export const HomePage = () => {
	useScrollbarNone();
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	return (
		<>
			{!isDesktop && (
				<motion.div variants={mobilePageAnim} initial='hidden' animate='visible' exit='exit'>
					<MobileHeader />
				</motion.div>
			)}
			{isDesktop && (
				<motion.div variants={desktopPageAnim} initial='hidden' animate='visible' exit='exit'>
					<DesktopHeader />
				</motion.div>
			)}
		</>
	);
};
