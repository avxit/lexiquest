import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:branches');
	const { data } = await supabase.from('branches').select('name').limit(5).order('name');
	return { branches: data ?? [] };
};
