import { motion } from 'framer-motion';
import { About } from '../components/about/About';
import { desktopPageAnim } from '../animations/animations';

export const AboutPage = () => {
	return (
		<motion.div variants={desktopPageAnim} initial='hidden' animate='visible' exit='exit'>
			<About />
		</motion.div>
	);
};
