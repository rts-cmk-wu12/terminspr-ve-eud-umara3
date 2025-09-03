
"use server";

import { cookies } from "next/headers";
import z, { success } from "zod";

export default async function doTheLoginThing(prevState, formData) {
	const username = formData.get("username");
	const password = formData.get("password");

    if (!username || !password ) {
        return{
            success: false,
            errors: {
                username: !username? "Brugernavn skal udfyldes" : null,
                password: !password? "adgangskode skal udfyldes" : null,
            },
        };
    }


    try{
        const response = await fetch(``);
        const users = await response.json();

        const user = users[0];

        if (!user || user.password !== password ) {
            return{
                success: false,
                errors: {
                    general:"forkert"
                },
            };
        }
    


		const cookieStore = await cookies();
		cookieStore.set("AuthToken", json.stringify( {
            userId: user.id,
            username: user.username,}), {

                httpOnly: true,
			maxAge: 60 * 30,
            path:"/",
		});
	

	return {
        success:true,
        message: "login"
    };
} catch (error) {
    console.error("login fejl", error);
    return {
        success: false,
        errors:{
        genral: "Der er en fejl under login",
        },
    };
}
}


