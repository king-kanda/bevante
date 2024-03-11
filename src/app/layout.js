'use client'

import { Provider } from 'react-redux';
import store from '@/utils/store'; // Adjust path as needed
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar,Footer} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
       <head>
       </head>
          <body className={inter.className}>
            <Provider store={store}>
              <Navbar/>
                {children}
              <Footer/>
            </Provider>
          </body>
    </html>
  );
}
