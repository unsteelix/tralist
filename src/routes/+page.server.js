import { error } from '@sveltejs/kit';
import db from '../lib/db'

export function load() {

	const words = db.words
    
	if (!words) throw error(404);

	return {
		words
	};
}
