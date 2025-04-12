import { fail, type Actions } from '@sveltejs/kit'
import * as postmark from 'postmark'
import { POSTMARK_API_TOKEN } from '$env/static/private'

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')

		// Validate form inputs
		if (!name || !email || !message) {
			return fail(400, {
				success: false,
				message: 'All fields are required',
				values: {
					name: name || '',
					email: email || '',
					message: message || ''
				}
			})
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email.toString())) {
			return fail(400, {
				success: false,
				message: 'Please enter a valid email address',
				values: {
					name: name || '',
					email: email || '',
					message: message || ''
				}
			})
		}

		try {
			// Create a Postmark client
			const client = new postmark.ServerClient(POSTMARK_API_TOKEN)

			// Send email
			await client.sendEmail({
				From: 'info@ticekralt.com',
				To: 'info@ticekralt.com',
				Subject: 'New Contact Form Submission - Portfolio Website',
				HtmlBody: `
					<h1>New Message from Contact Form</h1>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Message:</strong></p>
					<p>${message}</p>
				`,
				TextBody: `
					New Message from Contact Form
					
					Name: ${name}
					Email: ${email}
					Message: ${message}
				`,
				MessageStream: 'outbound'
			})

			return {
				success: true,
				message: 'Your message has been sent! I will reach out to you shortly.'
			}
		} catch (error) {
			console.error('Error sending email:', error)

			return fail(500, {
				success: false,
				message: 'Failed to send your message. Please try again later.',
				values: {
					name: name || '',
					email: email || '',
					message: message || ''
				}
			})
		}
	}
}
