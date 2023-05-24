import { Variants } from 'framer-motion';

export const navOpacityAnim: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			duration: 0.3,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,

		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export const desktopPageAnim: Variants = {
	hidden: {
		opacity: 0,
		y: -1000,
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 1,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: 1000,

		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};
export const mobilePageAnim: Variants = {
	hidden: {
		opacity: 0,
		y: 300,
		
	},
	visible: {
		opacity: 1,
		y: 0,
		

		transition: {
			duration: 1,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: 300,

		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};

export const staggerChildren = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			duration: 0.3,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
};

export const navAnim: Variants = {
	hidden: {
		opacity: 0,
		x: '100%',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
	exit: {
		opacity: 0,
		x: '100%',
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};
export const HomeAnim: Variants = {
	hidden: {
		
		x: "-100%",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.6,
			delay: 1
		},
	},
	exit: {
		opacity: 0,
		x: "100%",
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fromRightNavItemsAnim: Variants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};
export const fromTopItemsAnim: Variants = {
	hidden: {
		opacity: 0,
		y: 150,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};
