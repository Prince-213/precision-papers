export const actions = {
	final: async ({ request }) => {
		const data = await request.formData();
		const uniquemanuscriptid = data.get('uniquemanuscriptid');

		const sendAdminMail = async (title: unknown, email: unknown, subject: unknown) => {
			try {
				const response = await fetch(`/api/email-api/custom`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: email,
						content: title,
						subject: subject
					})
				});

				const responseData = await response.json();
				console.log(responseData);
			} catch (e) {
				console.error(e);
			}
		};

		await sendAdminMail(
			`A new Final manuscript has been submitted to Precision Chronicles \n Title: ${uniquemanuscriptid}`,
			`precisionchronicles@gmail.com`,
			'Final Manuscript submitted'
		);

		return { message: 'Registered Successfully!' };
	}
};
