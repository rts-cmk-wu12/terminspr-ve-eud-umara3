
//import styles from "./page.module.css";

/*export default function Home() {
  return (
    <>
    </>
  );
*/

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import  "./welcome/welcome.scss";

/*export const metadata ={
  title: "Home",
}*/

export default function Welcome() {
    const [showButton, setShowButton] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
      router.push("/activities")
    };

    return(
        <div className="welcome">
            <div className="logoContainer">
                <Image
                src="/images/Logo (1).png" alt="logo"
                width={341}
                height={153}
                priority
                />

            </div>

            <div>

            { showButton && (
                <button className="startButton"  onClick={handleClick}>
                    kom i gang
                </button>
            )

            }
            </div>

        </div>

    );
}
