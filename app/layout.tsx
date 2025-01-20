import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Admin Cars EM",
  description: "Course rental cars Eduardo Mares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} antialiased`}
        >
          <NextTopLoader color="#000" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
