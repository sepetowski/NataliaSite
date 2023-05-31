import model from '../../../assets/imgs/deskoptHeaderModel.jpg';

export const DesktopHeader = () => {
	return (
		<header className='h-screen w-full flex'>
			<div className='w-1/3 max-w-sm h-full bg-white'></div>
			<div className='w-full h-full clip relative '>
				<img
					className='h-full w-full fixed top-0  left-0 object-cover object-right-top bg-fixed'
					src={model}
					alt='model image'
				/>
			</div>
		</header>
	);
};
