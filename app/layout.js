import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import {
 ClerkProvider,
 SignInButton,
 SignedIn,
 SignedOut,
 UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
 title: "CALL AZ AI",
 description: "AI Customer Support Platform",
};

export default function RootLayout({ children }) {
 return (
  <ClerkProvider>
   <html lang="en">
    <body className={mulish.className}>{children}</body>
   </html>
  </ClerkProvider>
 );
}
