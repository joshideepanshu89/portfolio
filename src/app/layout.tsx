import "./globals.css";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deepanshu Joshi | Full Stack Developer (React, Node.js) Germany",

  description:
    "Full Stack Developer based in Germany specializing in React, Node.js, and MERN stack. Experienced in building and deploying scalable web applications using VPS, Nginx, and modern web technologies.",

  keywords: [
    "Full Stack Developer Germany",
    "React Developer Germany",
    "Node.js Developer Germany",
    "MERN Stack Developer",
    "Next.js Developer",
    "Web Developer Portfolio Germany",
    "Deepanshu Joshi",
  ],

  authors: [{ name: "Deepanshu Joshi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} max-w-[1600px] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}