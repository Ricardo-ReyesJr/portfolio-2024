import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

//Page Sections...
import Main from "@/components/Main";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricardo Reyes Jr.",
  description: "Providing great web development service in the Rio Grande Valley.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Main />
        <About />
        {children}
        <Footer />
      </body>
    </html>
  );
}
