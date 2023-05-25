import "./globals.css";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from "./navbar";

const monserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Latest Movies",
  description: "A LexerCode Software",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <body className={inter.className}>{children}</body>
    </div>
  );
}
