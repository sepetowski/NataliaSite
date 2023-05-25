import { Link, useNavigate } from 'react-router-dom';
import { Line } from '../common/Line';
import { GalleryItem } from './GalleryItem';

export const Gallery = () => {
	const navigate = useNavigate();
	const toPrevSiteHandler = () => {
		navigate(-1);
	};
	return (
		<>
			<nav className='fixed top-0 left-0 h-16 md:h-20 w-full flex items-center justify-between p-8 bg-white z-50'>
				<Link to='/'>
					<h1 className='font-dancing  text-4xl transition-[letter-spacing] duration-300 hover:tracking-[0.5rem] pl-2'>
						NP Model
					</h1>
				</Link>
				<p
					onClick={toPrevSiteHandler}
					className='text-4xl duration-300 hover:tracking-[0.5rem] cursor-pointer'>
					Back
				</p>
				<Line isHorizontal={false} left='left-7' />
				<Line left='left-0' />
			</nav>
			<main className='min-h-screen w-full flex flex-col'>
				<div className='h-16 md:h-20 w-full'></div>
				<div className='flex-grow w-full gallery  p-8 grid grid-cols-1 sm:grid-cols-2 auto-rows-auto md:grid-cols-3 lg:grid-cols-6 gap-5 '>
					<GalleryItem url='https://source.unsplash.com/random/?city' span='lg:col-span-3 row-span-2' />
					<GalleryItem url='https://source.unsplash.com/random/?night' span='lg:col-span-2'/>
					<GalleryItem url='https://source.unsplash.com/random/?car' />
					<GalleryItem url='https://source.unsplash.com/random/?winter'  />
					<GalleryItem url='https://source.unsplash.com/random/?city' span='col-span-2'/>
					<GalleryItem url='https://source.unsplash.com/random/?night' />
					<GalleryItem url='https://source.unsplash.com/random/?car' />
					<GalleryItem url='https://source.unsplash.com/random/?winter' />
					<GalleryItem url='https://source.unsplash.com/random/?city' />
					<GalleryItem url='https://source.unsplash.com/random/?night' />
					<GalleryItem url='https://source.unsplash.com/random/?car' />
					<GalleryItem url='https://source.unsplash.com/random/?winter' />
					<GalleryItem url='https://source.unsplash.com/random/?city' />
					<GalleryItem url='https://source.unsplash.com/random/?night' />
					<GalleryItem url='https://source.unsplash.com/random/?car' />
					<GalleryItem url='https://source.unsplash.com/random/?winter' />{' '}
					<GalleryItem url='https://source.unsplash.com/random/?city' />
					<GalleryItem url='https://source.unsplash.com/random/?night' />
					<GalleryItem url='https://source.unsplash.com/random/?car' />
					<GalleryItem url='https://source.unsplash.com/random/?winter' />
				</div>
			</main>
		</>
	);
};
