import { InfoBox } from '../../common/Info/InfoBox';
import hashtags from '../../../assets/imgs/hashtags.png';
import model from '../../../assets/imgs/mobileHeaderModel.jpg';

export const MobileHeader = () => {
	return (
		<header className='h-screen w-full flex flex-col '>
			<div className='w-full h-16 md:h-20 '></div>
			<div className='w-full h-full flex'>
				<div className='h-full w-1/2 flex flex-col '>
					<InfoBox />
				</div>
				<div className='h-full w-1/2 flex flex-col '>
					<div className='w-full h-2/3 '>
						<img className='h-full w-full object-cover ' src={model} alt='model image' />
					</div>
					<div className='w-full h-1/3  '>
						<img className='w-full h-full object-cover ' src={hashtags} alt='hashtags image' />
					</div>
				</div>
			</div>
		</header>
	);
};
