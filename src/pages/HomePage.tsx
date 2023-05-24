import { motion } from 'framer-motion';
import { desktopPageAnim, mobilePageAnim } from '../animations/animations';
import { DesktopHeader } from '../components/home/desktopHeader/DesktopHeader';
import { MobileHeader } from '../components/home/mobileHeader/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const HomePage = () => {
	const isMobile = useMediaQuery('(min-width: 1024px)');

	return (
		<>
			{!isMobile && (
				<motion.div variants={mobilePageAnim} initial='hidden' animate='visible' exit='exit'>
					<MobileHeader />
				</motion.div>
			)}
			{isMobile && (
				<motion.div variants={desktopPageAnim} initial='hidden' animate='visible' exit='exit'>
					<DesktopHeader />
				</motion.div>
			)}
		</>
	);
};
