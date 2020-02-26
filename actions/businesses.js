import { LOAD_BUSINESSES } from './types';

export const loadBusinesses = (businesses) => ({
	type: LOAD_BUSINESSES,
	data: businesses
});
