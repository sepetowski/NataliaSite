import { AnimatePresence } from 'framer-motion';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { AboutPage } from '../../pages/AboutPage';
import { GalleryPage } from '../../pages/GalleryPage';
import { ContactPage } from '../../pages/ContactPage';

const routes = [
	{ path: '/', name: 'home', Component: HomePage },
	{ path: '/about', name: 'about', Component: AboutPage },
	{ path: '/gallery', name: 'gallery', Component: GalleryPage  },
	{ path: '/contact', name: 'contact', Component: ContactPage },
];

const routeComponents = routes.map(({ path, name, Component }) => (
	<Route key={name} path={path} element={<Component />} />
));

export const Content = () => {
	const location = useLocation();

	return (
		<div className='content'>
			<AnimatePresence mode='wait'>
				<Routes key={location.pathname} location={location}>
					{routeComponents}
				</Routes>
			</AnimatePresence>
		</div>
	);
};
