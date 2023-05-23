import { DesktopHeader } from '../components/home/header/DesktopHeader';
import { MobileHeader } from '../components/home/header/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const HomePage = () => {
	const isMobile = useMediaQuery('(max-width: 992px)');

	return (
		<>
			{isMobile && <MobileHeader />}
			{!isMobile && <DesktopHeader />}
		</>
	);
};
