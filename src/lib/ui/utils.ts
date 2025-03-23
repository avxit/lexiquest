import { type ClassValue, cx } from 'cva';
import { MediaQuery } from 'svelte/reactivity';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(cx(inputs));
}

const MOBILE_BREAKPOINT = 768;

export class IsMobile extends MediaQuery {
	constructor() {
		super(`max-width: ${MOBILE_BREAKPOINT - 1}px`);
	}
}
