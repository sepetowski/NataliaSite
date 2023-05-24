export const navItems = [
	{
		id: 1,
		name: 'home',
		to: '/',
	},
	{
		id: 2,
		name: 'about me',
		to: '/about',
	},
	{
		id: 3,
		name: 'gallery',
		to: '/gallery',
	},
	{
		id: 4,
		name: 'contact me',
		to: '/contact',
	},
];

export const stopPropagationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
	e.stopPropagation();
};
