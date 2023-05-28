import { useLocation } from 'react-router-dom';
import { Content } from './components/content/Content';
import { RootLayout } from './pages/RootLayout';
import { useContext, useEffect } from 'react';
import { AppContex } from './store/appStore';

export const App = () => {
	const { pathname } = useLocation();
	const { setPhotosArray } = useContext(AppContex);

	useEffect(() => {
		const getPhotos = async () => {
			try {
				const res = await fetch('/images.json');
				const data = await res.json();

				setPhotosArray(data);
			} catch (err) {
				alert("Coudn't not load images, please reset the page");
			}
		};

		getPhotos();
	}, []);

	return (
		<>
			{(pathname === '/' || pathname === '/about' || pathname === '/contact') && <RootLayout />}
			<Content />
		</>
	);
};
