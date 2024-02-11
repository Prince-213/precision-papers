



export const actions = {
    final: async ({ request, cookies }) => {
        const data = await request.formData();
        const uniquemanuscriptid  = data.get('uniquemanuscriptid')
        const correspondingauthorsnames = data.get('correspondingauthorsnames')
        const finalmanuscript = data.get('finalmanuscript')
		const authordeclaration = data.get('authordeclarations')
        

        const sendAdminMail = async ( title: any, email: any ) => {
            try {
            
                const response = await fetch(`/api/email-api/${title}`);
                const mail = await response.json();
                console.log(mail);
    
            } catch (error) {
                console.log(error)
            } finally {
            
            }
        };

        await sendAdminMail(`A new Final manuscript has been submitted to Precision Chronicles \n Title: ${manuscripttitle}`, `${mainauthoremail}`)

        return { message: "Registered Successfully!" }
    }
}