import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import type { Database } from '$lib/db/db.gen';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			safeGetSession: () => Promise<{ session: null | Session; user: null | User }>;
			session: null | Session;
			supabase: SupabaseClient<Database>;
			user: null | User;
		}
		interface PageData {
			session: null | Session;
			user: null | User;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
