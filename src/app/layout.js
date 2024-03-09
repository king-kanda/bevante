import { Inter } from "next/font/google";
import "./globals.css";

import {Navbar,Footer} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bevante Shop",
  description: "Bevante Sweets and Hijabs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
       <head>
      
       </head>
     
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
