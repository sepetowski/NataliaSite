import { motion } from 'framer-motion';
import { InfoItem } from './InfoItem';
import { fromRightNavItemsAnim, staggerChildren } from '../../../animations/animations';

const infoDetails = [
	{
		infoName: 'height',
		infoDetail: '174',
	},
	{
		infoName: 'bust',
		infoDetail: '77',
	},
	{
		infoName: 'waist',
		infoDetail: '61',
	},
	{
		infoName: 'hips',
		infoDetail: '90',
	},
	{
		infoName: 'shoe size',
		infoDetail: '39',
	},
	{
		infoName: 'eyes',
		infoDetail: 'blue',
	},
	{
		infoName: 'hair',
		infoDetail: 'blond',
	},
];

export const InfoBox = () => {
	return (
		<motion.div variants={staggerChildren} className='w-full h-full bg-white flex flex-col justify-between p-4 pl-10 '>
			<div className='flex flex-col gap-3 text-sm xsm:text-base xsm:gap-4 md:text-lg md:gap-6 lg:gap-8 h-2/3 justify-center'>
				{infoDetails.map((deatil) => (
					<InfoItem
						key={deatil.infoName}
						infoName={deatil.infoName}
						infoDeatil={deatil.infoDetail}
					/>
				))}
			</div>
			<div className='flex flex-col h-1/3 justify-center'>
				<motion.h2 variants={fromRightNavItemsAnim} className='text-xl xsm:text-2xl md:text-3xl lg:text-4xl'>Natalia Piotrowska</motion.h2>
			</div>
		</motion.div>
	);
};
