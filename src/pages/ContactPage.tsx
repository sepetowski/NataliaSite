import { motion } from "framer-motion";
import { desktopPageAnim } from "../animations/animations";
import { Contact } from "../components/contact/Contact";

export const ContactPage = () => {
     return (
		<motion.div variants={desktopPageAnim} initial='hidden' animate='visible' exit='exit'>
			<Contact />
		</motion.div>
	);
}