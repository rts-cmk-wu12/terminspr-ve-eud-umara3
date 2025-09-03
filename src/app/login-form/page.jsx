
"use client";
import { useActionState } from "react";
import doTheLoginThing from "@/action/do-the-login-thing";

export default function LoginFormPage() {
    const [formState, formAction, isPending] = useActionState(doTheLoginThing, {
        success: false,
        errors: {},
    });
    return(
        <>
      <form action={formAction}>
        <div>
            <label >
                
                <input type="text" name="username" placeholder="brugernavn" />
                
            </label>
            {formState?.errors?.username && (
             <p style= {{color:"red"}}> {formState.errors.username}</p>
            )}
        </div>

        <div>
            <label >
                
                <input type="password" name="password" placeholder="adgangskode" />
                
            </label>
            {formState?.errors?.password && (
             <p style= {{color:"red"}}>{formState.errors.password}</p>
            )

            }
        </div>
        <button type="submit" disabled={isPending}>
            {isPending? "Logger ind..." : "Log ind"}
            </button>
      
      </form>
      
      </>
    );
}