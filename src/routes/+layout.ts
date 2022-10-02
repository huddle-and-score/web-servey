import { EventRef, type Event } from '$lib/firebase/db';
import { getDoc } from 'firebase/firestore';
import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad<Event> = async () => {
	try {
		const res = await getDoc(EventRef);
		const event = res.data();
		if (!event) throw error(404, 'Not found');
		return event;
	} catch (e) {
		throw error(404, 'Not found');
	}
};