import "./globals.css";


import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/providers/AuthProvider";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Pet Adoption Platform",
  description: "Find your perfect pet companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
         
        <AuthProvider>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster
  position="top-center"
  containerStyle={{
    top:
      typeof window !== "undefined" &&
      window.innerWidth < 640
        ? 60
        : 80,
  }}
  toastOptions={{
    duration: 3500,

    style: {
      borderRadius:
        typeof window !== "undefined" &&
        window.innerWidth < 640
          ? "14px"
          : "20px",

      padding:
        typeof window !== "undefined" &&
        window.innerWidth < 640
          ? "10px 12px"
          : "16px 20px",

      fontWeight: "700",

      fontSize:
        typeof window !== "undefined" &&
        window.innerWidth < 640
          ? "11px"
          : "14px",

      minWidth:
        typeof window !== "undefined" &&
        window.innerWidth < 640
          ? "220px"
          : "320px",

      maxWidth:
        typeof window !== "undefined" &&
        window.innerWidth < 640
          ? "260px"
          : "420px",

      boxShadow:
        "0 20px 50px rgba(0,0,0,0.18)",
    },

    success: {
      style: {
        background:
          "linear-gradient(135deg,#16C6C0,#10B981)",
        color: "#fff",
        border: "2px solid #A7F3D0",
      },
    },

    error: {
      style: {
        background:
          "linear-gradient(135deg,#EF4444,#F97316)",
        color: "#fff",
        border: "2px solid #FECACA",
      },
    },
  }}
/>

        </AuthProvider> 
      </body>
    </html>
  );
}