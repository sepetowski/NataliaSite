interface Props {
	url: string;
	span?: string;
}

export const GalleryItem = ({ url, span }: Props) => {
	return (
		<div className={`group ${span} shadow-sm `}>
			<div className='h-full w-full relative col-span-3'>
				<div className='w-full h-full overflow-hidden '>
					<img
						loading='lazy'
						className='w-full h-full object-cover object-center cursor-pointer duration-700 transition-all group-hover:scale-150'
						src={url}
						alt=''
					/>
				</div>
				<div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100 text-white backdrop-blur-sm w-full h-full flex justify-center items-center'>
					ikonka
				</div>
			</div>
		</div>
	);
};
