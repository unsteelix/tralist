import { error } from '@sveltejs/kit';
import db from '../../lib/db'

export function load() {

	const words = db.words
    
	if (!words) throw error(404);

	return {
		words
	};
}

export const actions = {
	// @ts-ignore
	update: async ({ request }) => {
		const data = await request.formData();
		const words = data.get('words')
		db.words = words
	}
};