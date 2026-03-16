import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext"
import { LocationProvider } from "./context/LocationContext";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoodyGo",
  description: "FoodyGo is a fast and modern food delivery platform where users can explore restaurants, order meals online, and enjoy quick doorstep delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AuthProvider >
          <LocationProvider >
            <CartProvider>
                        {children}  
            </CartProvider>
          </LocationProvider>
         </AuthProvider>
 
      </body>
    </html>
  );
}
