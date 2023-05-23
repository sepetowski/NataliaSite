import { InfoItem } from './InfoItem';

const infoDetails = [
	{
		infoName: 'height',
		infoDetail: '1,74',
	},
	{
		infoName: 'bust',
		infoDetail: '76',
	},
	{
		infoName: 'waist',
		infoDetail: '60',
	},
	{
		infoName: 'hips',
		infoDetail: '89',
	},
	{
		infoName: 'shoes',
		infoDetail: '39',
	},
	{
		infoName: 'eyes',
		infoDetail: 'blue',
	},
	{
		infoName: 'hair',
		infoDetail: 'blonde',
	},
];

export const InfoBox = () => {
	return (
		<div className='w-full h-full bg-white flex flex-col justify-between p-4 pl-10 '>
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
				<h2 className='text-xl xsm:text-2xl md:text-3xl lg:text-4xl'>Natalia Piotrowska</h2>
			</div>
		</div>
	);
};
