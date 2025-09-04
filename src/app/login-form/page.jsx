
"use client";
import "./login.scss";
import { useActionState } from "react";
import doTheLoginThing from "@/action/do-the-login-thing";


/*export const metadata ={
  title: "Login",
}*/

export default function LoginFormPage() {
    const [formState, formAction, isPending] = useActionState(doTheLoginThing, {
        success: false,
        errors: {},
    });
    return(
        <div className="login">
      <div className="login-box">
        <h1 className="login-heading">Log ind</h1>
      <form action={formAction} className="login-form">
        <div>
            <label >
                
                <input type="text" name="username" placeholder="brugernavn" className="login-input"/>
                
            </label>
            {formState?.errors?.username && (
             <p style= {{color:"red"}}> {formState.errors.username}</p>
            )}
        </div>

        <div>
            <label >
                
                <input type="password" name="password" placeholder="adgangskode" className="login-input"/>
                
            </label>
            {formState?.errors?.password && (
             <p style= {{color:"red"}}>{formState.errors.password}</p>
            )

            }
        </div>
        <button className="login-button" type="submit" disabled={isPending}>
            {isPending? "Logger ind..." : "Log ind"}
            </button>
      
      </form>
      </div>
      </div>
    );
}