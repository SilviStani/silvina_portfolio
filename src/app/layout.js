import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  keywords: [
    "desarrollo_Web",
    "fullstack",
    "freelancer",
  ],
  title: "Silvina-Dev Portfolio",
  description: "Desarrollo Web, Automation Testing, QA Tester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
