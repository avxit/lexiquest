import { fail, redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const redirectTo = url.searchParams.get('redirect_to') ?? '/';

	return {
		redirectTo
	};
};

export const actions: Actions = {
	login: async ({ locals: { supabase }, request }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const redirectTo = (formData.get('redirect_to') as string) ?? '/';

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			console.error(error);

			return fail(400, { error: true, fieldValues: { email }, message: error.message });
		} else {
			redirect(303, redirectTo);
		}
	},
	logout: async ({ locals: { supabase } }) => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/');
		}
	}
};
