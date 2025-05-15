import { GoogleOAuthProvider } from "@react-oauth/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Design Platform - Find Creative Designers",
  description: "Access to talented and creative designers for original designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <GoogleOAuthProvider clientId="610052767557-himvqivk0nl1u9iti0k5301ihchl1lmc.apps.googleusercontent.com">
          <ClientLayout>{children}</ClientLayout>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
