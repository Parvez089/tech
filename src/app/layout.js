import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techology",
  description: "Techology IT Team",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-[#F2F4F8] h-screen"  data-theme="light" lang="en">
      <body  suppressHydrationWarning={true} >
        <div  >
          <Navbar/>
        {children}
         <Footer/>
        </div>
        
        </body>
    </html>
  );
}
