



export const actions = {
    final: async ({ request, cookies }) => {
        const data = await request.formData();
        const uniquemanuscriptid  = data.get('uniquemanuscriptid')
        const correspondingauthorsnames = data.get('correspondingauthorsnames')
        const finalmanuscript = data.get('finalmanuscript')
		const authordeclaration = data.get('authordeclarations')
        
        return { message: "Registered Successfully!" }
    }
}