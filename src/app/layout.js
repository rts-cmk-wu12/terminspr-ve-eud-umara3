//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: {
    template: "%s | Terminsprove",
    default: "Terminsprove med WU12"
  },
  description: "Terminsprove ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
