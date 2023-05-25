import { useLocation } from 'react-router-dom';
import { Content } from './components/content/Content';
import { RootLayout } from './pages/RootLayout';

export const App = () => {
	const { pathname } = useLocation();
	return (
		<>
			{pathname !== '/gallery' && <RootLayout />}
			<Content />
		</>
	);
};
