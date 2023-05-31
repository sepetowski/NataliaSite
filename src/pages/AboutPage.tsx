import { motion } from 'framer-motion';
import { About } from '../components/about/About';
import { desktopPageAnim } from '../animations/animations';
import { useScrollbarNone } from '../hooks/useScrollbarNone';

export const AboutPage = () => {
	useScrollbarNone();
	return (
		<motion.div variants={desktopPageAnim} initial='hidden' animate='visible' exit='exit'>
			<About />
		</motion.div>
	);
};
