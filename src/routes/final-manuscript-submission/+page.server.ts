import { fail } from '@sveltejs/kit';



export const actions = {
    final: async ({ request, cookies }) => {
        const data = await request.formData();
        const uniquemanuscriptid  = data.get('uniquemanuscriptid')
        const correspondingauthorsnames = data.get('correspondingauthorsnames')
        const finalmanuscript = data.get('finalmanuscript')
		const authordeclaration = data.get('authordeclarations')
        
		

        console.log(data)

        console.log(data.get('uniquemanuscript id'))      

        return { message: "Registered Successfully!" }
    }
}