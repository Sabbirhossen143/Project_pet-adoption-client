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

          <Toaster position="top-right" />

        </AuthProvider> 
      </body>
    </html>
  );
}