interface Props {
	isHorizontal?: boolean;
	addTranslate?: boolean;
	left: string;
}

export const Line = ({ isHorizontal = true, addTranslate = false, left }: Props) => {
	let classVariant = `absolute  bottom-0 w-full h-[1px] bg-neutral-300 ${left ? left : ''}`;
	if (!isHorizontal)
		classVariant = `absolute top-0  h-screen w-[1px] bg-neutral-300 ${left ? left : ''}`;
	return <div className={`${classVariant} ${addTranslate ? 'translate-x-[-50%]' : ''}`}></div>;
};
