
"use server";

import { cookies } from "next/headers";
import z,{ success } from "zod";




export default async function doTheLoginThing(prevState, formData) {
	const username = formData.get("username");
	const password = formData.get("password");

	const schema = z.object({
		username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
		password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
	});

	const result = schema.safeParse({
		username, password
	});


    if (!result.success) {
        return{
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    try{
        const response = await fetch("http://localhost:4000/auth/token", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({username, password}),
        });

        if(!response.ok) {
            return{
                success: false,
                errors: { general: "Forkert brugernavn eller adgangskode"},

            };
        }

        const user = await response.json();

        const cookieStore = cookies();
        (await cookieStore).set(
            "AuthToken",
            JSON.stringify({ user, username: user.username}),
            { httpOnly: true, maxAge: 60 * 30, path:"/"}
        );

        return{success: true, message:"login lykkedes"};
    } catch (error) {
        console.error("Login fejl", error);
        return {
            success: false,
            errors: { general: "Der er en fejl under login"},
        };
    }
    }




