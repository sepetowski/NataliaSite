import { useEffect } from "react";

export const useScrollbarNone = () => {
    useEffect(() => {
		document.body.classList.remove('scrollbar-thin', 'scrollbar-thumb-neutral-400');
		document.body.classList.add('scrollbar-none');
	}, []);
}