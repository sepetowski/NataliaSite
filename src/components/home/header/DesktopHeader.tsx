import model from "../../../assets/imgs/deskoptHeaderModel.jpg"

export const DesktopHeader = () => {
	return (
		<header className='h-screen w-full flex'>
			<div className='w-1/3 max-w-sm h-full'></div>
			<div className='w-full h-full'>
				<img
					className='h-full w-full object-cover object-right-top'
					src={model}
					alt='model image'
				/>
			</div>
		</header>
	);
};
