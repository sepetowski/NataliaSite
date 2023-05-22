import { Link } from 'react-router-dom';

interface Props {
	to: string;
	name: string;
	useRooting: boolean;
}

export const NavItem = ({ to, name, useRooting }: Props) => {
	if (useRooting)
		return (
			<Link className='uppercase text-xl ' to={to}>
				{name}
			</Link>
		);
	else {
		return (
			<a href='#' className='uppercase text-xl '>
				{name}
			</a>
		);
	}
};
