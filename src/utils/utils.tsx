export const navItems = [
	{
		id: 1,
		name: 'home',
		to: '/',
		useRooting: true,
	},
	{
		id: 2,
		name: 'about me',
		to: '/',
		useRooting: false,
	},
	{
		id: 3,
		name: 'gallery',
		to: '/',
		useRooting: true,
	},
	{
		id: 4,
		name: 'contact me',
		to: '/',
		useRooting: true,
	},
];


export const stopPropagationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
	e.stopPropagation();
};
