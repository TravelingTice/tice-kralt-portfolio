import { error } from '@sveltejs/kit'

export const load = () => {
	// Throw a 404 error to test the error page
	throw error(404, 'This is a test 404 error page')
}
