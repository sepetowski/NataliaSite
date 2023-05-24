import { motion } from "framer-motion";
import { fromTopItemsAnim } from "../../../animations/animations";

interface Props {
	infoName: string;
	infoDeatil: string;
}

export const InfoItem = ({ infoName, infoDeatil }: Props) => {
	return (
		<motion.p variants={fromTopItemsAnim} className='uppercase md:text-lg lg:text-xl '>
			{infoName} <span className='text-neutral-600'>{infoDeatil}</span>
		</motion.p>
	);
};
