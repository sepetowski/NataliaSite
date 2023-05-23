interface Props {
	infoName: string;
	infoDeatil: string;
}

export const InfoItem = ({ infoName, infoDeatil }: Props) => {
	return (
		<p className='uppercase md:text-lg lg:text-xl '>
			{infoName} <span className='text-neutral-600'>{infoDeatil}</span>
		</p>
	);
};
